import { CircleUserRound } from 'lucide-react';
import PollAuthorInfo from '../home-page/existing-poll/poll-author-info';
import ActionButtons from '../home-page/existing-poll/action-button';

interface CommentItemProps {
  nickname: string;
  username: string;
  postedAt: string;
  content: string;
}

const CommentItem = ({ nickname, username, postedAt, content }: CommentItemProps) => (
  <div className="flex px-4">
    <CircleUserRound size={40} color="#d1d5db" className="mr-2" />
    <div className="w-full">
      <PollAuthorInfo nickname={nickname} username={username} postedAt={postedAt} />
      <p className="text-start text-sm">{content}</p>
      <ActionButtons size={16} />
    </div>
  </div>
);
export default CommentItem;
