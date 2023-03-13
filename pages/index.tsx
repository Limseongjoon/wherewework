import Link from 'next/link';
import Header from '../components/Header';

const Page = () => {
  return (
    <div className="flex flex-col items-center w-screen max-h-fit bg-white text-29xl font-pretendard">
      <Header />
      <div className="h-64"></div>
      <img className="w-10/12 lg:w-[980px]" alt="" src="/images/index-1.png" />
      <div className="h-16 lg:h-24"></div>
      <img className="w-10/12 lg:w-[980px]" alt="" src="/images/index-2.png" />
      <div className="h-16 lg:h-24"></div>
      <img className="w-10/12 lg:w-[980px]" alt="" src="/images/index-3.png" />
      <div className="h-16 lg:h-24"></div>
      <img className="w-10/12 lg:w-[980px]" alt="" src="/images/index-4.png" />
      <div className="h-32 lg:h-36"></div>
      <div className="w-full h-[120px] lg:h-[240px] flex flex-col items-center justify-center gap-4 lg:gap-10 bg-black text-white text-center">
        <div className="w-full text-base lg:text-10xl font-bold tracking-wider">
          WHERE WE WORK
        </div>
        <div className="text-6xs lg:text-base font-regular">
          © WWW. ALL RIGHTS RESERVED.
        </div>
      </div>
    </div>
  );
};

export default Page;
