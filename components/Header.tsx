import Link from 'next/link';

const Page = () => {
  return (
    <div className="fixed z-50 bg-white w-full">
      <div className="flex flex-col items-center relative">
        <div className="h-6 lg:h-6"></div>
        <Link href="/">
          <img
            className="flex-none w-[300px] lg:w-[500px]"
            alt=""
            src="/images/logo.png"
          />
        </Link>
        <div className="h-4 lg:h-4"></div>
        <div className="flex-none flex flex-row items-center justify-between gap-4 lg:gap-8">
          <Link
            href="/#"
            className="border-solid border-2 font-medium px-4 lg:px-8 py-1 rounded-sm hover:bg-[#FFF210] focus:bg-[#FFF210] text-xs lg:text-base"
          >
            ABOUT
          </Link>
          <Link
            href="/team"
            className="border-solid border-2 font-medium px-4 lg:px-8 py-1 rounded-sm hover:bg-[#FFF210] focus:bg-[#FFF210] text-xs lg:text-base"
          >
            OUR TEAM
          </Link>
          <Link
            href="/talents"
            className="border-solid border-2 font-medium px-4 lg:px-8 py-1 rounded-sm hover:bg-[#FFF210] focus:bg-[#FFF210] text-xs lg:text-base"
          >
            TALENTS
          </Link>
          <Link
            href="/contact"
            className="border-solid border-2 font-medium px-4 lg:px-8 py-1 rounded-sm hover:bg-[#FFF210] focus:bg-[#FFF210] text-xs lg:text-base"
          >
            CONTACT
          </Link>
        </div>
      </div>
      <div className="h-2"></div>
    </div>
  );
};

export default Page;
