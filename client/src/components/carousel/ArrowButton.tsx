import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ArrowButtonProps {
  direction: 'left' | 'right';
  onClick: () => void;
  disabled: boolean;
}

const ArrowButton: React.FC<ArrowButtonProps> = ({ direction, onClick, disabled }) => {
  const Icon = direction === 'left' ? ChevronLeft : ChevronRight;

  return (
    <button
      className={`p-1.5 sm:p-2 rounded-full border transition-colors ${
        !disabled
          ? 'hover:bg-red-500 hover:text-white hover:border-red-500 active:bg-red-600'
          : 'opacity-50 cursor-not-allowed'
      }`}
      onClick={onClick}
      disabled={disabled}
      aria-label={direction === 'left' ? 'Previous' : 'Next'}
    >
      <Icon size={18} className="sm:w-6 sm:h-6" />
    </button>
  );
};

export default ArrowButton;
