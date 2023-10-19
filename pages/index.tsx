/* eslint-disable no-undef */
import * as React from "react";
import Head from "next/head";
import { NextSeo } from "next-seo";
import { AboutUs, Hero, FormHomepage, Carousel } from "~/components/homepage";
// import fetch from "isomorphic-unfetch";

const meta = {
  title: `PT.SBCS Indonesia`,
};

const index: React.FC = () => {
  // React.useEffect(() => {
  //   const fetchData = async () => {
  //     const req = await fetch(
  //       `${process.env.NEXT_PUBLIC_APIURL}/product/get/list`,
  //     );
  //     const res = await req.json();
  //     console.log(res);
  //   };
  //   fetchData();
  // }, []);
  return (
    <>
      <Head>
        <title>PT. SBCS INDONESIA</title>
      </Head>

      <NextSeo
        title={meta.title}
        titleTemplate="%s"
        description="PT. SBCS Indonesia is a member of Sumitomo Mitsui Financial Group engaged in business consulting, providing services for new and potential Japanese investors."
      />
      <Hero />
      <Carousel />
      <AboutUs />
      <FormHomepage />
    </>
  );
};

export default index;
