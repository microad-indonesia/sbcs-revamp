/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";
import cn from "classnames";

interface PaginationProps {
  postPerPage?: any;
  totalPost?: any;
  activePage?: number;
  paginate: (number: number) => void | undefined;
}

export function Pagination({
  postPerPage,
  totalPost,
  paginate,
  activePage,
}: PaginationProps) {
  const pageNumber = [];
  const marginPages = Math.ceil(totalPost / postPerPage);
  for (let index = 1; index <= marginPages; index++) {
    pageNumber.push(index);
  }

  return (
    <div className="mx-auto flex flex-wrap justify-center items-center gap-4 z-30">
      {pageNumber.map((number: number) => (
        <div key={`${number}`}>
          <button
            aria-label="btn pagination"
            className={cn(
              activePage == number
                ? "bg-lm-blue ring-lm-light text-lm-light"
                : "",
              "rounded-full ring-2 ring-lm-green hover:ring-lm-light hover:bg-lm-blue active:bg-lm-green active:text-lm-light text-lm-dark hover:text-lm-light px-6 py-4",
            )}
            onClick={() => paginate(number)}
          >
            {number}
          </button>
        </div>
      ))}
    </div>
  );
}
