import React, { useState, useEffect } from 'react';

const AWSGulf = () => {
    const words = ['الثقة', 'التعاون', 'التنوع', 'الالتزام', 'الابتكار', 'الاحترام', 'الايجابية'];
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
        }, 500);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className='flex sm:flex-col lg:flex-row sm:gap-16 sm:items-center xl:gap-0 w-full bg-white p-12 mb-52'>
            <div className='w-full max-w-[438px] h-[655px] rounded-[10px] bg-[#EAF5F6] flex justify-center items-center mx-28'>
                <p className="text-[#478B9C] text-center font-[Montserrat] text-[64px] font-bold leading-[100px] transition-opacity duration-500">
                    {words[currentIndex]}
                </p>
            </div>
            <div className="flex flex-col justify-center gap-[30px] w-full max-w-[664px]">
                <p className="self-stretch text-right text-primary font-[Cairo] text-[32px] font-bold leading-normal">
                حول AWS GULF 
                </p>
                <p className="self-stretch text-right text-[#333] font-[Cairo] text-[16px] font-normal leading-[30px]">
                    تعتبر AWS شركة رائدة في مجال تكامل نظم تكنولوجيا المعلومات وتقديم الخدمات، تأسست في عام 2024 مع تركيز على تقديم حلول الأجهزة التكنولوجية المتطورة. إدراكًا منها للتطور المستمر في المشهد التكنولوجي واحتياجات السوق المتغيرة بسرعة، وسعت الشركة محفظتها لتشمل خدمات البرمجيات. لم يكن هذا الإضافة مجرد تحسين، بل ضرورة لتلبية متطلبات الأعمال الحديثة المتطورة. من خلال دمج خدمات البرمجيات، تهدف AWS GULF إلى توفير حلول شاملة تمكّن عملاءها من التميز في سوق تنافسية. ومع التزامها بالابتكار والتميز، تكرس AWS GULF جهودها لتحقيق تأثير كبير من خلال تلبية وتجاوز توقعات العملاء.
                </p>

                <div className='flex gap-[60px]'>
                    <div className='flex flex-col w-[270px]'>
                        <button className=" text-[#FFF] rounded-lg border border-primary bg-gradient-to-t from-[#295F70] to-[#002C38] py-6 px-20 justify-center items-center cursor-default">
                            الإبداع
                        </button>
                        <div className="list_items">
                        <p>تصاميم رائدة</p>
                        <p>
                            إنشاء محتوى إبداعي
                        </p>
                        <p>
                            تجربة مستخدم تفاعلية
                        </p>
                        <p>
                            العلامات التجارية الاستراتيجية والتصميمات الجرافيكية
                        </p>
                        <p>
                            حلول مدفوعة بالذكاء الاصطناعي
                        </p>
                        </div>
                        <a href='' className='text-primary font-cairo text-[20px] font-semibold leading-[30px] underline underline-offset-auto decoration-solid'>مزيد عنّا</a>
                    </div>
                    <div className='flex flex-col w-[270px]'>
                        <button className=" text-[#FFF] rounded-lg border border-primary bg-gradient-to-t from-[#295F70] to-[#002C38] py-6 px-20 justify-center items-center cursor-default">
                            التكنولوجيا
                        </button>
                        <div className="list_items">
                        <p>
                            تصميم واجهات المستخدم وتجربة المستخدم
                        </p>
                        <p>
                            برمجة تطبيقات الهاتف المحمول باستخدام Native وFlutter                        </p>
                        <p>
                            حلول التجارة الإلكترونية
                        </p>
                        <p>
                            تطوير البرمجيات المخصصة
                        </p>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    );
};

export default AWSGulf;