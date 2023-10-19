/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
// import Link from "next/link";

import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/outline";
import { Cards } from "./cards";

export const MultiCarousell = ({ dataSource }: any) => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [, setSlideLeft] = React.useState<number>(0);
  const arrowRef = React.useRef<HTMLButtonElement | any>(null);

  const nextSlide = () => {
    const el: any = document.getElementById(`scrollHor`);
    setSlideLeft((el.scrollLeft += 386));
    setCurrentIndex((prevState) =>
      prevState >= dataSource.length ? dataSource.length : prevState + 1,
    );
    // console.log(el);
  };

  // Fungsi untuk mengubah slide ke belakang
  const prevSlide = () => {
    const el: any = document.getElementById(`scrollHor`);
    setSlideLeft((el.scrollLeft -= 386));
    setCurrentIndex((prevState) => (prevState <= 1 ? 1 : prevState - 1));
  };

  return (
    <div className="mx-8 md:mx-0 col md:col-span-0 lg:col-span-2 overflow-hidden">
      <div className=" mx-8 md:mx-16 my-8 flex items-center justify-between">
        <div className="flex items-center gap-x-4">
          <span>{currentIndex}</span>
          <hr className="h-1 bg-sbcs-dark w-8" />
          <span>{dataSource?.length}</span>
        </div>
        <div className="flex gap-4">
          <button
            className="p-4 md:p-[17px] ring-2 ring-sbcs-dark hover:bg-sbcs-dark hover:text-sbcs-light"
            onClick={prevSlide}
          >
            <ArrowLeftIcon height={24} width={24} />
          </button>
          <button
            className="p-4 md:p-[17px] ring-2 ring-sbcs-dark hover:bg-sbcs-dark hover:text-sbcs-light"
            onClick={nextSlide}
            ref={arrowRef}
          >
            <ArrowRightIcon height={24} width={24} />
          </button>
        </div>
      </div>
      <div id="scrollHor" className="flex overflow-scroll gap-5">
        {dataSource?.map((val: any, index: number) => (
          <div key={`${index}`} className="flex-initial py-4">
            <Cards
              source={val?.icons}
              title={val?.title}
              description={val.desc}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
