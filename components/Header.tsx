import Link from 'next/link';
import CustomImage from './CustomImage';

const Header = () => {
  const headerItems = [
    {
      title: '요금안내',
      href: '/pricing',
    },
    {
      title: '문의하기',
      href: '/contact',
    },
    {
      title: '로그아웃',
      href: '#',
    },
  ];

  return (
    <div className="relative z-50">
      <div className="bg-white fixed h-12 w-full flex flex-row items-center px-10 drop-shadow-md">
        <Link href="#">
          <CustomImage src="/images/logo-1.png" className="w-20 h-auto pt-1" />
        </Link>
        <div className="grow"></div>
        <div className="flex flex-row items-center text-xs font-medium gap-10">
          {headerItems.map((item) => {
            return (
              <Link href={item.href ? item.href : '#'}>
                <div className="hover:font-semibold focus:font-semibold">
                  {item.title}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Header;
