import * as React from "react";
import Image from "next/image";
import Link from "next/link";

export const Hero: React.FC = () => {
  return (
    <div className="w-full h-full flex-none md:flex flex-row-reverse mt-0 md:mt-0 mb-20 md:mb-0">
      <div className="relative w-full h-full ml-0 md:ml-[426px] flex-initial">
        <div className="aspect-w-3 aspect-h-4 md:aspect-w-16 md:aspect-h-9">
          <Image
            className="object-cover object-center"
            src={`/assets/images/homepage/home-banner-image.webp`}
            alt="home-banner"
            layout="fill"
            priority={true}
          />
        </div>

        <div className="absolute mx-8 md:mx-0 left-0 bottom-0 md:-left-40 max-w-md p-10 bg-sbcs-green space-y-8">
          <h2 className="text-sbcs-light font-semibold">PT.SBCS Indonesia</h2>
          <div className="w-28 h-1 bg-sbcs-light" />
          <p className="text-sbcs-light text-sm my-4">
            We strive to give the best in providing information and advice for
            companies who seek business opportunity and expansion in Indonesia
            and Japan.
          </p>

          <div className="flex justify-between items-center w-full gap-4">
            <Link passHref href="/about-us">
              <a className=" bg-sbcs-light hover:bg-sbcs-light/70 border-solid border-2 border-sbcs-light capitalize py-1 md:py-2 px-4 md:px-8 shadow-xl text-xs md:text-lg w-full text-center ">
                read more
              </a>
            </Link>

            <Link passHref href="/contact">
              <a className=" bg-sbcs-light/10 hover:bg-sbcs-green border-solid border-2 border-sbcs-light capitalize py-1 md:py-2 px-4 md:px-8 shadow-xl text-sbcs-light text-xs md:text-lg w-full text-center">
                contact us
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
