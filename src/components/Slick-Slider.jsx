import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

// Import images
import nextArrow from "/src/assets/slider/next.png";
import prevArrow from "/src/assets/slider/prev.png";
import item1 from "/src/assets/slider/item1.png";
import item2 from "/src/assets/slider/item2.png";
import item3 from "/src/assets/slider/item3.png";

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", width: "48px", height: "48px" }}
      onClick={onClick}
    >
      <img src={nextArrow} alt="next" style={{ width: "100%", height: "100%" }} />
    </div>
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", width: "48px", height: "48px" }}
      onClick={onClick}
    >
      <img src={prevArrow} alt="prev" style={{ width: "100%", height: "100%" }} />
    </div>
  );
}

export default function SimpleSlider() {
  const slides = [
    {
      title: "تصميم يركز على المستخدم",
      description:
        "في ستوديو، نحرص على تصميم تجارب جذابة وبديهية. مصممة وفقًا لاحتياجاتك لجمهورك مع إعلانات ذات محتوى خاص يعكس علامتك التجارية.",
      buttonText: "اعرف المزيد →",
      image: item1,
    },
    {
      title: "تطوير تطبيقات الجوال",
      description:
        "نقدم تطبيقات موبايل مبتكرة لتطوير العلامات التجارية. حلول رقمية بالأبداع والكفاءة والتأثير.",
      buttonText: "اعرف المزيد →",
      image: item2,
    },
    {
      title: "تطوير المواقع الإلكترونية",
      description:
        "الاعتماد على تقنيات حديثة يعني استخدامنا من دربنا لتحويل الأفكار إلى واقع جمالي وتجربة ناجحة.",
      buttonText: "اعرف المزيد →",
      image: item3,
    },
    {
      title: "تصميم يركز على المستخدم",
      description:
        "في ستوديو، نحرص على تصميم تجارب جذابة وبديهية. مصممة وفقًا لاحتياجاتك لجمهورك مع إعلانات ذات محتوى خاص يعكس علامتك التجارية.",
      buttonText: "اعرف المزيد →",
      image: item1,
    },
    {
      title: "تطوير تطبيقات الجوال",
      description:
        "نقدم تطبيقات موبايل مبتكرة لتطوير العلامات التجارية. حلول رقمية بالأبداع والكفاءة والتأثير.",
      buttonText: "اعرف المزيد →",
      image: item2,
    },
    {
      title: "تطوير المواقع الإلكترونية",
      description:
        "الاعتماد على تقنيات حديثة يعني استخدامنا من دربنا لتحويل الأفكار إلى واقع جمالي وتجربة ناجحة.",
      buttonText: "اعرف المزيد →",
      image: item3,
    },
  ];

  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    adaptiveHeight: true,
    rtl: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };

  return (
  
  <>
   <div className="px-12 w-full py-8">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index}>
            <div
              className={`slide-item h-[510px] flex flex-col items-center py-2 px-4 mx-[24px] gap-4 justify-between border border-gray-200 rounded-lg`}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full max-w-[323px] max-h-[216px]"
              />
              <h2 className="text-xl font-bold mb-2 text-gray-800">
                {slide.title}
              </h2>
              <div className="h-[188px]">
                <p className="text-gray-600 mb-4 leading-relaxed text-center">
                  {slide.description}
                </p>
              </div>
              <button className="text-blue-600 hover:underline font-semibold">
                {slide.buttonText}
              </button>
            </div>
          </div>
        ))}
      </Slider>

    </div>

    <a href='/' className='text-primary font-cairo text-[20px] font-semibold leading-[30px] underline underline-offset-auto decoration-solid px-12 py-8'> أستكشف خدماتنا</a>

  </>
   
  );
}
