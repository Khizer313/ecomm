import React from 'react';
import { X } from 'lucide-react';

interface PopupProps {
  isVisible: boolean;
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
  showActions?: boolean;
}

const Popup: React.FC<PopupProps> = ({
  isVisible,
  message,
  onConfirm,
  onCancel,
  showActions = true,
}) => {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-sm relative">
        {/* Close icon using Lucide X */}
        <button
          onClick={onCancel}
          className="absolute top-3 right-3 text-gray-600 hover:text-gray-800"
          aria-label="Close popup"
        >
          <X size={20} />
        </button>

        <p className="text-gray-800 mb-4">{message}</p>

        {showActions && (
          <div className="flex justify-end gap-2">
            <button onClick={onCancel} className="px-4 py-2 bg-gray-200 rounded">
              No
            </button>
            <button onClick={onConfirm} className="px-4 py-2 bg-red-500 text-white rounded">
              Yes
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Popup;
