import { Fragment } from "react";
import Head from "next/head";
import MyApp from "./test";

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title> Thilina Dilshan </title>
      </Head>
      <MyApp />
    </Fragment>
  );
}
