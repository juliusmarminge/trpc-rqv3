import { trpc } from "../utils/trpc";
import { env } from "../env/client.mjs";

const Home = () => {
  const { data } = trpc.useQuery(["getDbUrl"]);
  const pusherKey = env.NEXT_PUBLIC_PUSHER_KEY;

  return (
    <>
      <h3>From server</h3>
      <div style={{ padding: 25 }}>Database URL: {data ?? "(loading)"}</div>;
      <h3>From client</h3>
      <div style={{ padding: 25 }}>Pusher Key: {pusherKey}</div>
    </>
  );
};

export default Home;
