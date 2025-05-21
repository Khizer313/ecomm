import React from 'react';
import Button from '../shared/Button';

interface JustForYouHeaderProps {
  onSeeAll: () => void;
}

const JustForYouHeader: React.FC<JustForYouHeaderProps> = ({ onSeeAll }) => {
  return (
    <div className="flex items-center justify-between mb-6">
      <div className="flex items-center">
        <div className="w-1 h-6 bg-red-500 mr-3"></div>
        <h2 className="text-2xl font-bold">Just For You</h2>
      </div>
      <Button variant="outline" onClick={onSeeAll}>
        See All
      </Button>
    </div>
  );
};

export default JustForYouHeader;