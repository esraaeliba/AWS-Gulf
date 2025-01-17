import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", width: "48px", height: "48px" }}
      onClick={onClick}
    >
      <img src="/src/assets/slider/next.png" alt="next" />
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
      <img src="/src/assets/slider/prev.png" alt="prev" />
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
      image: "/src/assets/slider/item1.png",
    },
    {
      title: "تطوير تطبيقات الجوال",
      description:
        "نقدم تطبيقات موبايل مبتكرة لتطوير العلامات التجارية. حلول رقمية بالأبداع والكفاءة والتأثير.",
      buttonText: "اعرف المزيد →",
      image: "/src/assets/slider/item2.png",
    },
    {
      title: "تطوير المواقع الإلكترونية",
      description:
        "الاعتماد على تقنيات حديثة يعني استخدامنا من دربنا لتحويل الأفكار إلى واقع جمالي وتجربة ناجحة.",
      buttonText: "اعرف المزيد →",
      image: "/src/assets/slider/item3.png",
    },
    {
      title: "تصميم يركز على المستخدم",
      description:
        "في ستوديو، نحرص على تصميم تجارب جذابة وبديهية. مصممة وفقًا لاحتياجاتك لجمهورك مع إعلانات ذات محتوى خاص يعكس علامتك التجارية.",
      buttonText: "اعرف المزيد →",
      image: "/src/assets/slider/item1.png",
    },
    {
      title: "تطوير تطبيقات الجوال",
      description:
        "نقدم تطبيقات موبايل مبتكرة لتطوير العلامات التجارية. حلول رقمية بالأبداع والكفاءة والتأثير.",
      buttonText: "اعرف المزيد →",
      image: "/src/assets/slider/item2.png",
    },
    {
      title: "تطوير المواقع الإلكترونية",
      description:
        "الاعتماد على تقنيات حديثة يعني استخدامنا من دربنا لتحويل الأفكار إلى واقع جمالي وتجربة ناجحة.",
      buttonText: "اعرف المزيد →",
      image: "/src/assets/slider/item3.png",
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
    <div className="px-12 w-full py-8">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index}>
            <div
              className={`slide-item flex flex-col items-center py-2 px-4 mx-[24px] gap-4 justify-between h-full border border-gray-200 rounded-lg`}
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
  );
}