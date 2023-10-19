/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-unknown-property */
import * as React from "react";
import {
  PhoneIcon,
  MailIcon,
  LocationMarkerIcon,
} from "@heroicons/react/outline";
import Form from "~/components/ui/form";
import { NextSeo } from "next-seo";
// import Forms from "~/components/ui/form";
// import Image from "next/image";

const meta = {
  title: ` Contact | PT. SBCS Indonesia `,
};

const Contact: React.FC = () => {
  return (
    <>
      <NextSeo title={meta.title} titleTemplate="%s" description="" />

      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="h-full">
          <div className="relative pb-[100%] md:pb-[350%] lg:pb-[246%] 2lg:pb-[170%] xl:pb-[193%] mt-0 md:mt-28 overflow-hidden aspect-w-3 aspect-h-4">
            <iframe
              className="h-full overflow-hidden"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15865.028607431821!2d106.8275098!3d-6.2297904!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xeaed5a0b41d59130!2sPT%20SBCS%20Indonesia!5e0!3m2!1sen!2sid!4v1671003069509!5m2!1sen!2sid"
              width="600"
              height="750"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <div className=" bg-sbcs-green text-sbcs-light pt-8  md:pt-[180px] pr-16 lg:pr-28 xl:pr-[122px] pl-11 lg:pl-20 xl:pl-[84px]">
          {/* information */}
          <div className="space-y-8 mb-8">
            <h2 className="capitalize text-sbcs-light">let's talk</h2>
            <div className="h-1 w-28 bg-sbcs-light"></div>

            {/* icons */}
            <div className="flex items-center space-x-5">
              <PhoneIcon className="w-6" />
              <a href="tel:+62-21-21572120">+62-21-21572120</a>
            </div>
            <div className="flex items-center space-x-5">
              <MailIcon className="w-6" />
              <a href="mailto:contactus@sbcs.co.id">contactus@sbcs.co.id</a>
            </div>
            <div className="flex items-center space-x-5">
              <LocationMarkerIcon className="w-14" />
              <p>
                Menara BTPN - CBD Mega Kuningan, 38th Floor, Jl. Dr. Ide Anak
                Agung Gde Agung Kav. 5.5 - 5.6 Jakarta 12950, Indonesia
              </p>
            </div>
          </div>

          {/* form */}
          <div className=" space-y-8">
            <h2 className="capitalize text-sbcs-light">get in touch</h2>
            <div className="h-1 w-28 bg-sbcs-light"></div>
            <div className="relative w-full ">
              <Form />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
