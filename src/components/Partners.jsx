import React, { useEffect, useRef } from 'react';

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
                        {[
                            "/src/assets/partners/cisco.png",
                            "/src/assets/partners/lenovo.png",
                            "/src/assets/partners/dell.png",
                            "/src/assets/partners/peplink.png",
                            "/src/assets/partners/Kaspersky.png",
                            "/src/assets/partners/microsoft.png",
                        ].map((src, index) => (
                            <img
                                key={index}
                                src={src}
                                alt={`Partner ${index + 1}`}
                                className="w-[300px] h-[95px] object-contain mx-2"
                            />
                        ))}

                        {/* Duplicate Images for Smooth Infinite Scroll */}
                        {[
                            "/src/assets/partners/cisco.png",
                            "/src/assets/partners/lenovo.png",
                            "/src/assets/partners/dell.png",
                            "/src/assets/partners/peplink.png",
                            "/src/assets/partners/Kaspersky.png",
                            "/src/assets/partners/microsoft.png",
                        ].map((src, index) => (
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