import React, { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

const Topbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="px-6 md:px-16 py-2 text-sm text-white bg-black font-poppins">
      <div className="container relative flex items-center justify-between mx-auto">
        {/* Spacer */}
        <div className="hidden w-20 md:block" />

        {/* Center Message */}
        <p className="mx-auto font-normal text-center lg:pl-24">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          <span className="font-semibold underline cursor-pointer">
            Shop Now
          </span>
        </p>

        {/* Language Dropdown */}
        <div className="relative pr-2 ml-auto md:pr-6" ref={dropdownRef}>
          <button
            onClick={toggleDropdown}
            className="flex items-center font-normal focus:outline-none"
            aria-haspopup="listbox"
            aria-expanded={isOpen}
          >
            <span>English</span>
            <ChevronDown
              className={`w-4 h-4 ml-1 transition-transform duration-300 ${
                isOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {/* Dropdown Menu */}
          <ul
            className={`absolute right-0 z-50 mt-2 text-sm text-black bg-white rounded shadow-md w-28 transition-all duration-300 origin-top transform ${
              isOpen
                ? "scale-100 opacity-100"
                : "scale-95 opacity-0 pointer-events-none"
            }`}
          >
            <li className="px-3 py-2 cursor-pointer hover:bg-gray-100">
              English
            </li>
            <li className="px-3 py-2 text-gray-400 cursor-not-allowed">Urdu</li>
            <li className="px-3 py-2 text-gray-400 cursor-not-allowed">
              Arabic
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
