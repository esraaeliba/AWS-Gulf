import React, { useEffect, useRef } from 'react';

// Import images
import cisco from "/src/assets/partners/cisco.png";
import lenovo from "/src/assets/partners/lenovo.png";
import dell from "/src/assets/partners/dell.png";
import peplink from "/src/assets/partners/peplink.png";
import kaspersky from "/src/assets/partners/kaspersky.png";
import microsoft from "/src/assets/partners/microsoft.png";

const Partners = () => {
    const scrollRef = useRef(null);

    useEffect(() => {
        const scrollContainer = scrollRef.current;
        let scrollAmount = 0;

        const scrollStep = () => {
            if (scrollContainer) {
                scrollAmount += 1;
                if (scrollAmount >= scrollContainer.scrollWidth / 2) {
                    scrollAmount = 0;
                }
                scrollContainer.scrollLeft = scrollAmount;
            }
        };

        const interval = setInterval(scrollStep, 20);

        return () => clearInterval(interval);
    }, []);

    const images = [cisco, lenovo, dell, peplink, kaspersky, microsoft];

    return (
        <div className="border-t border-b border-gray-300 bg-white flex w-full p-[60px_48px] items-center gap-4 shadow-[0px_4px_45px_0px_rgba(0,0,0,0.05)]">
            <p className="w-1/2 text-primary text-right font-montserrat text-[32px] font-bold leading-normal  flex-shrink-0">
                شراكاتنا مع العلامات التجارية الرائدة
            </p>
            <div className="flex w-1/2 h-height max-h-[95px] justify-end items-center flex-shrink-0 overflow-hidden">
                <div className="relative overflow-hidden w-[600px] h-[95px]">
                    <div
                        ref={scrollRef}
                        className="flex gap-2 animate-scroll whitespace-nowrap"
                    >
                        {/* Original Images */}
                        {images.map((src, index) => (
                            <img
                                key={index}
                                src={src}
                                alt={`Partner ${index + 1}`}
                                className="w-[300px] h-[95px] object-contain mx-2"
                            />
                        ))}

                        {/* Duplicate Images for Smooth Infinite Scroll */}
                        {images.map((src, index) => (
                            <img
                                key={`duplicate-${index}`}
                                src={src}
                                alt={`Partner ${index + 1}`}
                                className="w-[300px] h-[95px] object-contain mx-2"
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Partners;
