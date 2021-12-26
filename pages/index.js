import Head from "next/head";
import Login from "../components/Login";
import { useMoralis } from "react-moralis";
import Headers from "../components/Headers";
import Messages from "../components/Messages";

export default function Home() {
  const { isAuthenticated } = useMoralis();

  if (!isAuthenticated) return <Login />;
  return (
    <div className="h-screen overflow-y-scroll bg-gradient-to-b from-black to bg-fuchsia-900 overflow-hidden">
      <Head>
        <title>METAVERSE</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="max-w-screen-2xl mx-auto">
        <Headers />
        <Messages />
      </div>
    </div>
  );
}
