import { useParams } from 'react-router-dom';
import { CircleUserRound } from 'lucide-react';
import Candidates from '../home-page/existing-poll/candidates';

import PollAuthorInfo from '../home-page/existing-poll/poll-author-info';
import ActionButtons from '../home-page/existing-poll/action-button';
import { Textarea } from '@/components/shadcn-ui/ui/textarea';
import { Button } from '@/components/shadcn-ui/ui/button';
import CommentItem from './comment-item';

interface CommentData {
  id: number;
  nickname: string;
  username: string;
  postedAt: string;
  content: string;
}

const comments: CommentData[] = [
  { id: 1, nickname: '닉네임1', username: '@nickname1010', postedAt: '4m', content: '댓글 내용1' },
  { id: 2, nickname: '닉네임2', username: '@nickname1011', postedAt: '10m', content: '댓글 내용2' },
  { id: 3, nickname: '닉네임3', username: '@nickname1012', postedAt: '2h', content: '댓글 내용3' },
];

const DetailPage: React.FC = () => {
  const { id } = useParams();
  console.log(id);

  return (
    <div className="flex flex-col">
      <div className="px-4">
        <div className="flex">
          <CircleUserRound size={40} color="#d1d5db" className="mr-2" />
          <div className="w-full">
            <PollAuthorInfo nickname="닉네임" username="@nickname1010" postedAt="1h" />
            <p className="mb-4 text-start text-sm">본문 내용</p>
          </div>
        </div>

        <div className="flex w-full flex-col">
          <Candidates />
          <span className="mb-4 text-sm">2 Votes • 8 Hours left</span>
        </div>
        <ActionButtons />
      </div>

      <div className="my-3 border-b" />

      {/* 댓글창  */}
      <div className="flex p-4">
        <CircleUserRound size={40} color="#d1d5db" className="mr-2" />
        <div className="flex w-[514px] items-center justify-between">
          <Textarea
            placeholder="Post your reply"
            className="h-[40px] resize-none border-none px-0 text-xl leading-none"
          />
          <Button className="flex items-center rounded-full bg-blue-400 px-4 text-base font-semibold text-white hover:bg-blue-500">
            Reply
          </Button>
        </div>
      </div>

      <div className="my-2 border-b" />

      {comments.map((comment, index) => (
        <div key={comment.id}>
          <CommentItem {...comment} />
          {index < comments.length - 1 && <div className="my-2 border-b" />}
        </div>
      ))}
    </div>
  );
};

export default DetailPage;
