/* eslint-disable no-undef */
import * as React from "react";
import { NextSeo } from "next-seo";
import Image from "next/image";
import { Banner, Cards, SliderContainer } from "~/components/ui";
import {
  Assisting,
  Strategy,
  Information,
  Introduction,
  Consultation,
  BusinessMatching,
} from "~/components/ui/icons";
import Link from "next/link";

const meta = {
  title: ` Services | PT.SBCS Indonesia`,
};

const servicesData = [
  {
    icons: Assisting,
    title: "Assisting",
    desc: "Assist new clients to establish business in Indonesia.",
  },
  {
    icons: Strategy,
    title: "Strategy",
    desc: "Assist existing clients for new business strategy or expansion plan.",
  },
  {
    icons: Information,
    title: "Information",
    desc: "Provide the latest information regarding Indonesia in politics, economy, industry, and regulation.",
  },
  {
    icons: Introduction,
    title: "Introduction",
    desc: "Introduce clients to investment – related institutions & companies such as investment  boards, law firms, rental office, and other  similar institutions or companies.",
  },
  {
    icons: Consultation,
    title: "Consultation",
    desc: "Provide various consultation & advisory to clients regarding investment climate, business strategy, and expansion plan.",
  },
  {
    icons: BusinessMatching,
    title: "Business Matching",
    desc: "Support clients to find potential partners for distribution,joint operation, etc based on clients’ inquiries.",
  },
];

const Services: React.FC = () => {
  return (
    // <AboutUSComp />
    <>
      <NextSeo title={meta.title} titleTemplate="%s" description="" />

      <Banner
        source="/assets/images/servicepage/request-a-call-back-image-edited.webp"
        aspect="aspect-w-4 aspect-h-3 md:aspect-w-16 md:aspect-h-4"
        include={
          <>
            <div className="absolute inset-0 w-fit left-8 xl:left-[122px] translate-y-1/2 text-sbcs-light space-y-4 capitalize">
              <h2>Services</h2>
              <div className="flex items-center space-x-3">
                <Link passHref href="/">
                  <a>home</a>
                </Link>
                <p>/ services</p>
              </div>
            </div>
          </>
        }
      />

      <div className="flex justify-center items-center capitalize min-w-[358px] mt-0 md:mt-20">
        <h2 className="leading-10">
          Our{" "}
          <span className="text-sbcs-green-light font-cairoSans font-bold">
            Objectives & Services
          </span>
        </h2>
      </div>

      <div className="my-[80px] w-full px-0 md:px-4 lg:px-20 xl:px-[122px] overflow-hidden">
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 gap-0 lg:gap-8 xl:gap-5 ">
          {servicesData &&
            servicesData?.map(({ icons, title, desc }, index) => (
              <Cards
                key={index}
                source={icons}
                title={title}
                description={desc}
                colors="sbcs-dark"
              />
            ))}
        </div>
        <div className="block md:hidden py-8">
          {/* <MultiCarousell dataSource={servicesData} /> */}
          <SliderContainer />
        </div>
      </div>

      <div className="w-full space-y-4 md:space-y-20 mb-10 md:mb-20">
        <div className="flex justify-center">
          <h2>
            Our{" "}
            <span className="text-sbcs-green-light font-cairoSans font-bold">
              Business Structure
            </span>{" "}
          </h2>
        </div>
        <div className="mx-8 md:mx-20 xl:mx-[122px]">
          <figure className="relative aspect-w-4 aspect-h-3">
            <Image
              className="w-full max-w-[1196px]"
              src={`/assets/images/servicepage/business-structure.png`}
              alt="structure"
              layout="fill"
            />
          </figure>
        </div>
      </div>
    </>
  );
};

export default Services;
