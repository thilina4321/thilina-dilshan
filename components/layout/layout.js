import Desktop from "./desktop";
import MainHeader from "./main-header";
import Head from "next/head";

const Layout = (props) => {
  return (
    <div>
    <Head>
      <title> Thilina Dilshan </title>
    </Head>
      <MainHeader />
      <Desktop />
      {props.children}
    </div>
  );
};

export default Layout;
