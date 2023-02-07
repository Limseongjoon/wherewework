import type { NextPage } from 'next';
import Link from 'next/link';
import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { applicationState } from '../atoms/atoms';
import { supabase } from '../lib/client';

const FrameComponent1: NextPage = () => {
  const [application, setApplication] = useRecoilState(applicationState);

  return (
    <div className="flex flex-col items-center w-screen max-h-fit bg-[#33333D] text-29xl font-pretendard whitespace-nowrap">
      <div className="flex flex-col items-center bg-[#33333D] fixed z-10 w-full">
        <div className="flex flex-row items-center bg-[#33333D] w-10/12 h-16 lg:h-24 text-9xl">
          <Link href="/">
            <img
              className="flex-none w-[80px] lg:w-[140px]"
              alt=""
              src="/images/logo-2.png"
            />
          </Link>
          <div className="grow"></div>
          <div className="flex-none flex flex-row items-center justify-between gap-4 lg:gap-16">
            <Link
              href="#"
              className="text-7xs lg:text-xs font-semibold text-white lg:tracking-[0.02em]"
            >
              CONTACT
            </Link>
            <Link
              href="/"
              className="bg-mediumslateblue hover:bg-black rounded-full py-1.5 lg:py-2 px-4 lg:px-8 text-7xs lg:text-xs text-white font-extrabold lg:tracking-[0.05em]"
            >
              신청하기
            </Link>
          </div>
        </div>
      </div>
      <div className="h-28 lg:h-48"></div>
      <div className="w-10/12 lg:w-8/12 rounded-xl lg:rounded-2xl bg-white px-4 lg:px-16 py-6 lg:py-12">
        <div className="font-bold text-6xl lg:text-14xl pl-2">CONTACT</div>
        <div className="lg:h-4"></div>
        <div className="flex flex-col w-full">
          <div className="hidden lg:flex flex-row justify-between w-full gap-8">
            <div className="w-1/2">
              <span className="mb-1 pl-5 text-8xs text-sm leading-[160%] font-medium">
                이름 *
              </span>
              <div className="w-full flex flex-row justify-between items-center rounded-xl bg-[#F4F6FA]  text-black px-2 py-3">
                <input
                  className="w-full placeholder:italic placeholder:text-gray-200 opacity-40 bg-[#F4F6FA] border-0 outline-0 font-medium text-4xs px-3"
                  placeholder="Full Name"
                  type="name"
                  name="name"
                  value={application.name}
                  onChange={(e) =>
                    setApplication({ ...application, name: e.target.value })
                  }
                />
              </div>
            </div>
            <div className="w-1/2">
              <span className="mb-1 pl-5 text-sm leading-[160%] font-medium">
                메일 주소 *
              </span>
              <div className="w-full flex flex-row justify-between items-center rounded-xl bg-[#F4F6FA] text-black px-2 py-3">
                <input
                  className="w-full placeholder:italic placeholder:text-gray-200 opacity-40 bg-[#F4F6FA] border-0 outline-0 font-medium text-4xs px-3"
                  placeholder="Email Address"
                  type="email"
                  name="email"
                  value={application.email}
                  onChange={(e) =>
                    setApplication({ ...application, email: e.target.value })
                  }
                />
              </div>
            </div>
          </div>
          <div className="lg:hidden flex flex-col w-full">
            <div className="w-full">
              <span className="mb-1 pl-3 text-4xs lg:text-sm leading-[160%] font-medium">
                이름 *
              </span>
              <div className="w-full flex flex-row justify-between items-center rounded-lg bg-[#F4F6FA] text-black px-2 py-3">
                <input
                  className="w-full placeholder:italic placeholder:text-gray-200 placeholder:opacity-40 bg-[#F4F6FA] border-0 outline-0 font-medium text-5xs px-2"
                  placeholder="Full Name"
                  type="name"
                  name="name"
                  value={application.name}
                  onChange={(e) =>
                    setApplication({ ...application, name: e.target.value })
                  }
                />
              </div>
            </div>
            <div className="w-full">
              <span className="mb-1 pl-3 text-4xs leading-[160%] font-medium">
                메일 주소 *
              </span>
              <div className="w-full flex flex-row justify-between items-center rounded-lg bg-[#F4F6FA] text-black px-2 py-3">
                <input
                  className="w-full placeholder:italic placeholder:text-gray-200 placeholder:opacity-40 bg-[#F4F6FA] border-0 outline-0 font-medium text-5xs px-2"
                  placeholder="Email Address"
                  type="email"
                  name="email"
                  value={application.email}
                  onChange={(e) =>
                    setApplication({ ...application, email: e.target.value })
                  }
                />
              </div>
            </div>
          </div>
          <div className="w-full">
            <span className="mb-1 pl-5 text-4xs leading-[160%] font-medium">
              문의 및 전달내용
            </span>
            <div className="w-full rounded-lg bg-[#F4F6FA] text-black px-2 py-3">
              <textarea
                className="w-full h-32 placeholder:italic placeholder:text-gray-200 placeholder:opacity-40 bg-[#F4F6FA] border-0 outline-0 font-medium text-5xs px-2"
                placeholder="Write your message here"
                name="message"
                value={application.message}
                onChange={(e) =>
                  setApplication({ ...application, message: e.target.value })
                }
              />
            </div>
          </div>
          <div className="lg:h-4"></div>
          <div className="self-center">
            <b
              className="bg-mediumslateblue hover:bg-black rounded-full py-2 lg:py-3 px-8 lg:px-12 text-2xs lg:text-base text-white font-bold tracking-[0.05em] select-none cursor-pointer"
              onClick={async () => {
                console.log(application);
                if (!application.name) {
                  alert('이름을 입력해주세요.');
                } else if (
                  !application.email ||
                  !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
                    application.email
                  )
                ) {
                  alert('올바른 이메일을 입력해주세요.');
                } else {
                  await supabase().from('messages').insert(application);
                  setApplication({
                    name: '',
                    email: '',
                    message: '',
                  });
                  alert('메일이 전송되었습니다.');
                }
              }}
            >
              메일 전송하기
            </b>
          </div>
        </div>
      </div>
      <div className="h-16 lg:h-48"></div>
      <div className="w-full h-[120px] lg:h-[240px] flex flex-col items-center justify-center gap-4 lg:gap-10 bg-mediumslateblue text-white text-center">
        <div className="w-full text-base lg:text-10xl font-bold tracking-wider">
          URLank
        </div>
        <div className="text-6xs lg:text-base font-regular">
          © URLank. ALL RIGHTS RESERVED.
        </div>
      </div>
    </div>
  );
};

export default FrameComponent1;
