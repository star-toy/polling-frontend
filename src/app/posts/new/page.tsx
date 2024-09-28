'use client';

import { useState, useCallback, useMemo, useRef, useEffect } from 'react';
import Image from 'next/image';

import { Textarea } from '@/components/shadcn-ui/ui/textarea';
import { Button } from '@/components/shadcn-ui/ui/button';
import { Input } from '@/components/shadcn-ui/ui/input';
import { PollCreateRequest } from '@/api/generated/model';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTrigger,
} from '@/components/shadcn-ui/ui/alert-dialog';

const MAX_POLL_COUNT = 3;
const MAX_OPTION_COUNT = 4;

const createPoll = (index: number): PollCreateRequest => ({
  pollCategory: `카테고리 ${index + 1}`,
  pollDescription: '',
  pollOptions: Array.from({ length: MAX_OPTION_COUNT }, (_, index) => ({
    pollOptionText: `선택지 ${index + 1}`,
    pollOptionSeq: index + 1,
  })),
  pollSeq: index + 1,
});

const PostCreatePage = () => {
  const lastScrollY = useRef(0);

  const [title, setTitle] = useState('');

  const [polls, setPolls] = useState<PollCreateRequest[]>([createPoll(0)]);

  const [selectedPollIndex, setSelectedPollIndex] = useState<number>(0);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState<number>(0);

  const [displayButton, setDisplayButton] = useState(true);

  const poll = useMemo(() => polls[selectedPollIndex], [polls, selectedPollIndex]);
  const option = useMemo(() => poll.pollOptions[selectedOptionIndex], [poll, selectedOptionIndex]);

  const handleTitle = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTitle(e.target.value);
  }, []);

  const handleSelectedPollIndex = useCallback((index: number) => {
    setSelectedPollIndex(index);
    setSelectedOptionIndex(0);
  }, []);
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

  const addPoll = useCallback(() => {
    const newPoll = createPoll(polls.length);

    setPolls((prev) => [...prev, newPoll]);
    setSelectedPollIndex(polls.length);
    setSelectedOptionIndex(0);
  }, [polls]);

  const controlButton = useCallback(() => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > lastScrollY.current) {
      setDisplayButton(false);
    } else {
      setDisplayButton(true);
    }
    lastScrollY.current = currentScrollY;
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', controlButton);

    return () => {
      window.removeEventListener('scroll', controlButton);
    };
  }, [lastScrollY, controlButton]);

  return (
    <>
      <section className="my-6 flex flex-col">
        <section className="mx-4 flex flex-col gap-6">
          <h2 className="text-sub-title-2">게시글 등록</h2>

          <div className="flex flex-col gap-2">
            <p className="text-body-3 text-gray-700">게시글 제목</p>

            <Textarea
              placeholder="게시글 제목을 작성해주세요."
              value={title}
              onChange={handleTitle}
              className="resize-none"
            />
          </div>

          <div className="flex flex-col gap-2">
            <p className="text-body-3 text-gray-700">게시글 이미지</p>

            <button className="flex h-[220px] flex-col items-center justify-center gap-2 border border-gray-300 bg-gray-200">
              <Image
                src="/svgs/image-upload-placeholder.svg"
                alt="게시글 이미지 업로드"
                width={40}
                height={40}
                style={{ width: 40, height: 40 }}
              />

              <p className="text-body-3 text-gray-400">클릭해서 이미지 업로드</p>
            </button>
          </div>
        </section>

        <section className="mt-10 flex flex-col border-b border-gray-300">
          <h2 className="px-4 text-sub-title-2">카테고리 추가</h2>

          <section className="my-6 flex flex-wrap gap-2 px-4">
            {polls.map((p, index) => {
              if (index === selectedPollIndex) {
                return (
                  <Button variant="chip-secondary" key={index} className="flex items-center gap-2">
                    <p>{p.pollCategory}</p>

                    {polls.length > 1 && (
                      <AlertDialog>
                        <AlertDialogTrigger asChild>
                          <Image
                            src="/svgs/trash-icon.svg"
                            alt="카테고리 삭제 버튼"
                            width={16}
                            height={16}
                          />
                        </AlertDialogTrigger>

                        <AlertDialogContent className="flex h-[294px] w-[358px] flex-col justify-between bg-white">
                          <AlertDialogHeader className="items-center gap-4">
                            <Image
                              src="/svgs/yellow-warn.svg"
                              alt="경고 아이콘"
                              width={64}
                              height={64}
                            />

                            <div className="flex flex-col items-center gap-1">
                              <p className="text-sub-title-3">삭제하시겠습니까?</p>
                              <p className="text-body-1 font-normal text-gray-600">
                                삭제하게 되면 복구가 되지 않습니다.
                              </p>
                            </div>
                          </AlertDialogHeader>

                          <AlertDialogFooter className="w-full flex-row items-center gap-2 *:h-[52px]">
                            <AlertDialogCancel asChild>
                              <Button variant="modal-cancel" className="mt-0 flex-1">
                                취소
                              </Button>
                            </AlertDialogCancel>

                            <AlertDialogAction asChild>
                              <Button
                                variant="modal-action"
                                className="flex-1"
                                onClick={removePoll}
                              >
                                삭제
                              </Button>
                            </AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                    )}
                  </Button>
                );
              } else {
                return (
                  <Button
                    variant="chip-primary"
                    key={index}
                    className="flex items-center gap-2"
                    onClick={() => handleSelectedPollIndex(index)}
                  >
                    <p>{p.pollCategory}</p>
                  </Button>
                );
              }
            })}

            {polls.length < MAX_POLL_COUNT && (
              <Button variant="chip-primary" onClick={addPoll} className="flex items-center gap-2">
                <p>카테고리 추가</p>
                <Image
                  src="/svgs/gray-plus-icon.svg"
                  alt="카테고리 추가 버튼"
                  width={16}
                  height={16}
                />
              </Button>
            )}
          </section>
        </section>

        <section className="px-4 pt-8">
          <section className="flex flex-col gap-10">
            <section className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <p className="text-body-3 text-gray-700">카테고리 이름</p>

                <Input
                  placeholder="카테고리 이름을 작성해주세요."
                  value={polls[selectedPollIndex].pollCategory}
                  onChange={handlePollCategory}
                />
              </div>

              <div className="flex flex-col gap-2">
                <p className="text-body-3 text-gray-700">카테고리 설명</p>

                <Textarea
                  placeholder="카테고리 설명을 작성해주세요."
                  value={polls[selectedPollIndex].pollDescription}
                  onChange={handlePollDescription}
                  className="resize-none"
                />
              </div>
            </section>

            <section className="flex flex-col gap-2 border-b border-gray-300 pb-8">
              <p className="text-body-3 text-gray-800">투표 선택지를 선택하여 입력해주세요.</p>

              <section className="flex flex-wrap gap-4">
                {poll.pollOptions.map((option, index) => {
                  return (
                    <Button
                      className="flex w-[171px] flex-col"
                      key={index}
                      onClick={() => setSelectedOptionIndex(index)}
                    >
                      <div className="flex h-[140px] w-full items-center justify-center rounded-t-lg bg-gray-200">
                        <Image
                          src="/svgs/image-upload-placeholder.svg"
                          alt="게시글 이미지 업로드"
                          width={40}
                          height={40}
                          style={{ width: 40, height: 40 }}
                        />
                      </div>

                      <div className="flex h-[37px] w-full items-center justify-center rounded-b-lg border border-gray-200 bg-gray-50 text-caption-1 text-gray-500">
                        {option.pollOptionText}
                      </div>
                    </Button>
                  );
                })}
              </section>
            </section>
          </section>
        </section>

        <section className="flex flex-col gap-2 px-4 py-8">
          <h4 className="text-sub-title-4">{option.pollOptionText}</h4>

          <section className="flex flex-col gap-4 rounded-lg border bg-gray-100 p-6">
            <div className="flex flex-col gap-2">
              <p className="text-body-3 text-gray-700">선택지 이름</p>

              <Input
                placeholder="선택지 이름을 작성해주세요."
                value={poll.pollOptions[selectedOptionIndex].pollOptionText}
                onChange={handleOptionTitle}
              />
            </div>

            <div className="flex flex-col gap-2">
              <p className="text-body-3 text-gray-700">선택지 이미지</p>

              <button className="flex h-[220px] flex-col items-center justify-center gap-2 border border-gray-300 bg-gray-200">
                <Image
                  src="/svgs/image-upload-placeholder.svg"
                  alt="선택지 이미지 업로드"
                  width={40}
                  height={40}
                  style={{ width: 40, height: 40 }}
                />

                <p className="text-body-3 text-gray-400">클릭해서 이미지 업로드</p>
              </button>
            </div>
          </section>
        </section>
      </section>

      <div
        className={`fixed bottom-0 left-[50%] flex w-[var(--layout-width)] -translate-x-1/2 transform items-center justify-center bg-white px-4 py-6 shadow-[0_-8px_10px_0_rgba(0,0,0,0.1)] transition-all duration-300 ease-in-out ${
          displayButton ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
        }`}
      >
        <Button variant="action" font="sub-title-4" className="w-full">
          등록
        </Button>
      </div>
    </>
  );
};

export default PostCreatePage;
