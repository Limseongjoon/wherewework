import type { NextPage } from 'next';

const FrameComponent: NextPage = () => {
  return (
    <div className="relative bg-darkslategray-200 w-full h-[1973px] overflow-hidden text-left text-19xl text-white font-pretendard">
      <img
        className="absolute top-[4940.41px] left-[279.58px] w-[1333.47px] h-[251.06px] object-cover hidden"
        alt=""
        src="../image-19@2x.png"
      />
      <div className="absolute top-[1699px] left-[-647px] w-[2127.03px] h-[393.82px] font-gmarket-sans-ttf">
        <div className="absolute top-[0px] left-[0px] bg-mediumslateblue w-[2127.03px] h-[393.82px]" />
        <b className="absolute top-[65px] left-[970.54px]">URLank</b>
        <div className="absolute top-[176px] left-[830.04px] text-8xl font-medium">
          © BASER. ALL RIGHTS RESERVED.
        </div>
      </div>
      <b className="absolute top-[58.32px] left-[62.77px] text-23xl font-gmarket-sans-ttf">
        URLank
      </b>
      <b className="absolute top-[70.94px] left-[444px] text-10xl tracking-[0.05em]">
        CONTACT
      </b>
      <div className="absolute top-[60.38px] left-[615.55px] w-[169.55px] h-[46.24px] text-4xl">
        <div className="absolute top-[0px] left-[0px] rounded-3xxs bg-mediumslateblue w-[169.55px] h-[46.24px]" />
        <b className="absolute top-[11.74px] left-[47.86px] tracking-[0.05em]">
          신청하기
        </b>
      </div>
      <div className="absolute top-[244px] left-[48px] w-[737px] h-[1190px] text-21xl text-dimgray">
        <div className="absolute top-[0px] left-[0px] rounded-2xxl bg-white w-[737px] h-[1190px]" />
        <div className="absolute top-[1050px] left-[51.52px] w-[637.49px] h-[100px] text-16xl text-white">
          <div className="absolute top-[0px] left-[0px] rounded-5xxl bg-mediumslateblue box-border w-[637.49px] h-[100px] border-[2px] border-solid border-black" />
          <b className="absolute top-[32.78px] left-[222.88px] tracking-[0.06em] inline-block w-[192.26px]">
            메일 전송하기
          </b>
        </div>
        <b className="absolute top-[49px] left-[45px] text-28xl tracking-[0.06em] text-black">
          CONTACT
        </b>
        <div className="absolute top-[752px] left-[48px] rounded-xxl bg-ghostwhite w-[641px] h-[258px]" />
        <b className="absolute top-[684px] left-[45px] tracking-[0.06em]">
          문의 및 전달내용
        </b>
        <b className="absolute top-[211px] left-[48px] tracking-[0.06em]">
          이름
        </b>
        <div className="absolute top-[282px] left-[51.58px] w-[636.87px] h-[75.76px] text-3xl text-darkgray-200">
          <input
            className="[border:none] bg-ghostwhite absolute top-[0px] left-[0px] rounded-xxl w-[636.87px] h-[75.76px]"
            type="text"
          />
          <div className="absolute top-[26.7px] left-[43.15px] font-medium inline-block w-[101.97px]">
            Full Name
          </div>
        </div>
        <b className="absolute top-[398px] left-[48px] tracking-[0.06em]">
          메일 주소
        </b>
        <div className="absolute top-[469px] left-[51.58px] w-[636.87px] h-[75.76px] text-3xl text-darkgray-200">
          <div className="absolute top-[0px] left-[0px] rounded-xxl bg-ghostwhite w-[636.87px] h-[75.76px]" />
          <div className="absolute top-[26.7px] left-[43.15px] font-medium inline-block w-[255.51px]">
            Enter your email address
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
