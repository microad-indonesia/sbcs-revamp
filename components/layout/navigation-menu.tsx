import * as React from "react";
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";
import { menuitems, MenuItemProps } from "./navigation";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";

// type BtnLinkProps = {
//   onClick?: () => void;
//   href?: string;
//   name: string;
// };

interface NavigationMenuPopoverProps {
  open?: boolean;
  close?: (ref?: React.RefObject<HTMLButtonElement>) => void;
  popoverButtonRef?: React.RefObject<HTMLButtonElement>;
}

export const NavigationMenu = ({
  open,
  popoverButtonRef,
}: NavigationMenuPopoverProps) => {
  const router = useRouter();

  React.useEffect(() => {
    const handleRouteChange = () => {
      if (open && popoverButtonRef?.current) {
        popoverButtonRef.current.click();
      }
    };

    router.events.on("routeChangeStart", handleRouteChange);

    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, [router.events, open, popoverButtonRef]);

  // const BtnLink = React.forwardRef<HTMLAnchorElement, BtnLinkProps>(
  //   ({ onClick, href, name }, ref) => {
  //     return (
  //       <a onClick={onClick} href={href} ref={ref}>
  //         {name}
  //       </a>
  //     );
  //   }
  // );
  return (
    <Transition
      as={Fragment}
      enter="duration-200 ease-out"
      enterFrom="opacity-0 scale-95"
      enterTo="opacity-100 scale-100"
      leave="duration-100 ease-in"
      leaveFrom="opacity-100 scale-100"
      leaveTo="opacity-0 scale-95"
    >
      <Popover.Panel
        focus
        className="absolute z-50 top-0 inset-x-0 transition transform origin-top-right md:hidden"
      >
        <div className="shadow-lg ring-1 ring-black ring-opacity-5 bg-sbcs-bright divide-y-2 divide-gray-50 min-h-[90%] border-b-4 border-sbcs-green">
          <div className="pt-5 pb-6 px-5">
            <div className="flex items-center justify-between">
              <div>
                <Link href="/">
                  <a aria-hidden="true">
                    <span className="sr-only">SBCS</span>
                    <div className="w-full max-w-xs outline-none">
                      <figure className="relative">
                        <Image
                          alt="logo"
                          width={255}
                          height={20}
                          src="/assets/images/logo-deafult.svg"
                        />
                      </figure>
                    </div>
                  </a>
                </Link>
              </div>
              <div className="-mr-2">
                <Popover.Button className="bg-sbcs-light rounded-md p-2 inline-flex items-center justify-center text-sbcs-dark hover:text-sbcs-green-light hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-sbcs-dark">
                  <span className="sr-only">Close menu</span>
                  <XIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
            </div>
            <div className="mt-6 text-sbcs-dark ">
              <nav className="flex flex-col justify-center items-center gap-y-8">
                <ul className="my-14 space-y-8 ">
                  {menuitems.map(({ name, href }: MenuItemProps) => {
                    // const isActive = exact
                    // ? href === router.asPath
                    // : router.asPath.startsWith(href);
                    return (
                      <li key={name}>
                        <Link href={`${href}`}>
                          <a
                            aria-label="nav-list"
                            className="-m-3 p-3 flex justify-center text-center "
                          >
                            <span className="ml-3 text-xl font-medium text-sbcs-dark underlinex">
                              {name}
                            </span>
                          </a>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </Popover.Panel>
    </Transition>
  );
};
