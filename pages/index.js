import Head from "next/head";
import UpdateComponent from "./components";

export default function Home() {
  return (
    <div>
      <Head>
        <title> Thilina Dilshan </title>
        <link rel="icon" href="/profile.jpg" />

      </Head>
      <UpdateComponent />
    </div>
  );
}
