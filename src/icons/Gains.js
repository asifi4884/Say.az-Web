import * as React from "react";

function SvgGains(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#gains_svg__clip0)" fill="currentColor">
        <path d="M10 3.571a3.571 3.571 0 013.571 3.572.714.714 0 01-1.428 0 2.143 2.143 0 10-4.286 0 .714.714 0 11-1.428 0A3.571 3.571 0 0110 3.57z" />
        <path d="M6.654 15.923a.714.714 0 01.993 0l1.639 1.638V7.857a.714.714 0 111.428 0v9.704l1.638-1.638a.714.714 0 111.01 1.01l-2.857 2.857a.714.714 0 01-1.01.001h-.001l-2.857-2.858a.714.714 0 01.017-1.01z" />
        <path d="M.714 0h18.57c.395 0 .715.32.715.714v12.857c0 .395-.32.714-.714.714h-6.429a.714.714 0 110-1.428h2.207A4.291 4.291 0 0118.57 9.35V4.936a4.291 4.291 0 01-3.507-3.507H4.935a4.291 4.291 0 01-3.507 3.507V9.35a4.291 4.291 0 013.507 3.507h2.207a.714.714 0 010 1.428H.714A.714.714 0 010 13.571V.714C0 .32.32 0 .714 0zm15.815 12.857h2.041v-2.042a2.85 2.85 0 00-2.04 2.042zM18.57 3.47V1.429h-2.04c.26.999 1.041 1.78 2.04 2.04zM1.428 12.857H3.47a2.85 2.85 0 00-2.042-2.042v2.042zm0-9.387c1-.261 1.78-1.042 2.042-2.041H1.428v2.04z" />
      </g>
      <defs>
        <clipPath id="gains_svg__clip0">
          <path
            fill="currentColor"
            transform="matrix(-1 0 0 1 20 0)"
            d="M0 0h20v20H0z"
          />
        </clipPath>
      </defs>
    </svg>
  );
}

export default SvgGains;