import type { NextPage } from 'next';
import Link from 'next/link';

const FrameComponent1: NextPage = () => {
  return (
    <div className="flex flex-col items-center w-screen max-h-fit bg-[#33333D] text-29xl font-pretendard whitespace-nowrap">
      <div className="flex flex-col items-center bg-[#33333D] fixed z-10 w-full">
        <div className="flex flex-row items-center bg-[#33333D] w-10/12 h-24 text-9xl">
          <Link href="/web">
            <img
              className="flex-none w-[140px]"
              alt=""
              src="/images/logo-2.png"
            />
          </Link>
          <div className="grow"></div>
          <div className="flex-none flex flex-row items-center justify-between gap-16">
            <Link
              href="#"
              className="text-xs font-semibold text-white tracking-[0.02em]"
            >
              CONTACT
            </Link>
            <Link
              href="/web"
              className="bg-mediumslateblue hover:bg-black rounded-full py-2 px-8 text-xs text-white font-extrabold tracking-[0.05em]"
            >
              신청하기
            </Link>
          </div>
        </div>
      </div>
      <div className="h-48"></div>
      <div className="w-8/12 rounded-2xl bg-white px-16 py-12">
        <div className="font-bold text-14xl">CONTACT</div>
        <div className="h-4"></div>
        <div className="flex flex-col w-full">
          <div className="flex flex-row justify-between w-full gap-12">
            <div className="w-1/2">
              <span className="mb-1 pl-5 text-sm leading-[160%] font-medium">
                이름
              </span>
              <div className="w-full flex flex-row justify-between items-center rounded-xl bg-[#F4F6FA]  text-black px-2 py-3">
                <input
                  className="w-full placeholder:italic placeholder:text-gray-200 opacity-40 bg-[#F4F6FA] focus:outline-none font-medium text-4xs px-3"
                  placeholder="Full Name"
                  type="name"
                  name="name"
                />
              </div>
            </div>
            <div className="w-1/2">
              <span className="mb-1 pl-5 text-sm leading-[160%] font-medium">
                메일 주소
              </span>
              <div className="w-full flex flex-row justify-between items-center rounded-xl bg-[#F4F6FA] text-black px-2 py-3">
                <input
                  className="w-full placeholder:italic placeholder:text-gray-200 opacity-40 bg-[#F4F6FA] focus:outline-none font-medium text-4xs px-3"
                  placeholder="Email Address"
                  type="email"
                  name="email"
                />
              </div>
            </div>
          </div>
          <div className="w-full">
            <span className="mb-1 pl-5 text-sm leading-[160%] font-medium">
              문의 및 전달내용
            </span>
            <div className="w-full rounded-xl bg-[#F4F6FA] text-black px-2 py-3">
              <textarea
                className="w-full h-32 placeholder:italic placeholder:text-gray-200 opacity-40 bg-[#F4F6FA] focus:outline-none font-medium text-4xs px-3"
                placeholder="Write your contents here"
                name="contents"
              />
            </div>
          </div>
          <div className="h-4"></div>
          <div className="self-center">
            <b className="bg-mediumslateblue hover:bg-black rounded-full py-3 px-12 text-base text-white font-bold tracking-[0.05em] ">
              메일 전송하기
            </b>
          </div>
        </div>
      </div>
      <div className="h-48"></div>
      <div className="w-full h-[240px] flex flex-col items-center justify-center gap-10 bg-mediumslateblue text-white text-center">
        <div className="w-full text-10xl font-bold tracking-wider">URLank</div>
        <div className="text-base font-regular">
          © URLank. ALL RIGHTS RESERVED.
        </div>
      </div>
    </div>
  );
};

export default FrameComponent1;
