/* eslint-disable react/no-children-prop */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-undef */
import * as React from "react";
import { NextSeo } from "next-seo";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";
import { Banner } from "~/components/ui";
import Link from "next/link";
import { GetServerSideProps } from "next";
import format from "date-fns/format";
import IndoLocale from "date-fns/locale/id";
import careerStyles from "~/styles/career.module.css";

const meta = {
  title: ` Career | PT.SBCS Indonesia`,
};

const Carrer: React.FC = ({ data }: any) => {
  const DisplayData = data.data;
  // console.log(DisplayData);

  return (
    <>
      <NextSeo title={meta.title} titleTemplate="%s" description="" />

      <Banner
        source="/assets/images/carrer/career-banner-image-edited.webp"
        aspect="aspect-w-4 aspect-h-3 md:aspect-w-16 md:aspect-h-4"
        include={
          <>
            <div className="absolute inset-0 w-fit left-8 xl:left-[122px] translate-y-1/2 text-sbcs-light space-y-4 capitalize">
              <h2>Career</h2>
              <div className="flex items-center space-x-3">
                <Link passHref href="/">
                  <a>home</a>
                </Link>
                <p>/ career</p>
              </div>
            </div>
          </>
        }
      />

      <div className="my-0 md:my-20 w-full space-y-5 md:space-y-10">
        <div className="flex justify-center items-center capitalize">
          <h2 className="">
            Current{" "}
            <span className="text-sbcs-green-light font-cairoSans font-bold">
              Open positions
            </span>
          </h2>
        </div>
        <div className="mx-8 xl:mx-[122px] text-sm md:text-xl">
          <p className="break-words whitespace-pre-line">
            We are looking for bright, young and creative individuals who wish
            to utilize their skills at its full potential. We challenge those
            who want to make a contribution and we offer you an ideal working
            environment and learning experiences, start building your career
            with PT. SBCS Indonesia now.
            <br />
            <br />
            If you are interested to find out more, send your updated resume
            with subject [Name] [Position]
            <br />
            <br /> Apply Here: <span>hr-rec@sbcs.co.id</span>
          </p>
        </div>
      </div>

      <div className="w-full ">
        {DisplayData.length > 0 ? (
          <div className="p-2 mx-6 xl:mx-[122px] mb-8 md:mb-10 space-y-5">
            {DisplayData?.map((val: any, index: number) => {
              const newDate = new Date(val.attributes.updatedAt);
              const date: string = format(newDate, "dd MMMM yyyy", {
                locale: IndoLocale,
              });

              // console.log(val);

              return (
                <div key={index}>
                  <Disclosure>
                    {({ open }) => (
                      /* Use the `open` state to conditionally change the direction of an icon. */
                      <>
                        <Disclosure.Button className="w-full bg-sbcs-green p-6 md:p-9 text-left text-sm font-medium text-sbcs-light focus:outline-none focus-visible:ring focus-visible:ring-sbcs-light focus-visible:ring-opacity-75 ">
                          <div className="flex justify-between items-center gap-4">
                            <p className="w-full max-w-[266px]">
                              {val.attributes.Job_title}
                            </p>
                            <p className="sr-only md:not-sr-only">
                              Code : {val.attributes.Job_code}
                            </p>
                            <p className="sr-only md:not-sr-only">
                              {val.attributes.Job_location}
                            </p>
                            <p className="sr-only md:not-sr-only">{date}</p>

                            <div className="bg-sbcs-light w-10 h-10 md:w-[76px] md:h-[56px] flex items-center justify-center">
                              <ChevronUpIcon
                                className={`${
                                  open ? "rotate-180 transform" : ""
                                } h-5 w-5 text-sbcs-dark`}
                              />
                            </div>
                          </div>
                        </Disclosure.Button>
                        <Disclosure.Panel className="bg-sbcs-light mt-5 px-4">
                          <div className="space-y-4 mb-5 block md:hidden">
                            <div className="flex items-center justify-between flex-wrap text-sbcs-green font-bold">
                              <p className="">
                                Code : {val.attributes.Job_code}
                              </p>
                              <p className="">{val.attributes.Job_location}</p>
                            </div>
                            <div className="block md:hidden font-bold">
                              <p className="text-sbcs-green">{date}</p>
                            </div>
                          </div>

                          <div
                            className={careerStyles["career"]}
                            dangerouslySetInnerHTML={{
                              __html: val.attributes.Description,
                            }}
                          />

                          <div className="my-4 md:my-6">
                            <a
                              href={`mailto:hr-rec@sbcs.co.id?subject=${val.attributes.Job_title}`}
                              className=" bg-sbcs-green/10 hover:bg-sbcs-light border-solid border-2 border-sbcs-green capitalize py-1 md:py-2 px-4 md:px-8 shadow-xl text-sbcs-green text-xs md:text-lg w-full text-center"
                            >
                              Apply Now
                            </a>
                          </div>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="my-8 md:my-0 p-2 mx-6 xl:mx-[122px] mb-8 md:mb-10 text-center ring-2 ring-sbcs-green-light">
            <p>
              Currently, we don’t have any job opening available. Please come
              back another time to see your career opportunities.
            </p>
          </div>
        )}
      </div>
    </>
  );
};

// This gets called on every request
export const getServerSideProps: GetServerSideProps = async ({ res }: any) => {
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59",
  );

  // Fetch data from external API
  const API = process.env.NEXT_PUBLIC_APIURL;
  const resp = await fetch(`${API}/job-offers`);
  const data = await resp.json();

  // Pass data to the page via props
  return { props: { data } };
};

export default Carrer;
