import type { NextPage } from 'next';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { useRecoilState } from 'recoil';
import { emailState } from '../atoms/atoms';
import { supabase } from '../lib/client';

const FrameComponent3: NextPage = () => {
  const [email, setEmail] = useRecoilState(emailState);

  const topRef = useRef<HTMLInputElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const executeScroll = () => {
    topRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    inputRef.current?.focus({ preventScroll: true });
  };

  return (
    <div className="flex flex-col items-center w-screen max-h-fit bg-white text-29xl font-pretendard">
      <div className="flex flex-col items-center fixed z-10 w-full bg-white">
        <div className="flex flex-row items-center w-10/12 h-16 lg:h-24 text-9xl">
          <Link href="/">
            <img
              className="flex-none w-[90px] lg:w-[140px]"
              alt=""
              src="/images/logo-1.png"
            />
          </Link>
          <div className="grow"></div>
          <div className="flex-none flex flex-row items-center justify-between gap-4 lg:gap-16">
            <Link
              href="/contact"
              className="text-7xs lg:text-xs font-semibold lg:tracking-[0.02em]"
            >
              CONTACT
            </Link>
            <div
              className="bg-mediumslateblue hover:bg-black rounded-full py-1.5 lg:py-2 px-4 lg:px-8 text-7xs lg:text-xs text-white font-extrabold lg:tracking-[0.05em]"
              onClick={() => {
                executeScroll();
              }}
            >
              신청하기
            </div>
          </div>
        </div>
      </div>
      <div ref={topRef}></div>
      <div className="h-16 lg:h-24"></div>
      <div className="mt-8 lg:mt-16 px-8 lg:px-16 flex flex-col lg:flex-row lg:items-center justify-center gap-12 lg:gap-16">
        <div className="lg:pl-6 md:min-w-fit">
          <div className="text-10xl lg:text-18xl font-extrabold">
            내 사이트 검색순위 확인
          </div>
          <div className="h-2"></div>
          <div className="text-5xs lg:text-sm font-medium">
            <p className="my-2">
              ✔ 내 사이트가 키워드별 검색결과 몇 번째에 뜨는지 확인하세요.
            </p>
            <p className="my-2">✔ 경쟁사의 검색 순위도 함께 확인하세요.</p>
            <p className="my-2">✔ 매주 뉴스레터를 보내드립니다.</p>
          </div>
          <div className="h-6"></div>
          <span className="mb-1 pl-5 block text-5xs font-light italic text-gray-700">
            이메일 주소:
          </span>
          <div className="w-fit flex flex-row items-center rounded-full box-border border-[1px] border-solid border-black text-black px-[3px] py-[3px]">
            <input
              className="w-full placeholder:italic placeholder:text-gray-200 placeholder:text-opacity-40 text-mediumslateblue bg-white border-0 outline-0 placeholder:font-medium font-semibold text-4xs px-5"
              placeholder="email@example.com"
              type="email"
              name="email"
              ref={inputRef}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <b
              className="min-w-fit lg:min-w-fit sm:flex sm:gap-1 bg-mediumslateblue hover:bg-black hover:text-white rounded-full py-2 px-6 text-6xs lg:text-base text-white font-bold lg:tracking-[0.02em] select-none cursor-pointer"
              onClick={async (e) => {
                e.preventDefault();
                if (
                  email &&
                  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                ) {
                  // 이미 신청한 이메일이면 안내
                  const { data, error } = await supabase()
                    .from('emails')
                    .select()
                    .eq('email', email)
                    .single();

                  if (data) {
                    await supabase()
                      .from('emails')
                      .update({
                        count: data.count ? data.count + 1 : 1,
                      })
                      .eq('email', email);
                    alert('이미 신청하셨습니다.');
                  } else {
                    await supabase().from('emails').insert({
                      email: email,
                      count: 1,
                    });
                    alert('신청이 완료되었습니다.');
                  }
                  setEmail('');
                } else {
                  alert('올바른 이메일 주소를 입력해주세요.');
                }
              }}
            >
              <div>런칭알림</div>
              <div>신청하기</div>
            </b>
          </div>
          <div className="mt-2 pl-3 text-gray-600 text-6xs leading-[150%]">
            · 기입하신 이메일 주소로 프로덕트 런칭 알림을 보내드립니다.
            <br />· 서비스는 런칭 후 1달간 무료로 제공됩니다.
          </div>
        </div>
        <div className="pb-12">
          <img className="w-full" alt="" src="/images/index.png" />
        </div>
      </div>
      <div className="h-36 lg:h-72"></div>
      <div className="w-full text-center">
        <div className="">
          <p className="text-6xl lg:text-20xl leading-[150%] text-black font-extrabold lg:tracking-wide">
            검색결과 첫 페이지에<br className="lg:hidden"></br> 내 사이트가 잘
            뜨고 있나요?
          </p>
        </div>
      </div>
      <div className="h-4"></div>
      <div className="w-full text-center">
        <div className="font-light text-base lg:text-16xl tracking-tight lg:tracking-normal">
          검색결과 첫 페이지 이후 91% 유저가 이탈합니다.
        </div>
      </div>
      <div className="h-4 lg:h-6"></div>
      <img className="w-10/12 lg:w-[980px]" alt="" src="/images/google-1.png" />
      <div className="h-44 lg:h-80"></div>
      <div className="w-fit text-center">
        <div className="w-full text-center">
          <div className="">
            <p className="text-6xl lg:text-20xl leading-[150%] text-black font-extrabold lg:tracking-wide">
              수십-백개의 상품/콘텐츠의 순위를&nbsp;
              <br className="lg:hidden"></br>
              어떻게 트래킹할까요?
            </p>
          </div>
        </div>
        <div className="h-4"></div>
        <div className="w-full text-center">
          <div className="font-light text-base lg:text-16xl tracking-tight lg:tracking-normal">
            일일이 구글에 검색해봐야할까요?
          </div>
        </div>
      </div>
      <div className="h-4 lg:h-6"></div>
      <img className="w-10/12 lg:w-[980px]" alt="" src="/images/google-2.png" />
      <div className="h-36 lg:h-48"></div>
      <div className="flex flex-col items-center justify-center gap-4 lg:gap-10 w-full h-44 lg:h-80 text-center bg-mediumslateblue">
        <div className="text-white text-4xs lg:text-18xl leading-[150%]">
          <span className="font-medium">
            클릭 한 번에 키워드별 사이트 검색순위 확인
            <br></br>매주 챙겨받는 뉴스레터까지
          </span>
        </div>
        <b
          className="bg-white hover:bg-black hover:text-white box-border border-[2px] border-solid border-black rounded-full py-2 lg:py-3 px-8 lg:px-12 text-4xs lg:text-2xl font-bold lg:tracking-[0.05em]"
          onClick={() => {
            executeScroll();
          }}
        >
          런칭알림 신청하기
        </b>
      </div>
      <div className="h-36 lg:h-48"></div>
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-28">
        <div className="hidden lg:flex w-[520px] mb-4">
          <img className="w-full" alt="" src="/images/feature-1.png" />
        </div>
        <div className="w-fit flex flex-row items-center gap-8 lg:gap-10">
          <div className="text-18xl lg:text-28xl lg:font-medium font-gmarket-sans-ttf text-mediumslateblue text-right pb-6">
            1
          </div>
          <div>
            <div className="text-6xl lg:text-20xl font-bold leading-[140%]">
              키워드 및 URL 입력
            </div>
            <div className="h-2 lg:h-4"></div>
            <div className="text-2xs lg:text-8xl font-regular leading-[140%]">
              검색순위가 궁금한 키워드들과 자사 URL<br></br>또는 타사 URL을
              입력창에 입력합니다.
            </div>
          </div>
        </div>
        <div className="flex lg:hidden w-10/12">
          <img className="w-full" alt="" src="/images/feature-1.png" />
        </div>
      </div>
      <div className="h-36 lg:h-60"></div>
      <div className="flex flex-col justify-between gap-12">
        <div className="w-fit flex flex-row items-center self-center gap-8 lg:gap-10">
          <div className="text-18xl lg:text-28xl lg:font-medium font-gmarket-sans-ttf text-mediumslateblue text-right pb-6">
            2
          </div>
          <div>
            <div className="text-6xl lg:text-20xl font-bold leading-[140%]">
              키워드별 검색순위 대시보드
            </div>
            <div className="h-2 lg:h-4"></div>
            <div className="text-2xs lg:text-8xl font-regular leading-[140%]">
              키워드별 월간검색량과 검색순위를 확인합니다.
              <br></br>
              경쟁사 검색순위까지 한눈에 비교 가능합니다.
            </div>
          </div>
        </div>
        <div className="self-center md:w-fit lg:w-8/12 mb-4">
          <img className="w-full" alt="" src="/images/feature-2.png" />
        </div>
      </div>
      <div className="h-36 lg:h-60"></div>
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-28">
        <div className="w-fit flex flex-row items-center gap-8 lg:gap-10">
          <div className="text-24xl lg:text-28xl lg:font-medium font-gmarket-sans-ttf text-mediumslateblue text-right pb-6">
            3
          </div>
          <div>
            <div className="text-6xl lg:text-20xl font-bold leading-[140%]">
              트래킹 보고서 메일 발송
            </div>
            <div className="h-2 lg:h-4"></div>
            <div className="text-2xs lg:text-8xl font-regular leading-[140%]">
              매주 트래킹 정보가 담긴 뉴스레터를<br></br>메일로 발송해드립니다.
            </div>
          </div>
        </div>
        <div className="w-10/12 lg:w-[450px] mb-4">
          <img className="w-full" alt="" src="/images/feature-3.png" />
        </div>
      </div>
      <div className="h-36 lg:h-60"></div>
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

export default FrameComponent3;
