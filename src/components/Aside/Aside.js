import React, { useState, useEffect } from "react";
import {
  Aside,
  AsideBody,
  AsideHeader,
  AsideTools,
  AsideImage,
  AsideToolsLinkList,
  AsidePersonInformation,
  AsidePersonName,
  AsidePersonLink,
  AsideNav,
  AsideNavbarLine,
  AsideBottom,
} from "./AisdeStyles";

import { useTranslation } from "react-i18next";

import person from "../../assets/images/personGirlLarge.jpg";
import AsideToolsLink from "./AsideToolsLinkj";
import {
  Bell,
  Card,
  Gains,
  Receipt,
  Info,
  Logout,
  Taxe,
  Pie,
} from "../../icons";
import Logo from "../../assets/images/logo.png";
import { useLocation, NavLink } from "react-router-dom";
import AsideNavbarLink from "./AsideNavbarLink";

function AsideComponent({ openSide }) {
  const { t } = useTranslation();
  const [top, setTop] = useState(0);
  const [height, setHeight] = useState(0);
  const { pathname } = useLocation();

  const topCalc = () => {
    const asideNav = document.getElementById("asideNav");
    const headerNav = document.getElementById("headerNav");
    const headerNavItem = headerNav.querySelector("a.active");
    const headerNavHeight = headerNav.offsetHeight;
    const itemCurrent = asideNav.querySelector("a.active");
    const itemGBCR = itemCurrent.getBoundingClientRect().top;
    if (itemCurrent !== null) {
      if (headerNavItem) {
        setTop(0);
        setHeight(headerNavHeight);
      } else {
        const top = itemGBCR;
        const height = itemCurrent.offsetHeight;
        setTop(top);
        setHeight(height);
      }
    }
  };

  useEffect(() => {
    topCalc();
  }, [pathname]);

  return (
    <Aside id="asideNav" className={openSide ? "open" : ""}>
      <AsideBody>
        <AsideNavbarLine style={{ top: top, height: height + "px" }} />
        <AsideHeader id="headerNav">
          <AsideTools>
            <AsideImage>
              <img src={person} alt="Person" />
            </AsideImage>
            <AsideToolsLinkList>
              <AsideToolsLink
                link="/notifications"
                icon={<Bell />}
                color="#DD7E32"
                bgColor="rgba(221, 126, 50, 0.1)"
                notification
              />
              <AsideToolsLink
                link="/accounts"
                icon={<Card />}
                color="#0B7D91"
                bgColor="rgba(11,125,145,0.1)"
              />
            </AsideToolsLinkList>
          </AsideTools>
          <AsidePersonInformation>
            <AsidePersonName>Ülviyyə İmamova</AsidePersonName>
            <AsidePersonLink>
              <NavLink to="/profile">{t("person.1")}</NavLink>
            </AsidePersonLink>
          </AsidePersonInformation>
        </AsideHeader>
        <AsideNav>
          <AsideNavbarLink
            link="/"
            text={t("navbar.1")}
            icon={<Gains />}
            exact
          />

          <AsideNavbarLink
            link="/receipt"
            text={t("navbar.2")}
            icon={<Receipt />}
          />
          <AsideNavbarLink link="/taxes" text={t("navbar.3")} icon={<Taxe />} />
          <AsideNavbarLink
            link="/dashboard"
            text={t("navbar.7")}
            icon={<Pie />}
          />

          <AsideNavbarLink link="/info" text={t("navbar.4")} icon={<Info />} />

          <AsideNavbarLink
            link="/logout"
            text={t("navbar.5")}
            icon={<Logout />}
          />
        </AsideNav>
        <AsideBottom>
          <NavLink to="/">
            <img src={Logo} alt="Sayaz" />
          </NavLink>
        </AsideBottom>
      </AsideBody>
    </Aside>
  );
}

export default AsideComponent;
