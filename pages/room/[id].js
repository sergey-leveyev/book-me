import RoomDetails from "../../components/room/RoomDetails";

import Layout from "../../components/layout/Layout";

import { getRoomsDetails } from "../../redux/actions/roomActions";

import { wrapper } from "../../redux/store";

export default function RoomDetailsPage() {
  return (
    <Layout>
      <RoomDetails />
    </Layout>
  );
}

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req, params }) => {
      await store.dispatch(getRoomsDetails(req, params.id));
    }
);
