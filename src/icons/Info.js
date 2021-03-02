import * as React from "react";

function SvgInfo(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g fill="currentColor">
        <path d="M10 0C4.473 0 0 4.473 0 10s4.473 10 10 10 10-4.473 10-10S15.527 0 10 0zm0 18.438A8.433 8.433 0 011.562 10 8.433 8.433 0 0110 1.562 8.433 8.433 0 0118.438 10 8.433 8.433 0 0110 18.438z" />
        <path d="M10 8.372a.781.781 0 00-.781.781v5.031a.781.781 0 101.562 0v-5.03A.781.781 0 0010 8.371zM10 7.416a1.055 1.055 0 100-2.11 1.055 1.055 0 000 2.11z" />
      </g>
    </svg>
  );
}

export default SvgInfo;
