import { Ellipsis } from 'lucide-react';

interface PollAuthorInfoProps {
  nickname: string;
  username: string;
  postedAt: string;
}

const PollAuthorInfo = ({ nickname, username, postedAt }: PollAuthorInfoProps) => (
  <div className="flex items-center justify-between">
    <div className="flex gap-1 text-sm">
      <span className="mr-1">{nickname}</span>
      <span>{username}</span>
      <span>•</span>
      <span>{postedAt}</span>
    </div>
    <Ellipsis size={18} />
  </div>
);

export default PollAuthorInfo;
