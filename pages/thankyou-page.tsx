/* eslint-disable no-undef */
import * as React from "react";
import Head from "next/head";
import { NextSeo } from "next-seo";
import { Container } from "~/components/layout";
import Link from "next/link";
// import fetch from "isomorphic-unfetch";

const meta = {
  title: `PT.SBCS Indonesia`,
};

const ThankyouPage: React.FC = () => {
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

      <NextSeo title={meta.title} titleTemplate="%s" description="" />
      <Container className="my-20  mx-8 md:mx-[122px] flex flex-col justify-center items-center space-y-8">
        <h1 className="text-sbcs-green">Thank You </h1>
        <div className="h-1 w-[100px] bg-sbcs-green" />
        <p className="text-xl leading-7 break-words max-w-[588px] text-justify">
          Thank you for contacting PT. SBCS Indonesia. We will reply to your
          message as soon as possible. Check your email regularly.
        </p>

        <Link href="/" passHref>
          <a className="text-sbcs-green underline hover:no-underline capitalize">
            back to home
          </a>
        </Link>
      </Container>
    </>
  );
};

export default ThankyouPage;
