import React from 'react';
import { ShoppingCart } from 'lucide-react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  onClick?: () => void;
  icon?: React.ReactNode;
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  className = '',
  onClick,
  icon,
  fullWidth = false,
}) => {
  const baseClasses = 'flex items-center justify-center px-4 py-2 rounded-md transition-all duration-200 font-medium';
  
  const variantClasses = {
    primary: 'bg-black text-white hover:bg-gray-800',
    secondary: 'bg-white text-black border border-gray-300 hover:bg-gray-50',
    outline: 'bg-transparent text-black border border-gray-300 hover:bg-gray-50',
  };
  
  const widthClass = fullWidth ? 'w-full' : '';
  
  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${widthClass} ${className}`}
      onClick={onClick}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </button>
  );
};

export const AddToCartButton: React.FC<{ onClick?: () => void; className?: string }> = ({ 
  onClick, 
  className = '' 
}) => {
  return (
    <Button
      variant="primary"
      onClick={onClick}
      icon={<ShoppingCart size={18} />}
      fullWidth
      className={`group ${className}`}
    >
      <span className="ml-2">Add To Cart</span>
    </Button>
  );
};

export default Button;