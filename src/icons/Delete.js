import * as React from "react";

function SvgDelete(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 17 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12.058 15.33H5.142c-.764 0-1.384-.619-1.384-1.383V4.955H2.375V3.572h2.767V2.88c0-.764.619-1.383 1.383-1.383h4.15c.764 0 1.383.62 1.383 1.383v.692h2.767v1.383h-1.383v8.992c0 .764-.62 1.383-1.384 1.383zM5.142 4.955v8.992h6.916V4.955H5.142zM6.525 2.88v.692h4.15V2.88h-4.15zm4.15 9.684H9.292V6.339h1.383v6.225zm-2.767 0H6.525V6.339h1.383v6.225z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgDelete;
