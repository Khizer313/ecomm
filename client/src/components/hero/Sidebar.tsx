import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';

interface CategoryProps {
  title: string;
  hasDropdown?: boolean;
  subcategories?: string[];
}

const Category: React.FC<CategoryProps> = ({ title, hasDropdown = false, subcategories = [] }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div 
        className="flex items-center justify-between py-2.5 px-4 cursor-pointer hover:bg-gray-50"
        onClick={() => hasDropdown && setIsOpen(!isOpen)}
      >
        <span className="text-sm text-gray-800 md:text-base">{title}</span>
        {hasDropdown && (
          <ChevronRight 
            className={`w-4 h-4 md:w-5 md:h-5 text-gray-500 transition-transform ${isOpen ? 'transform rotate-90' : ''}`} 
          />
        )}
      </div>
      {hasDropdown && isOpen && subcategories.length > 0 && (
        <div className="py-2 pl-8 pr-4 bg-gray-50">
          <ul className="space-y-2">
            {subcategories.map((subcategory, index) => (
              <li key={index} className="text-sm text-gray-700 cursor-pointer hover:text-black">
                {subcategory}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

const Sidebar: React.FC = () => {
  return (
    <div className="w-full bg-white rounded-lg shadow-sm md:w-64">
      <nav className="flex flex-col h-full">
        <Category 
          title="Woman's Fashion" 
          hasDropdown 
          subcategories={[
            "Dresses",
            "Tops & Shirts",
            "Jackets & Coats",
            "Pants & Capris",
            "Sweaters",
            "Accessories"
          ]}
        />
        <Category 
          title="Men's Fashion" 
          hasDropdown 
          subcategories={[
            "T-shirts",
            "Shirts",
            "Jeans",
            "Jackets",
            "Suits",
            "Accessories"
          ]}
        />
        <Category title="Electronics" />
        <Category title="Home & Lifestyle" />
        <Category title="Medicine" />
        <Category title="Sports & Outdoor" />
        <Category title="Baby's & Toys" />
        <Category title="Groceries & Pets" />
        <Category title="Health & Beauty" />
      </nav>
    </div>
  );
};

export default Sidebar;