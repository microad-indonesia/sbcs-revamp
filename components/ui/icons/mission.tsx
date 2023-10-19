import * as React from "react";
import { ComponentProps } from "react";

export function Mission({
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
      {...props}
    >
      <circle
        cx="39.5013"
        cy="40.4987"
        r="8.47921"
        stroke="#242B26"
        strokeWidth="3"
      />
      <circle
        cx="39.5016"
        cy="40.4987"
        r="16.4626"
        stroke="#242B26"
        strokeWidth="3"
      />
      <circle
        cx="39.501"
        cy="40.499"
        r="24.6677"
        stroke="#242B26"
        strokeWidth="3"
      />
      <path
        d="M52.0303 27.9694L52.4739 19.7643L58.6832 13.3333L60.679 19.2099L66.3339 21.5384L60.679 27.415L52.0303 27.9694Z"
        fill="white"
      />
      <path
        d="M39.7227 40.2771L52.0303 27.9694M52.0303 27.9694L52.4739 19.7643L58.6832 13.3333L60.679 19.2099L66.3339 21.5384L60.679 27.415L52.0303 27.9694Z"
        stroke="#0D621E"
        strokeWidth="3"
      />
    </svg>
  );
}
