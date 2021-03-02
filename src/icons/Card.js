import * as React from "react";

function SvgCard(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 16 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M14.25.5H1.75C.785.5 0 1.285 0 2.25v7.5c0 .965.785 1.75 1.75 1.75h12.5c.965 0 1.75-.785 1.75-1.75v-7.5C16 1.285 15.215.5 14.25.5zm-12.5 1h12.5a.75.75 0 01.75.75v1H1v-1a.75.75 0 01.75-.75zm12.5 9H1.75A.75.75 0 011 9.75v-5.5h14v5.5a.75.75 0 01-.75.75z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgCard;
