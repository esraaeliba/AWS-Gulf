// import { useState } from 'react';

// const SlickSlider = () => {
//   const slides = [
//     {
//       title: 'تصميم يركز على المستخدم',
//       description: 'في ستوديو، نحرص على تصميم تجارب جذابة وبديهية. مصممة وفقًا لاحتياجاتك لجمهورك مع إعلانات ذات محتوى خاص يعكس علامتك التجارية.',
//       buttonText: 'اعرف المزيد →',
//       image: '/src/assets/slider/item1.png'
//     },
//     {
//       title: 'تطوير تطبيقات الجوال',
//       description: 'نقدم تطبيقات موبايل مبتكرة لتطوير العلامات التجارية. حلول رقمية بالأبداع والكفاءة والتأثير.',
//       buttonText: 'اعرف المزيد →',
//       image: '/src/assets/slider/item2.png'
//     },
//     {
//       title: 'تطوير المواقع الإلكترونية',
//       description: 'الاعتماد على تقنيات حديثة يعني استخدامنا من دربنا لتحويل الأفكار إلى واقع جمالي وتجربة ناجحة.',
//       buttonText: 'اعرف المزيد →',
//       image: '/src/assets/slider/item3.png'
//     }
//   ];

//   const [currentIndex, setCurrentIndex] = useState(1);

//   const prevSlide = () => {
//     const newIndex = (currentIndex - 1 + slides.length) % slides.length;
//     setCurrentIndex(newIndex);
//   };

//   const nextSlide = () => {
//     const newIndex = (currentIndex + 1) % slides.length;
//     setCurrentIndex(newIndex);
//   };

//   return (
//     <div className="w-full max-w-6xl mx-auto py-10">
//       <div className="relative flex items-center justify-center gap-4">
//         {/* Left Arrow */}
//         <button
//           onClick={prevSlide}
//           className="absolute left-0 text-gray-600 hover:text-gray-800 p-2"
//         >
//           ◀
//         </button>

//         {/* Slides */}
//         {slides.map((slide, index) => (
//           <div
//             key={index}
//             className={`w-1/3 p-4 rounded-lg shadow-md text-center transition-transform duration-500 ${
//               index === currentIndex
//                 ? 'scale-105 bg-white shadow-lg'
//                 : 'scale-90 bg-gray-100 opacity-80'
//             }`}
//           >
//             <img
//               src={slide.image}
//               alt={slide.title}
//               className="mx-auto mb-4 h-40 object-contain"
//             />
//             <h2 className="text-lg font-bold mb-2">{slide.title}</h2>
//             <p className="text-gray-600 mb-4">{slide.description}</p>
//             <button className="text-blue-600 hover:underline">
//               {slide.buttonText}
//             </button>
//           </div>
//         ))}

//         {/* Right Arrow */}
//         <button
//           onClick={nextSlide}
//           className="absolute right-0 text-gray-600 hover:text-gray-800 p-2"
//         >
//           ▶
//         </button>
//       </div>
//       <a href='' className='text-primary font-cairo text-[20px] font-semibold leading-[30px] underline underline-offset-auto decoration-solid'>استكشف خدماتنا</a>

//     </div>
//   );
// };

// export default SlickSlider;

import { useState } from 'react';

const SlickSlider = () => {
  const slides = [
    {
      title: 'تصميم يركز على المستخدم',
      description: 'في ستوديو، نحرص على تصميم تجارب جذابة وبديهية. مصممة وفقًا لاحتياجاتك لجمهورك مع إعلانات ذات محتوى خاص يعكس علامتك التجارية.',
      buttonText: 'اعرف المزيد →',
      image: '/src/assets/slider/item2.png'
    },
    {
      title: 'تطوير تطبيقات الجوال',
      description: 'نقدم تطبيقات موبايل مبتكرة لتطوير العلامات التجارية. حلول رقمية بالأبداع والكفاءة والتأثير.',
      buttonText: 'اعرف المزيد →',
      image: '/src/assets/slider/item1.png'
    },
    {
      title: 'تطوير المواقع الإلكترونية',
      description: 'الاعتماد على تقنيات حديثة يعني استخدامنا من دربنا لتحويل الأفكار إلى واقع جمالي وتجربة ناجحة.',
      buttonText: 'اعرف المزيد →',
      image: '/src/assets/slider/item3.png'
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(1);

  const prevSlide = () => {
    const newIndex = (currentIndex - 1 + slides.length) % slides.length;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const newIndex = (currentIndex + 1) % slides.length;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="w-full max-w-6xl mx-auto py-10">
      <div className="relative flex items-center justify-center gap-4">
        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className="absolute left-0 text-gray-600 hover:text-gray-800 p-2"
        >
          ◀
        </button>

        {/* Slides */}
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`w-1/3 p-4 rounded-lg shadow-md text-center transition-transform duration-500 ${
              index === currentIndex
                ? 'scale-110 bg-gradient-to-b from-white to-gray-100 shadow-2xl border-2 border-blue-500'
                : 'scale-90 bg-gray-200 opacity-70'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className={`mx-auto mb-4 h-48 object-contain ${
                index === currentIndex ? 'scale-105' : 'scale-95'
              }`}
            />
            <h2 className="text-xl font-bold mb-2 text-gray-800">{slide.title}</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">{slide.description}</p>
            <button className="text-blue-600 hover:underline font-semibold">
              {slide.buttonText}
            </button>
          </div>
        ))}

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className="absolute right-0 text-gray-600 hover:text-gray-800 p-2"
        >
          ▶
        </button>
      </div>
      <a href='' className='text-primary font-cairo text-[20px] font-semibold leading-[30px] underline underline-offset-auto decoration-solid'>استكشف خدماتنا</a>

    </div>
  );
};

export default SlickSlider;
