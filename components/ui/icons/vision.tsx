import * as React from "react";
import { ComponentProps } from "react";

export function Vision({
  width,
  height,
  fill = "none",
  ...props
}: ComponentProps<"svg">) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 80 80"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle
        cx="39.8862"
        cy="40.4963"
        r="3.49291"
        stroke="#0D621E"
        strokeWidth="3"
      />
      <circle
        cx="39.8855"
        cy="40.4965"
        r="10.3014"
        stroke="#0D621E"
        strokeWidth="3"
      />
      <path
        d="M40.114 57.518C27.6239 57.518 17.056 48.4786 13.3333 43.9589C17.4359 39.2493 28.5356 29.8301 40.114 29.8301C51.6923 29.8301 62.6401 39.2493 66.6667 43.9589C63.0199 48.4786 52.604 57.518 40.114 57.518Z"
        stroke="#242B26"
        strokeWidth="3"
      />
      <path
        d="M48.1693 48.8938L51.914 52.4115M51.914 52.4115C52.8218 51.7307 55.0459 50.7775 56.6799 52.4115C58.314 54.0456 62.1268 57.934 63.8289 59.6739L58.9495 64.5534L51.4601 56.8371C51.0062 55.9671 50.4615 53.864 51.914 52.4115Z"
        stroke="#0D621E"
        strokeWidth="3"
      />
      <path
        d="M14.6962 24.8369L18.4408 30.2837"
        stroke="#0D621E"
        strokeWidth="3"
      />
      <path
        d="M26.5442 19.1292L28.673 25.3868"
        stroke="#0D621E"
        strokeWidth="3"
      />
      <path
        d="M40.0273 16.6667L40.021 23.2766"
        stroke="#0D621E"
        strokeWidth="3"
      />
      <path
        d="M53.3835 19.1631L51.1523 25.385"
        stroke="#0D621E"
        strokeWidth="3"
      />
      <path
        d="M64.8842 24.6099L61.3034 30.1658"
        stroke="#0D621E"
        strokeWidth="3"
      />
    </svg>
  );
}
