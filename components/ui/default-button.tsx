import { ArrowNarrowRightIcon } from "@heroicons/react/outline";
import * as React from "react";
import cn from "classnames";

interface ButtonProps {
  title: string;
  styled?: string;
}

export function DefaultButton({ title, styled }: ButtonProps) {
  return (
    <div className="flex justify-center my-4">
      <button
        aria-label="btn-blue"
        className={cn("flex items-center gap-3 w-[155px] h-12 pl-5", styled)}
      >
        {" "}
        {title} <ArrowNarrowRightIcon width={24} />{" "}
      </button>
    </div>
  );
}
