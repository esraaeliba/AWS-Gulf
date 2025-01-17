// import { useState } from 'react';
// import { FaGlobe } from 'react-icons/fa';
// import logo from '../assets/logo.png';
// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isEnglish, setIsEnglish] = useState(false);

//   const toggleMenu = () => setIsOpen(!isOpen);
//   const toggleLanguage = () => setIsEnglish(!isEnglish);

//   const menuItems = [
//     { label: isEnglish ? 'Our Services' : 'خدماتنا' },
//     { label: isEnglish ? 'IT & Devices' : 'تكنولوجيا المعلومات والأجهزة' },
//     { label: isEnglish ? 'Our Work' : 'أعمالنا' },
//     { label: isEnglish ? 'About Us' : 'من نحن' },
//     { label: isEnglish ? 'Careers' : 'الوظائف' },
//     { label: isEnglish ? 'Articles' : 'مقالاتنا' },
//   ];

//   return (
//     <nav className="w-full bg-white shadow-md px-12">
//       <div className="mx-auto flex justify-between items-center flex-wrap">
//         <div className='px-7 pt-5 pb-4'>
//           <img src={logo} alt="Logo" className='w-12 h-[68px]' />
//         </div>

//         <div className='flex gap-16'>
//           {menuItems.map((item, index) => (
//             <a href='#' key={index} className="text-gray-700 hover:text-blue-600 cursor-pointer">
//               {item.label}
//             </a>
//           ))}
//         </div>

//         <div className='flex gap-10'>

//           <div className="flex items-center space-x-2 cursor-pointer" onClick={toggleLanguage}>
//             <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
//               <input type="checkbox" id="toggle" checked={!isEnglish} onChange={toggleLanguage} className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"/>
//               <label htmlFor="toggle" className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"></label>
//             </div>
//             <label htmlFor="toggle" className="text-gray-700 cursor-pointer">
//               {isEnglish ? 'English' : 'العربية'}
//             </label>
//             <FaGlobe />
//           </div>

//           {/* <button type="button" className="w-[155px] h-[60px] bg-primary text-white px-4 py-2 rounded-md hover:bg-teal-900 transition">
//             {isEnglish ? 'Contact Us' : 'اتصل بنا'}
//           </button> */}
//         </div>
//       </div>

//     </nav>
//   );
// };

// export default Navbar;


import React, { useState } from 'react';
import { FaBars, FaTimes, FaGlobe } from 'react-icons/fa';
// import { useState } from 'react';
// import { FaGlobe } from 'react-icons/fa';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isEnglish, setIsEnglish] = useState(true);

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
      <div className="mx-auto flex justify-between items-center flex-wrap">
        <div className='px-7 pt-5 pb-4'>
          <img src={logo} alt="Logo" className='w-12 h-[68px]' />
        </div>

        <div className='block lg:hidden'>
          <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        <div className={`lg:flex gap-16 items-center ${isOpen ? 'block' : 'hidden'} lg:block`}>
          {menuItems.map((item, index) => (
            <a href='#' key={index} className="text-gray-700 hover:text-blue-600 cursor-pointer">
              {item.label}
            </a>
          ))}
          <div className='sm:hidden lg:flex gap-10'>

            <div className="flex items-center space-x-2 cursor-pointer" onClick={toggleLanguage}>
              <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
                <input type="checkbox" id="toggle" checked={!isEnglish} onChange={toggleLanguage} className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer" />
                <label htmlFor="toggle" className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"></label>
              </div>
              <label htmlFor="toggle" className="text-gray-700 cursor-pointer">
                {isEnglish ? 'English' : 'العربية'}
              </label>
              <FaGlobe />
            </div>

            <button type="button" className="w-[155px] h-[60px] bg-primary text-white px-4 py-2 rounded-md hover:bg-teal-900 transition">
              {isEnglish ? 'Contact Us' : 'اتصل بنا'}
            </button>
          </div>
        </div>



      </div>
    </nav>
  );
};

export default Navbar;