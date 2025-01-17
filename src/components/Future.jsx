import twitter from '/src/assets/icons/Twitter.svg';
import snapchat from '/src/assets/icons/Snapchat.svg';
import facbook from '/src/assets/icons/Facebook.svg';
import youtube from '/src/assets/icons/Youtube.svg';
import linkedin from '/src/assets/icons/Linkedin.svg';
import instagram from '/src/assets/icons/Instagram.svg';
import behance from '/src/assets/icons/Behance.svg';
import main from '/src/assets/main.png';

const Future = () => {
    return (
        <div className="flex py-[60px] px-12">
            <div className='flex flex-col w-full max-w-[551px] gap-8'>

                <div className="flex flex-col gap-[24px] h-80">
                    <h1 className="text-[48px] font-bold text-primary">دليلك نحو المستقبل</h1>
                    <p className="text-[20px] font-light leading-[30px] text-gray-500">استشارات التسويق، تصميم واجهات المستخدم وتجربة المستخدم للمواقع، تطبيقات الهواتف المحمولة، الإعلانات المدفوعة، إنشاء المحتوى، التصميم الجرافيكي، الذكاء الاصطناعي وإنتاج الفيديو</p>
                </div>
                <button type="button" className="flex w-full max-w-[220px] h-full max-h-[80px] px-[32px] py-[24px] justify-center items-center rounded-[10px] bg-primary text-white hover:bg-[#295f70] transition-colors duration-300 font-bold">
                    اتصل بنا الان
                </button>
                <div className="flex gap-[24px] text-[24px]">
                <img src={twitter} alt='twitter' className='w-auto' />
                <img src={snapchat} alt='snapchat' className='w-auto' />
                <img src={facbook} alt='facbook' className='w-auto' />
                <img src={youtube} alt='youtube' className='w-auto' />
                <img src={linkedin} alt='linkedin' className='w-auto' />
                <img src={instagram} alt='instagram' className='w-auto' />
                <img src={behance} alt='behance' className='w-auto' />
                </div>
            </div>

            <div className='justify-items-center w-full max-w-[777px]'>

                <div className="flex justify-center items-center w-full max-w-[394px] px-14 py-16">
                    <img src={main} alt='Main' className="w-full max-w-[282.842px] h-full max-h-[273.659px] " />
                </div>


                <div className='flex w-full justify-between'>
                    <button  type="button" className="w-full max-w-[324px] px-[16px] py-[24px] rounded-[10px] border border-[#295F70] bg-white hover:bg-[#295F70] hover:text-white transition-colors duration-300 text-primary text-center font-semibold  text-[24px] font-[Montserrat]">
                        Software Solutions
                    </button>
                    <button  type="button" className="w-full max-w-[324px] px-[16px] py-[24px] rounded-[10px] border border-[#295F70] bg-white hover:bg-[#295F70] hover:text-white transition-colors duration-300 text-primary text-center font-semibold  text-[24px] font-[Montserrat]">
                        Marketing Solutions
                    </button>
                </div>

            </div>

        </div>
    );
};
export default Future;
