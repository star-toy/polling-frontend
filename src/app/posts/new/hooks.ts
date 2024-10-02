import { useState, useCallback, useMemo, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';

import { PollCreateRequest } from '@/api/generated/model';
import { uploadFile } from '@/api/generated/endpoints/file-storage/file-storage';
import { createPost } from '@/api/generated/endpoints/post/post';

type PollOptionImages = [
  [null | File, null | File, null | File, null | File],
  [null | File, null | File, null | File, null | File],
  [null | File, null | File, null | File, null | File],
];

const MAX_OPTION_COUNT = 4;

const createPoll = (index: number): PollCreateRequest => ({
  pollCategory: `카테고리 ${index + 1}`,
  pollDescription: '',
  pollSeq: index + 1,
  pollOptions: Array.from({ length: MAX_OPTION_COUNT }, (_, index) => ({
    pollOptionText: `선택지 ${index + 1}`,
    pollOptionSeq: index + 1,
    fileName: '',
    fileUid: '',
  })),
});

const upload = async (file: null | File) => {
  if (!file) throw new Error('file is null');

  const { fileUid, fileName } = await uploadFile({
    file,
  });

  return { fileUid, fileName };
};

const uploadPollOptionImages = (pollOptionImages: PollOptionImages) =>
  pollOptionImages
    .filter((images) => images.some((image) => image))
    .reduce(
      async (accPromise, files, pollIndex) => {
        const acc = await accPromise;

        for (const file of files) {
          const { fileUid, fileName } = await upload(file);

          if (!acc[pollIndex]) {
            acc.push([]);
          }

          acc[pollIndex].push([fileUid, fileName]);
        }

        return acc;
      },
      Promise.resolve([] as [string, string][][]),
    );

const usePostsNew = () => {
  const router = useRouter();

  const optionImageInputRef = useRef<HTMLInputElement>(null);
  const lastScrollY = useRef(0);

  const [postTitle, setPostTitle] = useState('');
  const [postImage, setPostImage] = useState<null | File>(null);

  const [polls, setPolls] = useState<PollCreateRequest[]>([createPoll(0)]);
  const [pollImages, setPollImages] = useState<PollOptionImages>([
    [null, null, null, null],
    [null, null, null, null],
    [null, null, null, null],
  ]);

  const [selectedPollIndex, setSelectedPollIndex] = useState<number>(0);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState<number>(0);

  const [displayButton, setDisplayButton] = useState(true);

  const poll = useMemo(() => polls[selectedPollIndex], [polls, selectedPollIndex]);
  const option = useMemo(() => poll.pollOptions[selectedOptionIndex], [poll, selectedOptionIndex]);
  const isDisabled = useMemo(() => {
    if (!postTitle || !postImage) return true;

    return polls.every((poll, pollIndex) => {
      if (!poll.pollCategory || !poll.pollDescription) return true;

      return poll.pollOptions.some((option, optionIndex) => {
        return !option.pollOptionText || !pollImages[pollIndex][optionIndex];
      });
    });
  }, [postTitle, postImage, poll, pollImages, selectedOptionIndex, selectedPollIndex]);
  const postImageUrl = useMemo(
    () => (postImage ? URL.createObjectURL(postImage) : '/svgs/post-image-placeholder.svg'),
    [postImage],
  );
  const pollOptionImageUrls = useMemo(
    () =>
      polls[selectedPollIndex].pollOptions.map((_, index) =>
        pollImages[selectedPollIndex][index]
          ? URL.createObjectURL(pollImages[selectedPollIndex][index])
          : '/svgs/option-image-placeholder.svg',
      ),
    [pollImages, selectedPollIndex],
  );

  const handlePostTitle = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPostTitle(e.target.value);
  }, []);

  const handlePostImage = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setPostImage(file);
  }, []);

  const handleSelectedPollIndex = useCallback((index: number) => {
    setSelectedPollIndex(index);
    setSelectedOptionIndex(0);
  }, []);

  const addPoll = useCallback(() => {
    const newPoll = createPoll(polls.length);

    setPolls((prev) => [...prev, newPoll]);
    setSelectedPollIndex(polls.length);
    setSelectedOptionIndex(0);
  }, [polls]);
  const removePoll = useCallback(() => {
    setPolls((prev) => prev.filter((_, index) => index !== selectedPollIndex));
    setSelectedPollIndex(selectedPollIndex - 1);
    setSelectedOptionIndex(0);
  }, [selectedPollIndex]);

  const handlePollCategory = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setPolls((prev) => {
        const newPolls = [...prev];
        newPolls[selectedPollIndex].pollCategory = e.target.value;
        return newPolls;
      });
    },
    [selectedPollIndex],
  );

  const handlePollDescription = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setPolls((prev) => {
        const newPolls = [...prev];
        newPolls[selectedPollIndex].pollDescription = e.target.value;
        return newPolls;
      });
    },
    [selectedPollIndex],
  );

  const handleOptionTitle = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setPolls((prev) => {
        const newPolls = [...prev];
        newPolls[selectedPollIndex].pollOptions[selectedOptionIndex].pollOptionText =
          e.target.value;
        return newPolls;
      });
    },
    [selectedPollIndex, selectedOptionIndex],
  );

  const handleOptionImage = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];

      if (file) {
        setPollImages((prev) => {
          const newPollImages = [...prev] as PollOptionImages;
          newPollImages[selectedPollIndex][selectedOptionIndex] = file;
          return newPollImages;
        });

        if (optionImageInputRef.current) {
          optionImageInputRef.current.value = '';
        }
      }
    },
    [selectedPollIndex, selectedOptionIndex],
  );

  const controlButton = useCallback(() => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > lastScrollY.current) {
      setDisplayButton(false);
    } else {
      setDisplayButton(true);
    }
    lastScrollY.current = currentScrollY;
  }, []);

  const handleSubmit = useCallback(async () => {
    const { fileUid: postImageUid, fileName: postImageFileName } = await upload(postImage);
    const pollOptionImages = await uploadPollOptionImages(pollImages);

    const response = await createPost({
      title: postTitle,
      fileUid: postImageUid,
      fileName: postImageFileName,
      polls: polls.map((poll, pollIndex) => ({
        pollCategory: poll.pollCategory,
        pollDescription: poll.pollDescription,
        pollSeq: poll.pollSeq,
        pollOptions: poll.pollOptions.map((option, optionIndex) => ({
          pollOptionText: option.pollOptionText,
          pollOptionSeq: option.pollOptionSeq,
          fileUid: pollOptionImages[pollIndex][optionIndex][0],
          fileName: pollOptionImages[pollIndex][optionIndex][1],
        })),
      })),
    });

    router.push(`/posts/${response.postUid}`);
  }, [polls, postTitle, postImage, pollImages, router]);

  useEffect(() => {
    window.addEventListener('scroll', controlButton);

    return () => {
      window.removeEventListener('scroll', controlButton);
    };
  }, [lastScrollY, controlButton]);

  return {
    postTitle,
    handlePostTitle,
    handlePostImage,
    postImageUrl,
    polls,
    selectedPollIndex,
    removePoll,
    handleSelectedPollIndex,
    addPoll,
    handlePollCategory,
    handlePollDescription,
    setSelectedOptionIndex,
    pollOptionImageUrls,
    option,
    poll,
    selectedOptionIndex,
    handleOptionTitle,
    optionImageInputRef,
    handleOptionImage,
    displayButton,
    isDisabled,
    handleSubmit,
  };
};

export { usePostsNew };
