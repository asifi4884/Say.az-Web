import React from "react";
import logo from "./assets/images/logo.png";
import styled from "styled-components";

const LoadingSection = styled.section`
  width: 100vw;
  height: 100vh;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    opacity: 0;
    animation-name: loading;
    animation-duration: 2s;
    animation-iteration-count: infinite;
  }

  @keyframes loading {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export default function Loading() {
  return (
    <LoadingSection>
      <img src={logo} alt="Sayaz Logo" />
    </LoadingSection>
  );
}
