import * as React from "react";

function SvgPie(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#pie_svg__clip0)" fill="currentColor">
        <path d="M11.702 20c-1.788 0-3.491-.56-4.925-1.619l-.47-.348 4.809-6.52v-8.11h.586C16.277 3.402 20 7.124 20 11.7 20 16.277 16.277 20 11.702 20zm-3.743-2.233a7.066 7.066 0 003.743 1.06 7.135 7.135 0 007.126-7.126c0-3.733-2.884-6.804-6.54-7.103V11.9l-4.33 5.868z" />
        <path d="M3.846 17.526l-.472-.348a8.37 8.37 0 01-2.454-2.88A8.296 8.296 0 012.012 5.08l.382-.443 6.699 5.777-5.247 7.112zM2.535 6.306a7.127 7.127 0 00-1.363 4.191c0 2.057.903 4.024 2.441 5.37l3.892-5.275-4.97-4.287zM9.352 8.195L3.147 2.844 3.53 2.4A6.908 6.908 0 018.766 0h.586v8.195zM4.822 2.74L8.18 5.636V1.202A5.735 5.735 0 004.823 2.74z" />
      </g>
      <defs>
        <clipPath id="pie_svg__clip0">
          <path fill="currentColor" d="M0 0h20v20H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default SvgPie;
