import React from 'react';

interface SidebarItem {
  label: string;
  link: string;
  isActive?: boolean;
}

const AccountSidebar: React.FC = () => {
  const menuItems: { title: string; items: SidebarItem[] }[] = [
    {
      title: 'Manage My Account',
      items: [
        { label: 'My Profile', link: '#', isActive: true },
        { label: 'Address Book', link: '#' },
        { label: 'My Payment Options', link: '#' },
      ],
    },
    {
      title: 'My Orders',
      items: [
        { label: 'My Returns', link: '#' },
        { label: 'My Cancellations', link: '#' },
      ],
    },
    {
      title: 'My Wishlist',
      items: [],
    },
  ];

  return (
    <div className="w-full md:w-64 mb-8 md:mb-0">
      {menuItems.map((section, index) => (
        <div key={index} className="mb-6">
          <h2 className="text-lg font-medium mb-2">{section.title}</h2>
          <ul className="space-y-2">
            {section.items.map((item, itemIndex) => (
              <li key={itemIndex}>
                <a
                  href={item.link}
                  className={`block text-gray-600 hover:text-red-500 ${
                    item.isActive ? 'text-red-500' : ''
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default AccountSidebar;