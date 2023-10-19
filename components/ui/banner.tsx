/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";
import Image from "next/image";

type BannerProps = {
  source: string;
  include?: any;
  aspect?: string | "";
};

export const Banner: React.FC<BannerProps> = ({ source, include, aspect }) => {
  return (
    <div className="w-full h-full flex-none md:flex flex-row-reverse mt-0 md:mt-0 mb-10 md:mb-0 z-0">
      <div className="relative w-full h-full flex-initial">
        <div className={aspect}>
          <Image
            className="object-cover object-center"
            src={`${source}`}
            alt="home-banner"
            layout="fill"
            priority={true}
          />
        </div>

        {include}
      </div>
    </div>
  );
};
