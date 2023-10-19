import * as React from "react";
import { Popover } from "@headlessui/react";
import { MenuIcon } from "@heroicons/react/outline";
import Link from "next/link";
import { useRouter } from "next/router";
import { NavigationMenu } from "./navigation-menu";
import Image from "next/image";
import cn from "classnames";

export type MenuItemProps = {
  name: string;
  href?: string;
  exact?: boolean;
};

type BtnLinkProps = {
  onClick?: () => void;
  href?: string;
  name: string;
};

export const menuitems: MenuItemProps[] = [
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
];

// function classNames(...classes: string[]) {
//   return classes.filter(Boolean).join(" ");
// }

export const Navigation: React.FC = () => {
  const { push, route } = useRouter();

  const popoverButtonRef = React.useRef<HTMLButtonElement>(null);
  // btn handling
  const BtnLink = React.forwardRef<HTMLAnchorElement, BtnLinkProps>(
    ({ onClick, href, name }, ref) => {
      return (
        <a
          className="underlinex"
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
  return (
    <Popover className="relative z-20 md:absolute min-w-full">
      {({ open }) => (
        <>
          <NavigationMenu open={open} popoverButtonRef={popoverButtonRef} />
          <div
            className={cn(
              route !== "/contact" ? "bg-transparent" : "bg-sbcs-light",
              "relative min-w-7xl mx-auto px-4 sm:px-0 ",
            )}
          >
            <div className="flex py-4 md:pt-0 justify-between items-center md:justify-start md:space-x-10 drop-shadow-lg">
              <div className="hidden md:flex justify-start w-44 md:w-0 lg:flex-1 ml-0 xl:ml-[122px] -mt-8 py-4 md:py-0 md:-mt-0 ">
                <Link href="/">
                  <a>
                    <span className="sr-only">SBCS</span>
                    {route !== "/" &&
                    route !== "/policy" &&
                    route !== "/terms-condition" &&
                    route !== "/contact" &&
                    route !== "/thankyou-page" ? (
                      <Image
                        alt="logo"
                        width={255}
                        height={20}
                        src="/assets/images/logo-white.svg"
                      />
                    ) : (
                      <Image
                        alt="logo"
                        width={255}
                        height={20}
                        src="/assets/images/logo-deafult.svg"
                      />
                    )}
                  </a>
                </Link>
              </div>

              <div className="flex md:hidden justify-start w-44 ">
                <Link href="/">
                  <a>
                    <span className="sr-only">SBCS</span>
                    <Image
                      alt="logo"
                      width={255}
                      height={20}
                      src="/assets/images/logo-deafult.svg"
                    />
                  </a>
                </Link>
              </div>

              {/* mobile */}
              <div className="-mr-2 md:hidden">
                <Popover.Button
                  ref={popoverButtonRef}
                  className="bg-sbcs-light rounded-md p-2 inline-flex items-center justify-center text-sbcs-dark "
                >
                  <span className="sr-only">Open menu</span>
                  <MenuIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>

              {/* desktop */}
              <Popover.Group
                as="nav"
                className={cn(
                  route !== "/contact" ? "bg-sbcs-bright" : "bg-transparant",
                  "hidden cursor-pointer md:flex space-x-10 z-50 px-[74px] py-[34px]",
                )}
              >
                {menuitems.map(({ name, href }: MenuItemProps) => (
                  <BtnLink
                    key={name}
                    onClick={() => push(`${href}`)}
                    name={name}
                  />
                ))}
              </Popover.Group>
            </div>
          </div>
        </>
      )}
    </Popover>
  );
};
