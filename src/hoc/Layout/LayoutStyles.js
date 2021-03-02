import styled from "styled-components";

export const Layout = styled.div``;

export const LayoutBody = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-areas: "header" "main";
  grid-template-rows: 72px 1fr;
  height: 100vh;

  @media only screen and (min-width: 992px) {
    grid-template-columns: 290px 1fr;
    grid-template-areas: "sidenav header" "sidenav main";
    grid-template-rows: 100px 1fr;
  }
`;

export const Main = styled.main`
  grid-area: main;
  padding: 16px 18px;
  /*height: calc(100vh - 72px);*/

  @media only screen and (min-width: 992px) {
    padding: 40px;
    padding-top: 8px;
    height: calc(100vh - 100px);
  }

  @media only screen and (min-width: 1200px) {
    padding: 40px 100px;
    padding-top: 8px;
  }
`;

export const LayoutBackdrop = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  padding: 12px 28px;
  display: none;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 4;

  &.open {
    display: block;
  }
`;

export const LayoutClose = styled.div`
  width: 48px;
  height: 48px;
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 41px rgba(11, 125, 145, 0.09);
  border-radius: 10px;

  display: flex;
  align-items: center;
  justify-content: center;

  margin-left: auto;

  svg {
    color: #ffffff;
    font-size: 14px;
  }
`;
