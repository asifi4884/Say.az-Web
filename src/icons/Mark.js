import * as React from "react";

function SvgMark(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 3 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M2.363 11.91a.913.913 0 11-1.826-.002.913.913 0 011.826.002zm0-10.997a.913.913 0 00-1.828 0v7.802a.913.913 0 001.828 0V.913z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgMark;
