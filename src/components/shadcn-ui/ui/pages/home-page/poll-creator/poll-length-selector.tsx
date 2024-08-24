import NumberDropdown from './number-dropdown';
import { useState } from 'react';
import { PollLength } from '.';

interface PollLengthSelectorProps {
  onChange: (length: PollLength) => void;
}

const PollLengthSelector: React.FC<PollLengthSelectorProps> = ({ onChange }) => {
  const [days, setDays] = useState(1);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);

  const handleChange = (type: 'days' | 'hours' | 'minutes', value: number) => {
    const newState = { days, hours, minutes, [type]: value };

    if (type === 'days') setDays(value);
    if (type === 'hours') setHours(value);
    if (type === 'minutes') setMinutes(value);

    onChange(newState);
  };

  return (
    <div className="p-3">
      <div className="mb-1">Poll length</div>
      <div className="flex h-[58px] w-[488px] space-x-2">
        <div className="flex space-x-2">
          <NumberDropdown
            label="Days"
            value={days}
            onChange={(value) => handleChange('days', value)}
            max={7}
          />
          <NumberDropdown
            label="Hours"
            value={hours}
            onChange={(value) => handleChange('hours', value)}
            max={23}
          />
          <NumberDropdown
            label="Minutes"
            value={minutes}
            onChange={(value) => handleChange('minutes', value)}
            max={59}
          />
        </div>
      </div>
    </div>
  );
};

export default PollLengthSelector;
