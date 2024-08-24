import { MessageCircleMore, Repeat2, Heart } from 'lucide-react';
import { Button } from '@/components/shadcn-ui/ui/button';

const ActionButtons = ({ size = 24 }) => (
  <div className="flex justify-between">
    <Button className="group rounded-full p-2 transition-colors duration-200 hover:bg-blue-100">
      <MessageCircleMore
        size={size}
        className="text-gray-500 duration-200 group-hover:text-blue-500"
      />
    </Button>
    <Button className="group rounded-full p-2 transition-colors duration-200 hover:bg-green-100">
      <Repeat2 size={size} className="text-gray-500 duration-200 group-hover:text-green-500" />
    </Button>
    <Button className="group rounded-full p-2 transition-colors duration-200 hover:bg-red-100">
      <Heart size={size} className="text-gray-500 duration-200 group-hover:text-red-500" />
    </Button>
  </div>
);

export default ActionButtons;
