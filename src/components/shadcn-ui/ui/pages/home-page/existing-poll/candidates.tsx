import { Button } from '@/components/shadcn-ui/ui/button';
import { useState } from 'react';
import { ThumbsUp } from 'lucide-react';

const Candidates = () => {
  const [candidates, setCandidates] = useState([
    { id: 1, name: '뉴진스 민지', votes: 0, image: '/path/to/image1.jpg' },
    { id: 2, name: '방탄소년단 지민', votes: 0, image: '/path/to/image2.jpg' },
    { id: 3, name: '스테이시 세은', votes: 0, image: '/path/to/image3.jpg' },
  ]);

  const totalVotes = candidates.reduce((sum, candidate) => sum + candidate.votes, 0);

  const handleVote = (id: number) => {
    setCandidates(
      candidates.map((candidate) =>
        candidate.id === id ? { ...candidate, votes: candidate.votes + 1 } : candidate
      )
    );
  };

  return (
    <div className="mb-2 w-full rounded border p-3">
      {candidates.map((candidate, index) => (
        <div key={candidate.id} className="mb-5 flex items-center last:mb-0">
          <div className="mr-3 text-lg font-semibold">{index + 1}</div>
          <div className="mr-4 h-10 w-10 rounded bg-gray-200"></div>
          <div className="mb-1 flex flex-1 items-center">
            <div className="flez flex-1 flex-col justify-between">
              <div className="flex justify-between">
                <span className="mb-2 text-sm">{candidate.name}</span>
                <span className="text-sm">
                  {candidate.votes} 표 /{' '}
                  {totalVotes ? ((candidate.votes / totalVotes) * 100).toFixed(1) : 0}%
                </span>
              </div>
              <div className="h-2.5 w-full rounded-full bg-gray-200">
                <div
                  className="h-2.5 rounded-full bg-blue-600 transition-all duration-300 ease-in-out"
                  style={{
                    width: `${totalVotes ? (candidate.votes / totalVotes) * 100 : 0}%`,
                  }}
                ></div>
              </div>
            </div>
            <Button
              onClick={() => handleVote(candidate.id)}
              className="ml-5 h-0 p-0 text-gray-500 transition-colors hover:text-blue-500"
            >
              <ThumbsUp size={25} />
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Candidates;
