/* eslint-disable @next/next/no-img-element */
/* eslint-disable no-undef */
import * as React from "react";
import { NextSeo } from "next-seo";
import Image from "next/image";

import { Vision, Mission, WhatWeDo } from "~/components/ui/icons";
import { Container } from "~/components/layout";
import { Banner } from "~/components/ui";
import Link from "next/link";
// import { AboutUs as AboutUSComp } from "~/components/homepage";

const meta = {
  title: ` About Us | PT.SBCS Indonesia `,
};

const AboutUs: React.FC = () => {
  return (
    // <AboutUSComp />
    <>
      <NextSeo title={meta.title} titleTemplate="%s" description="" />
      <Banner
        source="/assets/images/about/about-banner-image-edited.webp"
        aspect="aspect-w-4 aspect-h-3 md:aspect-w-16 md:aspect-h-4"
        include={
          <>
            <div className="absolute inset-0 w-fit left-8 xl:left-[122px] translate-y-1/2 text-sbcs-light space-y-4 capitalize">
              <h2>About Us</h2>
              <div className="flex items-center space-x-3">
                <Link passHref href="/">
                  <a>home</a>
                </Link>
                <p>/ about us</p>
              </div>
            </div>
          </>
        }
      />

      {/* summary */}
      <Container>
        <div className="grid grid-flow-row md:grid-cols-2 gap-10 mt-0 md:mt-20">
          <div className="min-w-80 min-h-80">
            <img
              className="object-cover"
              src={`/assets/images/about/about-us-image.webp`}
              alt="carrer-1"
            />
          </div>

          <div className="">
            <p className="break-words whitespace-pre-line text-xl text-justify">
              {/* PT. SBCS Indonesia is a member of Sumitomo Mitsui Financial Group
              (SMFG) engaged in business consulting, providing services for new
              and potential Japanese investors. We strive to give the best in
              providing information and advice for Japanese companies who seek
              business opportunity and expansion in Indonesia. Our services
              include consultation (business strategy and industrial study),
              business matching, legal and advisory. */}
              PT. SBCS Indonesia is a member of Sumitomo Mitsui Financial Group
              (SMFG) engaged in business consulting, providing services for
              Japanese and non-Japanese clients. We strive to give the best in
              providing information and advice for companies who seek business
              opportunity and expansion in Indonesia and Japan. Our services
              include consultation (business strategy and industrial study),
              business matching, legal and advisory.
            </p>
          </div>
        </div>
      </Container>

      {/* list card services */}
      <div className=" space-y-10 my-8 md:my-20">
        <div className="mx-8 md:mx-[122px] p-8 bg-[#ffff] shadow-md flex-none md:flex justify-center">
          {/* image */}
          <div className="flex-none md:flex items-center space-x-0 md:space-x-8 w-full max-w-6xl">
            <figure className="sr-only">
              {React.createElement(Vision, {
                height: "80px",
                width: "80px",
              })}
            </figure>

            <div className="relative">
              <h4>Our Vision</h4>
              <p className="break-words whitespace-pre-line ">
                To be a company who excel in providing business consultation for
                Japanese and non-Japanese clients and strengthen the alliance
                between Indonesia and Japan.
              </p>
            </div>
          </div>
        </div>

        <div className="mx-8 md:mx-[122px] p-8 bg-[#ffff] shadow-md flex-none md:flex justify-center">
          {/* image */}
          <div className="flex-none md:flex items-center space-x-0 md:space-x-8 w-full max-w-6xl">
            <figure className="sr-only">
              {React.createElement(Mission, {
                height: "80px",
                width: "80px",
              })}
            </figure>
            <div className="">
              <h4>Our Mission</h4>
              <ul className="list-disc list-outside">
                <li>
                  Delivering accurate and up-to-date information of Indonesia to
                  our clients.
                </li>
                <li>
                  Providing excellent service in business consultation to both
                  existing and potential investors.
                </li>
                <li>
                  Pro-actively support business matching between Japanese and
                  non-Japanese companies.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mx-8 md:mx-[122px] p-8 bg-[#ffff] shadow-md flex-none md:flex justify-center">
          {/* image */}
          <div className="flex-none md:flex items-center space-x-0 md:space-x-8 w-full max-w-6xl">
            <figure className="sr-only">
              {React.createElement(WhatWeDo, {
                height: "80px",
                width: "80px",
              })}
            </figure>
            <div className="">
              <h4>What We Do</h4>
              <p className="break-words whitespace-pre-line">
                We strive to give our best in assisting companies who seek
                business opportunity and expansion in Indonesia and Japan by
                providing solution and advisory.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* our teams */}
      <div className="flex justify-center items-center">
        <h2 className="">
          Our{" "}
          <span className="text-sbcs-green-light font-cairoSans font-bold">
            Team
          </span>{" "}
        </h2>
      </div>
      <div className="flex-none space-y-4 md:space-y-0 md:flex flex-row-reverse gap-10 mx-8 md:mx-[122px] my-8 md:my-[80px]">
        <div className=" w-full h-full flex-1">
          <div className="relative aspect-w-4 aspect-h-3 ">
            <Image
              className="object-cover object-center"
              src={`/assets/images/about/business-development-team-image.webp`}
              alt="out-team"
              layout="fill"
            />
          </div>
        </div>

        <div className="flex-1 space-y-4">
          <h2 className="mb-5 text-sbcs-green-light text-center md:text-left">
            Business Development Team
          </h2>

          <p className="break-words whitespace-pre-line text-justify">
            Indonesia is one of the largest and attractive markets in the world
            with its strategic position in the dynamic Southeast Asia region.
            Despite of that fact, entering Indonesia is relatively challenging.
            We at SBCS Indonesia’s Business Development Department provide
            informative materials as well as market insights covering
            macroeconomics, industries, laws, and regulations in Indonesia to
            assist our valued clients in entering and capturing Indonesia’s
            investment potentials. We can introduce suitable partners in
            business establishment, legal and accounting, and other services to
            fulfil clients’ customized needs. We also help our clients to figure
            out the best solution for their business. To provide the excellent
            services for our clients, we give diverse consultation,
            understanding their needs, make strategies to facilitate their
            business plan in Indonesia. Our team also ready to finding potential
            partners, arranging meetings, and deep analysis in succeeding
            business matching.
          </p>
        </div>
      </div>
      {/* card help */}
      <div className="flex flex-col md:flex-row justify-center md:justify-between items-center mx-8 md:mx-[122px] bg-sbcs-green p-6 md:p-10 mb-[80px] w-full max-w-[1198px]">
        <div className="capitalize text-sbcs-light space-y-5 mb-[38px] md:mb-0 w-full max-w-[449px]">
          <h2>How we can help you</h2>
          <div className="h-1 w-28 bg-sbcs-light" />
          <p>
            We’re here to help and answer any question you might have. We look
            forward to hearing from you.
          </p>
        </div>

        <Link passHref href="/contact">
          <a className="bg-sbcs-light/30 hover:bg-sbcs-green outline outline-sbcs-light min-w-[345px] capitalize py-4 px-10 text-sbcs-light text-center">
            contact us
          </a>
        </Link>
      </div>
      {/* company information*/}

      <div className="w-full h-full flex flex-col">
        <div className="relative w-full h-full flex-initial">
          <div className="aspect-w-1 md:aspect-w-16 aspect-h-1 md:aspect-h-4">
            <Image
              className="object-cover"
              src={`/assets/images/about/company-information-image-edited.webp`}
              layout="fill"
              alt="ecom-1"
            />
          </div>
        </div>

        <div className="flex-col bg-sbcs-green p-10 ml-8 xl:ml-[122px] mr-8 xl:mr-0 h-full xl:h-[554px] w-sm xl:w-[892px] space-y-7 -mt-20 xl:-mt-40 mb-20 z-10">
          {/* text */}
          <div className="flex-initial space-y-8 w-full max-w-[447px]">
            <h2 className="text-sbcs-light">Company Information</h2>
            <div className="h-1 w-28 bg-sbcs-light" />
          </div>

          {/* text-content */}
          <div className="text-xl text-sbcs-light space-y-8">
            <div className="flex-none md:flex">
              <p className="flex-initial w-full max-w-[385px]">Company Name</p>
              <p className="flex-1">PT. SBCS Indonesia</p>
            </div>
            <div className="flex-none md:flex">
              <p className="flex-initial w-full max-w-[385px]">
                President Director
              </p>
              <p className="flex-1">Yoshiharu Morimoto</p>
            </div>
            <div className="flex-none md:flex">
              <p className="flex-initial w-full max-w-[385px]">
                Date of Establishment
              </p>
              <p className="flex-1">November 1, 2012</p>
            </div>
            <div className="flex-none md:flex">
              <p className="flex-initial w-full max-w-[385px]">
                Share Ownership
              </p>
              <p className="flex-1">SBCS Co.Ltd 99%, Others 1%</p>
            </div>
            <div className="flex-none md:flex">
              <p className="flex-initial w-full max-w-[385px]">Address</p>
              <p className="flex-1">
                Menara BTPN - CBD Mega Kuningan, 38th Floor, Jl. Dr. Ide Anak
                Agung Gde Agung Kav. 5.5 - 5.6 Jakarta 12950, Indonesia
              </p>
            </div>
            <div className="flex-none md:flex">
              <p className="flex-initial w-full max-w-[385px]">Phone</p>
              <p className="flex-1">+62-21-21572120</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
