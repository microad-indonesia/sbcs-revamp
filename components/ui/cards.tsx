// import Link from "next/link";
import * as React from "react";
// import Image from "next/image";

type CardsProps = {
  title: string;
  description?: string;
  source: React.ComponentType<React.ComponentProps<"svg">>;
  tags?: string[];
  date?: Date | string;
  slug?: string;
  id?: number;
  colors?: string | "sbcs-green";
};

export const Cards = ({
  title,
  description,
  source,
  colors,
}: // tags,
// date,
// slug,
// id,
CardsProps) => {
  return (
    <div className="relative md:w-full w-auto h-[280px] md:h-[500px] lg:h-[412px] xl:h-[320px] shadow-md p-8">
      <div className="object-cover mb-5">
        <figure className="sr-only relative">
          {/* <Image src={`${}`} alt={title} layout="fill" /> */}
          {React.createElement(source, {
            height: "80px",
            width: "80px",
          })}
        </figure>
      </div>
      <div className="">
        {/* <div className="flex text-xs items-center space-x-6 h-full max-h-4">
          <span>{`${date}`}</span>
          <span>{tags}</span>
        </div> */}
        <div className="space-y-4">
          <div className="sr-only h-1 w-20 bg-sbcs-green" />
          <h2 className={`card-title text-${colors} font-bold text-2xl`}>
            {title}
          </h2>
          <p className="break-word whitespace-pre-line ">{description}</p>
        </div>
      </div>
    </div>
  );
};
