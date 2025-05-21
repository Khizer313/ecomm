import React from 'react';
import { X, ChevronUp, ChevronDown } from 'lucide-react';

interface CartItemProps {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
  onUpdateQuantity: (id: number, quantity: number) => void;
  onRemove: (id: number) => void;
}

const CartItem: React.FC<CartItemProps> = ({ 
  id, 
  name, 
  price, 
  quantity, 
  image, 
  onUpdateQuantity, 
  onRemove 
}) => {
  const handleIncrement = () => {
    if (quantity < 99) {
      onUpdateQuantity(id, quantity + 1);
    }
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      onUpdateQuantity(id, quantity - 1);
    }
  };

  return (
    <tr className="border-b">
      <td className="py-6">
        <div className="flex items-center">
          <button 
            onClick={() => onRemove(id)}
            className="mr-4 p-1 bg-red-100 rounded-full"
          >
            <X size={16} className="text-red-500" />
          </button>
          <div className="w-16 h-16 flex-shrink-0 border rounded overflow-hidden mr-4">
            <img src={image} alt={name} className="w-full h-full object-cover" />
          </div>
          <span className="font-medium">{name}</span>
        </div>
      </td>
      <td className="py-6 text-center">${price}</td>
      <td className="py-6">
        <div className="flex justify-center">
          <div className="relative flex items-center border border-gray-300 rounded">
            <input
              type="text"
              value={quantity.toString().padStart(2, '0')}
              readOnly
              className="w-12 h-10 text-center focus:outline-none"
            />
            <div className="flex flex-col h-full absolute right-0">
              <button
                onClick={handleIncrement}
                className="flex items-center justify-center h-5 w-6 hover:bg-gray-100"
                disabled={quantity >= 99}
              >
                <ChevronUp size={14} />
              </button>
              <button
                onClick={handleDecrement}
                className="flex items-center justify-center h-5 w-6 hover:bg-gray-100"
                disabled={quantity <= 1}
              >
                <ChevronDown size={14} />
              </button>
            </div>
          </div>
        </div>
      </td>
      <td className="py-6 text-right font-medium">${price * quantity}</td>
    </tr>
  );
};

export default CartItem