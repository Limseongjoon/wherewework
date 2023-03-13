import Link from 'next/link';
import Header from '../components/Header';

const Page = () => {
  return (
    <div>
      <div className="flex flex-col items-center w-screen max-h-fit bg-white text-29xl font-pretendard">
        <Header />
        <div className="h-4 lg:h-8"></div>
        <div className="font-medium text-xl sm:text-2xl text-center mt-20 tracking-[4px] mb-6">
          Contact Us
        </div>
        <div className="text-center break-keep text-base font-light sm:text-lg sm:leading-7 tracking-wide">
          <div>
            아래의 메일주소로 연락을 주시면 성심껏 상담을 도와드리겠습니다.
          </div>
        </div>
        <div className="h-2" />
        <div className="max-w-xl w-full text-center">
          <div className="flex flex-row justify-center sm:text-base tracking-wider">
            <a
              href="2023wwwstartup@gmail.com"
              className="border-solid border-2 font-medium px-8 py-1 rounded-sm hover:bg-[#FFF210] focus:bg-[#FFF210]"
            >
              2023wwwstartup@gmail.com
            </a>
          </div>
        </div>
        <div className="h-64 lg:h-72"></div>
        <div className="w-full h-[120px] lg:h-[240px] flex flex-col items-center justify-center gap-4 lg:gap-10 bg-black text-white text-center">
          <div className="w-full text-base lg:text-10xl font-bold tracking-wider">
            WHERE WE WORK
          </div>
          <div className="text-6xs lg:text-base font-regular">
            © WWW. ALL RIGHTS RESERVED.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
