import Header from '../../../components/Header';
import { GetServerSideProps } from 'next';
import Link from 'next/link';
import { Radio } from 'flowbite-react';

const Page = () => {
  return (
    <div>
      <Header />
      <div className="relative mx-auto flex flex-row w-screen min-w-full">
        <div className="w-2/12 min-w-fit h-screen bg-white drop-shadow-md flex flex-col pl-10 pr-16 pt-28 gap-4">
          <Link href="#" className="hover:font-bold focus:font-bold">
            실시간 순위확인
          </Link>
          <Link href="#" className="hover:font-bold focus:font-bold">
            정기리포트
          </Link>
        </div>
        <div className="w-10/12 h-screen bg-[#F5F5F7] flex flex-col items-center px-14">
          <div className="flex flex-row items-baseline gap-4 pt-24 w-full">
            <div className="ml-4 text-2xl font-medium">입력값 설정</div>
            <div className="text-gray-300 text-sm">
              가입 시 신청 이메일로 정기리포트가 발송됩니다.
            </div>
          </div>
          <div className="h-6"></div>
          <div className="flex flex-col w-full">
            <div className="bg-[#F0F0F0] h-10 w-full flex flex-col rounded-t-xl">
              <div className="mx-8 my-auto text-sm">키워드 입력</div>
            </div>
            <div className="bg-white h-20 w-full rounded-b-xl flex flex-row marker:justify-between px-8 gap-16">
              <div className="flex felx-row gap-4 w-full justify-between">
                <div className="flex my-auto">키워드 입력 *</div>
                <div className="flex flex-row w-full gap-4">
                  <input
                    className="flex my-auto w-full h-10 rounded-lg placeholder:text-gray-300 placeholder:text-opacity-50 bg-[#F5F5F7] border-0 outline-0 px-5"
                    placeholder="키워드를 입력해주세요."
                    type="keyword"
                    name="keyword"
                  />
                  <b className="flex my-auto h-10 bg-white box-border border-[1px] border-solid border-black text-sm rounded-lg py-2 px-8">
                    추가
                  </b>
                </div>
              </div>
              <div className="flex felx-row gap-4 w-full justify-between">
                <div className="flex flex-col items-end">
                  <div className="flex my-auto">조회키워드</div>
                  <div className="flex my-auto text-xs text-gray-300">(개)</div>
                </div>
                <input
                  className="flex my-auto w-full h-10 rounded-lg placeholder:text-gray-300 placeholder:text-opacity-50 bg-[#F5F5F7] border-0 outline-0 px-5"
                  placeholder="URL을 입력해주세요."
                  type="URL"
                  name="URL-1"
                />
              </div>
            </div>
          </div>
          <div className="h-8"></div>
          <div className="flex flex-col w-full">
            <div className="bg-[#F0F0F0] h-10 w-full flex flex-col rounded-t-xl">
              <div className="mx-8 my-auto text-sm">URL 입력</div>
            </div>
            <div className="bg-white h-20 w-full rounded-b-xl flex flex-row marker:justify-between px-8 gap-16">
              <div className="flex felx-row gap-4 w-full justify-between">
                <div className="flex my-auto">자사 URL *</div>
                <input
                  className="flex my-auto w-full h-10 rounded-lg placeholder:text-gray-300 placeholder:text-opacity-50 bg-[#F5F5F7] border-0 outline-0 px-5"
                  placeholder="URL을 입력해주세요."
                  type="URL"
                  name="URL-1"
                />
              </div>
              <div className="flex felx-row gap-4 w-full justify-between">
                <div className="flex my-auto">경쟁사 URL *</div>
                <input
                  className="flex my-auto w-full h-10 rounded-lg placeholder:text-gray-300 placeholder:text-opacity-50 bg-[#F5F5F7] border-0 outline-0 px-5"
                  placeholder="URL을 입력해주세요."
                  type="URL"
                  name="URL-1"
                />
              </div>
            </div>
          </div>
          <div className="h-8"></div>
          <div className="flex flex-col w-full">
            <div className="bg-[#F0F0F0] h-10 w-full flex flex-col rounded-t-xl">
              <div className="mx-8 my-auto text-sm">수신주기 *</div>
            </div>
            <div className="bg-white h-20 w-full rounded-b-xl flex justify-between px-36 gap-20">
              <div className="flex flex-row my-auto gap-2">
                <div id="option-1">3일마다</div>
                <input type={'radio'} id="option-1"></input>
              </div>
              <div className="flex flex-row my-auto gap-2">
                <div className="">매주마다</div>
                <input type={'radio'} id="option-2"></input>
              </div>
              <div className="flex flex-row my-auto gap-2">
                <div className="">2주마다</div>
                <input type={'radio'} id="option-3"></input>
              </div>
              <div className="flex flex-row my-auto gap-2">
                <div className="">한 달마다</div>
                <input type={'radio'} id="option-4"></input>
              </div>
            </div>
          </div>
          <div className="h-12"></div>
          <b
            className="bg-black hover:bg-mediumslateblue text-white rounded-md py-2 px-6 font-medium tracking-wider"
            onClick={() => {}}
          >
            정기리포트 신청
          </b>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {},
  };
};

export default Page;
