/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-undef */
import * as React from "react";
import { Container } from "~/components/layout";
import { NextSeo } from "next-seo";
// import Image from "next/image";

// import { Char2 } from "~/components/ui/icons";
// import { AboutUs as AboutUSComp } from "~/components/homepage";

const meta = {
  title: ` Terms And Condition | PT.SBCS Indonesia `,
};

const TermsCondition: React.FC = () => {
  return (
    // <AboutUSComp />
    <>
      <NextSeo title={meta.title} titleTemplate="%s" description=" " />

      <Container>
        <div className="my-10 md:my-40 flex flex-col justify-start space-y-8">
          <div className="space-y-4">
            <h1 className="text-sbcs-green">Terms & Condition</h1>
            <p className="whitespace-pre-wrap break-words leading-7 text-sm">
              The following are terms of a legal agreement between you and PT.
              SBCS Indonesia. By accessing or using this web site you
              acknowledge that you have read, understood and agree to be bound
              by these terms and to comply with all applicable laws and
              regulations. If you do not agree to these terms, do not use this
              Site. This Site contain other proprietary notices and copyright
              information, the terms of which must be observed and followed.
              Information on this Site may contain technical inaccuracies or
              typographical errors. Please read this Agreement carefully and be
              aware that PT. SBCS Indonesia may, in its sole discretion and
              without notice, revise these terms at any time by updating this
              posting.
            </p>
          </div>
          <div className="space-y-4">
            <h1 className="text-sbcs-green">
              Copyrights and Use of Site Content
            </h1>
            <p className="whitespace-pre-wrap break-words leading-7 text-sm">
              The copyright in all materials provided on this Site is held by
              PT. SBCS Indonesia or by the original creator of the material. Any
              unauthorized use of the materials contained on this Site may
              violate copyright laws, trademark laws, the laws of privacy and
              publicity and/or communications regulations and statutes. All
              content and functionality on this Site, including text, graphics,
              logos, icons, and images and the selection and arrangement are the
              exclusive property of PT. SBCS Indonesia or its licensors and is
              protected by the Indonesian and international copyright laws. SBCS
              will regularly send news about Indonesia via Email to users who
              are already registered.
            </p>
          </div>
          <div className="space-y-4">
            <h1 className="text-sbcs-green">Registered Personal Information</h1>
            <p className="whitespace-pre-wrap break-words leading-7 text-sm">
              When you provide your personal information to this Website, PT.
              SBCS Indonesia ordinarily uses such information to better
              understand your needs and provide you with better services. Except
              as set forth below, PT. SBCS Indonesia will use your personal
              information only to contact you in regards to the specific purpose
              for which you submitted that information. For example, we may
              contact you in response to your inquiry to provide information
              about our company, our services, or about the information about
              investment in Indonesia. In the future, as we add features to our
              site, you may have the opportunity you access to download the
              news.
            </p>
          </div>
          <div className="space-y-4">
            <h1 className="text-sbcs-green">Access To This Site</h1>
            <p className="whitespace-pre-wrap break-words leading-7 text-sm">
              PT. SBCS Indonesia may alter, suspend or discontinue this Site and
              your access to use this Site at any time for any reason without
              notice or liability to you or any third party. This Site may
              become unavailable due to maintenance or malfunction of computer
              equipment or for other reasons and may result in damages to the
              user's systems or operations.
            </p>
          </div>
          <div className="space-y-4">
            <h1 className="text-sbcs-green">Third-Party Website</h1>
            <p className="whitespace-pre-wrap break-words leading-7 text-sm">
              We may provide links to third-party websites, and some of the
              content appearing to be on this Site is in fact supplied by third
              parties, for example, in instances of framing of third-party
              websites or incorporation through framesets of content supplied by
              third-party servers. PT. SBCS Indonesia has no responsibility for
              these third-party websites, which are governed by the Terms of Use
              and privacy policies, if any, of the applicable third-party
              content providers.
            </p>
          </div>
          <div className="space-y-4">
            <h1 className="text-sbcs-green">Disclaimer</h1>
            <p className="whitespace-pre-wrap break-words leading-7 text-sm">
              The Content in our Web Site is general information purposes only,
              and should not be used as a substitute for consultation with
              professional advisors except PT. SBCS Indonesia.
            </p>
          </div>
          <div className="space-y-4">
            <h1 className="text-sbcs-green">Entire Agreement</h1>
            <p className="whitespace-pre-wrap break-words leading-7 text-sm">
              This Agreement constitutes the entire agreement between you and
              PT. SBCS Indonesia. Any waiver of any provision of this Agreement
              will be effective only if in writing and signed by PT. SBCS
              Indonesia.
            </p>
          </div>
        </div>
      </Container>
    </>
  );
};

export default TermsCondition;
