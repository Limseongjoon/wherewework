import { GetServerSideProps } from 'next';

const Page = () => {
  return <div></div>;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {},
  };
};

export default Page;
