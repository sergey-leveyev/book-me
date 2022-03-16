import HomeComponent from "../components/Home";
import Layout from "../components/layout/Layout";

import { useRouter } from "next/router";
import { getRooms } from "../redux/actions/roomActions";

import { wrapper } from "../redux/store";

let test = 2;

export default function Home() {
  const router = useRouter();
  let { page = 1 } = router.query;
  test = page = Number(page);

  return (
    <Layout>
      <HomeComponent />
    </Layout>
  );
}

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req, res, query }) => {
      await store.dispatch(getRooms(req, query.page));
    }
);
