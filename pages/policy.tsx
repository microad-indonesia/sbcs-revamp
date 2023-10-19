/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-undef */
import * as React from "react";
import { Container } from "~/components/layout";
import { NextSeo } from "next-seo";
// import Image from "next/image";

// import { Char2 } from "~/components/ui/icons";
// import { AboutUs as AboutUSComp } from "~/components/homepage";

const meta = {
  title: ` Privacy and Policy| PT.SBCS Indonesia `,
};

const Policy: React.FC = () => {
  return (
    // <AboutUSComp />
    <>
      <NextSeo title={meta.title} titleTemplate="%s" description=" " />

      <Container>
        <div className="my-10 md:my-40 flex flex-col justify-start space-y-8">
          <div className="space-y-4">
            <h1 className="text-sbcs-green">Privacy Statement:</h1>
            <p className="whitespace-pre-wrap break-words leading-7 text-sm">
              PT SBCS Indonesia considers your privacy a high priority, this
              privacy statement describe on the collection, use, and disclosure
              of the information we gather from you through this web site. By
              using the SBCSI Website, you have given your acceptance of this
              Privacy Policy. If you do not agree to this Privacy Policy, please
              do not submit any personal data, we shall be entitled to assume
              that you have given your consent if you submit any personal data.
              Should you have any questions, please contact us.
            </p>
          </div>
          <div className="space-y-4">
            <h1 className="text-sbcs-green">Use of Cookies:</h1>
            <p className="whitespace-pre-wrap break-words leading-7 text-sm">
              PT SBCS Indonesia obtains information about your visit to SBCSI
              Website through the use of cookies. Cookies are small pieces of
              data which are sent by a web site to your web browser and are
              stored on your computer. This generic information about your visit
              to SBCSI Website is aggregated and used for statistical tracking
              purposes. We use this information to understand general traffic
              patterns on SBCSI Website and to gauge and improve its
              effectiveness.
            </p>
          </div>
          <div className="space-y-4">
            <h1 className="text-sbcs-green">Personal Data Usage:</h1>
            <p className="whitespace-pre-wrap break-words leading-7 text-sm">
              Upon any personal identifiable information submit to SBCSI
              Website, we will use this information in accordance with the
              purpose given to us. We may also combine this data with
              information obtained from technology in an emails and newsletters
              we send to you, such technology notify us whether the message has
              been opened and links contained within have been clicked on. This
              is to measure and improve the interest in our offerings and email
              campaigns, as well as tailor our interactions with you.
            </p>
          </div>
          <div className="space-y-4">
            <h1 className="text-sbcs-green">Transfer of Personal Data:</h1>
            <p className="whitespace-pre-wrap break-words leading-7 text-sm">
              We may share and/or transfer any personal identifiable information
              and aggregated information we collect from SBCSI Website to our
              affiliates and third parties located throughout the world,
              including in countries that do not have laws regulating the use
              and transfer of such information. We may share and/or transfer
              such information in connection with administration of the SBCSI
              Website or to make transmissions or mailings to you or in response
              to any legal process such as a request by law enforcement, a court
              order or subpoena, or to protect the integrity of the Web Site if
              we believe that a user has committed unlawful or otherwise harmful
              acts. By using SBCSI Website you agreed to transfer and hosting of
              your information anywhere in the world.
            </p>
          </div>
          <div className="space-y-4">
            <h1 className="text-sbcs-green">Links to other website:</h1>
            <p className="whitespace-pre-wrap break-words leading-7 text-sm">
              SBCSI Website may contain links to other sites. Please be aware
              that PT SBCS Indonesia is not responsible for the privacy
              practices of these other sites. We encourage our users to be aware
              when they leave the Web Site and to read the privacy statements of
              each and every web site that collects personally identifiable
              information.
            </p>
          </div>
          <div className="space-y-4">
            <h1 className="text-sbcs-green">Underage Privacy:</h1>
            <p className="whitespace-pre-wrap break-words leading-7 text-sm">
              No information should be submitted by any user under 18 years of
              age. PT SBCS Indonesia does not collect any personally identifying
              information about any user under 18 years of age or provide such
              information to any third parties or use such information for
              marketing or promotional purposes.
            </p>
          </div>
          <div className="space-y-4">
            <h1 className="text-sbcs-green">Changed to this Privacy Policy:</h1>
            <p className="whitespace-pre-wrap break-words leading-7 text-sm">
              This Privacy Policy applies solely to information collected by
              this Web Site. We reserve the right to change or otherwise update
              this Privacy Policy at any time. Such changes or updates are
              effective immediately after we give notice of the change or
              update. Your use of the Web Site after such notice is posted means
              that you accept these changes or updates. You agree that SBCS
              shall not be liable to you for any damages that might result from
              any changes to the Privacy Policy.
            </p>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Policy;
