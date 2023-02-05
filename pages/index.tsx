import type { NextPage } from 'next';
import Link from 'next/link';
import { useRef } from 'react';
import { useRecoilState } from 'recoil';
import { emailState } from '../atoms/atoms';

const FrameComponent3: NextPage = () => {
  const [email, setEmail] = useRecoilState(emailState);

  const topRef = useRef<HTMLInputElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const executeScroll = () => {
    topRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    inputRef.current?.focus({ preventScroll: true });
  };

  return (
    <div className="flex flex-col items-center w-screen max-h-fit bg-white text-29xl font-pretendard whitespace-nowrap">
      <div className="flex flex-col items-center fixed z-10 w-full bg-white">
        <div className="flex flex-row items-center w-10/12 h-16 lg:h-24 text-9xl">
          <Link href="#">
            <img
              className="flex-none w-[80px] lg:w-[140px]"
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
      <div className="h-28 lg:h-52"></div>
      <div className="w-10/12 lg:w-8/12 flex flex-col lg:flex-row items-center justify-center gap-24">
        <div className="w-fit lx:pl-6">
          <div className="text-16xl lg:text-20xl font-extrabold">
            내 사이트 검색순위 확인
          </div>
          <div className="h-4"></div>
          <div className="text-4xs lg:text-sm leading-[160%] font-medium">
            <p className="">
              ✔ 내 사이트가 키워드별 검색결과 몇 번째에 뜨는지 확인하세요.
            </p>
            <p className="[">✔ 경쟁사의 검색 순위도 함께 확인하세요.</p>
            <p className="">✔ 매주 뉴스레터를 보내드립니다.</p>
          </div>
          <div className="h-10"></div>
          <span className="mb-1 pl-5 block text-5xs font-light italic text-gray-700">
            Your email-address:
          </span>
          <div className="lg:w-[400px] flex flex-row justify-between items-center rounded-full box-border border-[1px] border-solid border-black text-black px-[3px] py-[3px]">
            <input
              className="w-[200px] placeholder:italic placeholder:text-gray-200 opacity-40 bg-white border-0 outline-0 font-medium text-4xs px-5"
              placeholder="email@example.com"
              type="email"
              name="email"
              ref={inputRef}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <b className="bg-mediumslateblue hover:bg-black hover:text-white rounded-full py-2 px-6 text-sm text-white font-bold lg:tracking-[0.02em] select-none cursor-pointer">
              런칭알림 신청하기
            </b>
          </div>
          <div className="h-4"></div>
          <div className="pl-3 text-gray-600 text-6xs leading-[150%]">
            <p className="">
              · 기입하신 이메일 주소로 프로덕트 런칭 알림을 보내드립니다.
              <br></br>· 서비스는 런칭 후 1달간 무료로 제공됩니다.
            </p>
          </div>
        </div>
        <div className="max-w-[700px] min-w-[600px] pb-12">
          <img className="w-full" alt="" src="/images/index.png" />
        </div>
      </div>
      <div className="h-36 lg:h-72"></div>
      <div className="w-full text-center">
        <div className="">
          <span className="text-16xl lg:text-22xl text-mediumslateblue font-extrabold lg:tracking-wide">
            검색결과 첫 페이지
          </span>
          <span className="text-16xl lg:text-22xl text-black font-extrabold lg:tracking-wide">
            에<br className="lg:hidden"></br> 내 사이트가 잘 뜨고 있나요?
          </span>
        </div>
      </div>
      <div className="h-16"></div>
      <div className="w-full text-center">
        <div className="font-light text-6xl lg:text-18xl tracking-tight lg:tracking-normal">
          검색결과 첫 페이지를 지나면 91% 유저가 이탈합니다.
        </div>
      </div>
      <div className="h-4 lg:h-6"></div>
      <img className="w-10/12 lg:w-[980px]" alt="" src="/images/google-1.png" />
      <div className="h-44 lg:h-80"></div>
      <div className="text-center">
        <span className="text-16xl lg:text-22xl text-mediumslateblue font-extrabold lg:tracking-wide">
          수십-수백개
        </span>
        <span className="text-16xl lg:text-22xl text-black font-extrabold lg:tracking-wide">
          의 상품/콘텐츠의&nbsp;<br className="lg:hidden"></br>
        </span>
        <span className="text-16xl lg:text-22xl text-mediumslateblue font-extrabold lg:tracking-wide">
          순위
        </span>
        <span className="text-16xl lg:text-22xl text-black font-extrabold lg:tracking-wide">
          를 어떻게&nbsp;
        </span>
        <span className="text-16xl lg:text-22xl text-mediumslateblue font-extrabold lg:tracking-wide">
          트래킹
        </span>
        <span className="text-16xl lg:text-22xl text-black font-extrabold lg:tracking-wide">
          할까요?
        </span>
        <div className="h-16"></div>
        <div className="w-full text-center">
          <div className="font-light text-6xl lg:text-18xl tracking-tight lg:tracking-normal">
            일일이 구글에 검색해봐야할까요?
          </div>
        </div>
      </div>
      <div className="h-4 lg:h-6"></div>
      <img className="w-10/12 lg:w-[980px]" alt="" src="/images/google-2.png" />
      <div className="h-36 lg:h-48"></div>
      <div className="flex flex-col items-center justify-center gap-6 lg:gap-10 w-full h-44 lg:h-80 text-center bg-mediumslateblue">
        <div className="text-white text-4xl lg:text-18xl leading-[150%]">
          <span className="font-light">클릭 한 번에&nbsp;</span>
          <span className="font-extrabold tracking-wide">키워드</span>
          <span className="font-light">별&nbsp;</span>
          <span className="font-extrabold tracking-wide">
            사이트 검색순위&nbsp;
          </span>
          <span className="font-light">확인</span>
          <br></br>
          <span className="font-light">매주 챙겨받는&nbsp;</span>
          <span className="font-extrabold tracking-wide">뉴스레터</span>
          <span className="font-light">까지</span>
        </div>
        <b className="bg-white hover:bg-black hover:text-white box-border border-[2px] border-solid border-black rounded-full py-2 lg:py-3 px-8 lg:px-12 text-base lg:text-2xl font-bold lg:tracking-[0.05em]">
          런칭알림 신청하기
        </b>
      </div>
      <div className="h-36 lg:h-48"></div>
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-28">
        <div className="hidden lg:flex w-[520px] mb-4">
          <img className="w-full" alt="" src="/images/feature-1.png" />
        </div>
        <div className="w-fit flex flex-row items-center gap-8 lg:gap-10">
          <div className="text-24xl lg:text-28xl lg:font-medium font-gmarket-sans-ttf text-mediumslateblue text-right pb-6">
            1
          </div>
          <div>
            <div className="text-16xl lg:text-20xl font-bold leading-[140%] whitespace-nowrap">
              키워드 및 URL 입력
            </div>
            <div className="h-2 lg:h-4"></div>
            <div className="text-xl lg:text-8xl font-regular leading-[140%] whitespace-nowrap">
              검색순위가 궁금한 키워드들과 자사 URL<br></br>또는 타사 URL을
              입력창에 입력합니다.
            </div>
          </div>
        </div>
        <div className="flex lg:hidden w-10/12">
          <img className="w-full" alt="" src="/images/feature-1.png" />
        </div>
      </div>
      <div className="h-48 lg:h-60"></div>
      <div className="flex flex-col items-center justify-between gap-12">
        <div className="w-fit flex flex-row items-center gap-8 lg:gap-10 float-left">
          <div className="text-24xl lg:text-28xl lg:font-medium font-gmarket-sans-ttf text-mediumslateblue text-right pb-6">
            2
          </div>
          <div>
            <div className="text-16xl lg:text-20xl font-bold leading-[140%]">
              키워드별 검색순위 대시보드
            </div>
            <div className="h-2 lg:h-4"></div>
            <div className="text-xl lg:text-8xl font-regular leading-[140%]">
              조회한 키워드별 월간검색량과 검색순위를 확인합니다. <br></br>
              경쟁사의 검색순위까지 한눈에 비교할 수 있습니다.
            </div>
          </div>
        </div>
        <div className="w-[1000px] mb-4">
          <img className="w-full" alt="" src="/images/feature-2.png" />
        </div>
      </div>
      <div className="h-48 lg:h-60"></div>
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-28">
        <div className="w-fit flex flex-row items-center gap-8 lg:gap-10">
          <div className="text-24xl lg:text-28xl lg:font-medium font-gmarket-sans-ttf text-mediumslateblue text-right pb-6">
            3
          </div>
          <div>
            <div className="text-16xl lg:text-20xl font-bold leading-[140%] whitespace-nowrap">
              트래킹 보고서 메일 발송
            </div>
            <div className="h-2 lg:h-4"></div>
            <div className="text-xl lg:text-8xl font-regular leading-[140%] whitespace-nowrap">
              매주 트래킹 정보가 담긴 뉴스레터를<br></br>메일로 발송해드립니다.
            </div>
          </div>
        </div>
        <div className="w-10/12 lg:w-[450px] mb-4">
          <img className="w-full" alt="" src="/images/feature-3.png" />
        </div>
      </div>
      <div className="h-48 lg:h-60"></div>
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