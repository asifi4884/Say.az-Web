import React, { useState, useEffect } from "react";
import {
  Layout,
  LayoutBody,
  Main,
  LayoutBackdrop,
  LayoutClose,
} from "./LayoutStyles";
import AsideComponent from "../../components/Aside/Aside";
import HeaderComponent from "../../components/Header/Header";

import { Close } from "../../icons";
import { useLocation } from "react-router-dom";

function LayoutComponent(props) {
  const [openSide, setOpenSide] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const width = window.innerWidth;
    if (width <= 992) {
      setOpenSide(false);
    }
  }, [pathname]);

  useEffect(() => {
    if (openSide) {
      document.documentElement.style.overflow = "hidden";
    } else {
      document.documentElement.removeAttribute("style");
    }
  }, [openSide]);

  return (
    <Layout>
      <LayoutBody>
        <HeaderComponent setOpenSide={setOpenSide} openSide={openSide} />
        <AsideComponent openSide={openSide} />
        <Main>{props.children}</Main>
      </LayoutBody>
      <LayoutBackdrop className={openSide ? "open" : ""}>
        <LayoutClose onClick={() => setOpenSide(false)}>
          <Close />
        </LayoutClose>
      </LayoutBackdrop>
    </Layout>
  );
}

export default LayoutComponent;
