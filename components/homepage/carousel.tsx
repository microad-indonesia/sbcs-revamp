/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
// import Image from "next/image";
import { SliderContainer } from "~/components/ui";
// import {
//   Assisting,
//   Strategy,
//   Information,
//   Introduction,
//   Consultation,
//   BusinessMatching,
// } from "~/components/ui/icons";

// Komponen Carousel
export const Carousel: React.FC = () => {
  // Daftar gambar yang akan ditampilkan
  // const images = [
  //   {
  //     icons: Assisting,
  //     title: "Assisting",
  //     desc: "Assist new clients to establish business in Indonesia.",
  //   },
  //   {
  //     icons: Strategy,
  //     title: "Strategy",
  //     desc: "Assist existing clients for new business strategy or expansion plan.",
  //   },
  //   {
  //     icons: Information,
  //     title: "Information",
  //     desc: "Provide the latest information regarding Indonesia in politics, economy, industry, and regulation.",
  //   },
  //   {
  //     icons: Introduction,
  //     title: "Introduction",
  //     desc: "Introduce clients to investment – related institutions & companies such as investment  boards, law firms, rental office, and other  similar institutions or companies.",
  //   },
  //   {
  //     icons: Consultation,
  //     title: "Consultation",
  //     desc: "Provide various consultation & advisory to clients regarding investment climate, business strategy, and expansion plan.",
  //   },
  //   {
  //     icons: BusinessMatching,
  //     title: "Business Matching",
  //     desc: "Support clients to find potential local partners for distribution, joint operation, etc based on clients’ inquiries.",
  //   },
  // ];

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 items-center mt-0 xl:mt-[133px] mb-10 xl:mb-20 ">
      <div className="col space-y-11 pl-0 md:pl-[122px]">
        <h2 className="break-words whitespace-pre-wrap text-center md:text-left mb-[45px] mx-8 md:mx-0">
          We're here to{" "}
          <span className="text-sbcs-green-light font-cairoSans font-bold">
            elevate
          </span>{" "}
          your business
        </h2>

        <Link passHref href="/services">
          <a className="mx-8 md:mx-0 bg-sbcs-green/20 hover:bg-sbcs-light border-solid border-2 border-sbcs-dark capitalize py-2 px-10 shadow-xl flex items-center justify-center max-w-[368px]">
            see all services
          </a>
        </Link>
      </div>
      <SliderContainer />
      {/* <MultiCarousell dataSource={images} /> */}
    </div>
  );
};
