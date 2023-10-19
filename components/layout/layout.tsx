import * as React from "react";
// import Meta from "../meta";
import { ScrollArrow } from "~/components/ui";
import { Navigation } from "./navigation";
import Footer from "../ui/footer";
// import Header from "./ui/header";

type LayoutProps = {
  preview?: boolean;
  children: React.ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      {/* <Meta /> */}
      <main className="flex flex-col items-center min-w-7xl  bg-sbcs-light min-h-screen -z-20">
        <Navigation />
        {children}
        {/* <SocialMedia /> */}
        <ScrollArrow />
        <Footer />
      </main>
    </>
  );
};
