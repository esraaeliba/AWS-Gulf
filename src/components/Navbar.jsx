import { useState } from 'react';
import { FaGlobe } from 'react-icons/fa';
import logo from '../assets/logo.png';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isEnglish, setIsEnglish] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleLanguage = () => setIsEnglish(!isEnglish);

  const menuItems = [
    { label: isEnglish ? 'Our Services' : 'خدماتنا' },
    { label: isEnglish ? 'IT & Devices' : 'تكنولوجيا المعلومات والأجهزة' },
    { label: isEnglish ? 'Our Work' : 'أعمالنا' },
    { label: isEnglish ? 'About Us' : 'من نحن' },
    { label: isEnglish ? 'Careers' : 'الوظائف' },
    { label: isEnglish ? 'Articles' : 'مقالاتنا' },
  ];

  return (
    <nav className="w-full bg-white shadow-md px-12">
      <div className="mx-auto flex justify-between items-center">
        <div className='px-7 pt-5 pb-4'>
          <img src={logo} alt="Logo" className='w-12 h-[68px]' />
        </div>

        <div className='flex gap-16'>
          {menuItems.map((item, index) => (
            <a href='#' key={index} className="text-gray-700 hover:text-blue-600 cursor-pointer">
              {item.label}
            </a>
          ))}
        </div>

        <div className='flex gap-10'>
          <div className="flex items-center space-x-2 cursor-pointer" onClick={toggleLanguage}>

            <label className="relative inline-flex items-center cursor-pointer">
              <span className="ml-2 text-sm">{isEnglish ? 'English' : 'العربية'}</span>
              <FaGlobe />
            </label>

            <label for="toggle-example" class="flex items-center cursor-pointer relative mb-4" dir='ltr'>
            <input type="checkbox" id="toggle-example" class="sr-only" />
            <div class="toggle-bg bg-gray-200 border-2 border-gray-200 h-6 w-11 rounded-full"></div>
            </label>
          </div>

   
          <button type="button" className="w-[155px] h-[60px] bg-primary text-white px-4 py-2 rounded-md hover:bg-teal-900 transition">
            {isEnglish ? 'Contact Us' : 'اتصل بنا'}
          </button>
        </div>
      </div>

    </nav>
  );
};

export default Navbar;
