import { useRouter } from 'next/router';
import { useEffect } from 'react';

const NotFoundPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace('/');
  }, []);
  return <div></div>;
};

export default NotFoundPage;
