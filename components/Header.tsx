import Link from 'next/link';

const Page = () => {
  return (
    <div className="flex flex-col items-center relative z-50">
      <div className="h-6 lg:h-6"></div>
      <Link href="/">
        <img
          className="flex-none w-[300px] lg:w-[500px]"
          alt=""
          src="/images/logo.png"
        />
      </Link>
      <div className="h-4 lg:h-4"></div>
      <div className="flex-none flex flex-row items-center justify-between gap-4 lg:gap-12">
        <Link
          href="/#"
          className="border-solid border-2 font-medium px-8 py-1 rounded-sm hover:bg-[#FFF210] focus:bg-[#FFF210]"
        >
          ABOUT
        </Link>
        <Link
          href="/team"
          className="border-solid border-2 font-medium px-8 py-1 rounded-sm hover:bg-[#FFF210] focus:bg-[#FFF210]"
        >
          OUR TEAM
        </Link>
        <Link
          href="/talents"
          className="border-solid border-2 font-medium px-8 py-1 rounded-sm hover:bg-[#FFF210] focus:bg-[#FFF210]"
        >
          TALENTS
        </Link>
        <Link
          href="/contact"
          className="border-solid border-2 font-medium px-8 py-1 rounded-sm hover:bg-[#FFF210] focus:bg-[#FFF210]"
        >
          CONTACT
        </Link>
      </div>
    </div>
  );
};

export default Page;
