import type { GetServerSidePropsContext, NextPage } from "next";

const access_users = [];

// function Home({ currentDateTime }: { currentDateTime: number }) {
//   return <>{currentDateTime}</>;
// }

function Home() {
  return <>1</>;
}

// export const getServerSideProps = (ctx: GetServerSidePropsContext) => {
//   const currentDateTime = new Date().getTime();
//   access_users.push({
//     user: `user-${Math.round(Math.random() * 1)}`,
//     currentDateTime,
//   });
//   return { props: { currentDateTime } };
// };

export default Home;
