import * as React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

// import { EXAMPLE_PATH } from "../../lib/constants";

const Footer: React.FC = () => {
  const { push } = useRouter();
  type MenuItemProps = {
    name: string;
    href?: string;
    exact?: boolean;
  };

  type BtnLinkProps = {
    onClick?: () => void;
    href?: string;
    name: string;
  };

  const menuitems: MenuItemProps[] = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "About Us",
      href: "/about-us",
      exact: true,
    },
    {
      name: "Services",
      href: "/services",
      exact: true,
    },
    {
      name: "Career",
      href: "/career",
    },
    {
      name: "Contact",
      href: "/contact",
      exact: true,
    },
    {
      name: "Privacy Policy",
      href: "/policy",
      exact: true,
    },
    {
      name: "Terms & Condition",
      href: "/terms-condition",
      exact: true,
    },
  ];

  const BtnLink = React.forwardRef<HTMLAnchorElement, BtnLinkProps>(
    ({ onClick, href, name }, ref) => {
      return (
        <a
          className="text-sbcs-light cursor-pointer"
          rel=" noopener noreferrer"
          target="_blank"
          onClick={onClick}
          href={href}
          ref={ref}
          aria-hidden
        >
          {name}
        </a>
      );
    },
  );

  const dynamicDate = new Date().getFullYear();

  return (
    <footer className="mt-auto px-4 md:px-[122px] py-8 md:py-10 w-full bg-sbcs-dark">
      <div className="flex-none md:flex justify-start md:justify-between">
        <div className="p-4 w-full max-w-md h-fit md:text-center">
          <figure className="relative inline-block ">
            <Image
              src="/assets/images/logo-white.svg"
              alt="SBCS Indonesia"
              width={255}
              height={20}
            />
          </figure>
          <p className="hidden md:block text-sbcs-light text-xs mt-4">
            Copyright &copy; {`${dynamicDate}`}, All Right Reserved
          </p>
        </div>

        <div className="px-4 md:py-0 max-w-md flex flex-col md:flex-row md:flex-wrap gap-4">
          {menuitems?.map(({ name, href }: MenuItemProps) => (
            <BtnLink key={name} onClick={() => push(`${href}`)} name={name} />
          ))}
        </div>
      </div>
      <div className="text-center text-sbcs-light my-4 md:hidden">
        <p className="text-xs">
          Copyright &copy; {`${dynamicDate}`}, All Right Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
