import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import dynamic from "next/dynamic";

const Home: NextPage = () => {
  const DynamicMap = dynamic(() => import("../components/atoms/Map"), {
    ssr: false,
  });
  return (
    <main>
      <div>
        <DynamicMap />
      </div>
    </main>
  );
};

export default Home;
