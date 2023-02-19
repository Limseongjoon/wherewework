import { GetServerSideProps } from 'next';

const Page = () => {
  return <div></div>;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.query;

  return {
    props: {
      id,
    },
  };
};

export default Page;
