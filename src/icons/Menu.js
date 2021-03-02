import * as React from "react";

function SvgMenu(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 20 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M20 9.167H0V7.084h20v2.083zm0-6.25H0V.834h20v2.083z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgMenu;
