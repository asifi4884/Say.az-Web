import React, { useState, useEffect, useRef } from "react";
import {
  Header,
  HeaderBody,
  HeaderSearch,
  HeaderSearchButton,
  HeaderSearchInput,
  HeaderLanguage,
  HeaderLanguageButton,
  HeaderLanguageContent,
  HeaderLanguageList,
  HeaderLanguageListItem,
  HeaderMenuButton,
} from "./HeaderStyles";

import { useTranslation } from "react-i18next"


import { Search, Down, Menu } from "../../icons";
function HeaderComponent({ setOpenSide }) {
  const { t, i18n } = useTranslation()
  const lang = localStorage.getItem("i18nextLng") ? localStorage.getItem("i18nextLng") : "az"
  const langVal = lang === "az" ? "Az" : lang === "en" ? "En" : lang === "ru" && "Ру"
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(langVal);

  const ref = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [ref]);

  const changeLang = (lang) => {
    i18n.changeLanguage(lang)
  }

  return (
    <Header>
      <HeaderBody>
        <HeaderMenuButton onClick={() => setOpenSide(true)}>
          <Menu />
        </HeaderMenuButton>
        <HeaderSearch>
          <HeaderSearchButton>
            <Search />
          </HeaderSearchButton>
          <HeaderSearchInput type="text" placeholder={t("search.1")} />
        </HeaderSearch>
        <HeaderLanguage ref={ref}>
          <HeaderLanguageButton onClick={() => setOpen(!open)}>
            <span>{value}</span>
            <Down />
          </HeaderLanguageButton>
          <HeaderLanguageContent className={open ? "open" : ""}>
            <HeaderLanguageList>
              <HeaderLanguageListItem
                onClick={() => {
                  setValue("Az");
                  setOpen(false);
                  changeLang("az")
                }}
              >
                Az
              </HeaderLanguageListItem>
              <HeaderLanguageListItem
                onClick={() => {
                  setValue("En");
                  setOpen(false);
                  changeLang("en")
                }}
              >
                En
              </HeaderLanguageListItem>
              <HeaderLanguageListItem
                onClick={() => {
                  setValue("Ру");
                  setOpen(false);
                  changeLang("ru")
                }}
              >
                Ру
              </HeaderLanguageListItem>
            </HeaderLanguageList>
          </HeaderLanguageContent>
        </HeaderLanguage>
      </HeaderBody>
    </Header>
  );
}

export default HeaderComponent;
