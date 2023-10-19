import * as React from "react";
// import { ArrowNarrowRightIcon } from "@heroicons/react/outline";
// import Link from "next/link";
import Image from "next/image";
import Link from "next/link";

export const AboutUs = () => {
  return (
    <div className="relative mb-40 md:mb-80 flex flex-col-reverse md:flex-row w-full mx-4 md:mx-0">
      {/* box */}
      <div className="absolute z-10 md:z-0 inset-0 -bottom-10 px-8 md:px-0 translate-y-1/2 md:block flex-1 items-end ml-0 lg:ml-[122px] mt-0 lg:mt-[330px]">
        <div className="p-10 bg-sbcs-green w-full max-w-2xl text-sbcs-light space-y-4 ">
          <h2>About Us</h2>
          <hr className="w-28" />
          <p className="text-sbcs-light break-words">
            PT. SBCS Indonesia is a member of Sumitomo Mitsui Financial Group
            (SMFG) engaged in business consulting, providing services for
            Japanese and non-Japanese clients. We strive to give the best in
            providing information and advice for companies who seek business
            opportunity and expansion in Indonesia and Japan. Our services
            include consultation (business strategy and industrial study),
            business matching, legal and advisory.
          </p>
          <div className="flex justify-center md:justify-start item-center">
            <Link passHref href="/about-us">
              <a className="bg-sbcs-light/40 hover:bg-sbcs-green border-solid border-2 border-sbcs-light capitalize py-2 shadow-xl px-4 w-[200px] text-center">
                read more
              </a>
            </Link>
          </div>
        </div>
      </div>
      {/* image */}
      <div className="ml-0 md:ml-[30rem] xl:ml-[44rem] flex-1 z-0 md:z-10 overflow-hidden">
        <div className="w-full xl:w-[684px] h-full">
          <figure className="z-0 aspect-w-3 aspect-h-4 md:aspect-h-3 md:aspect-w-4">
            <Image
              className="object-cover "
              src={`/assets/images/homepage/about-us-home-page-image.webp`}
              layout="fill"
              alt="about-1"
            />
          </figure>
        </div>
      </div>
    </div>
  );
};
