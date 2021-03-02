import styled from "styled-components";
import { rem } from "../../utility/helper";

export const Header = styled.header`
  grid-area: header;
  padding: 0;
`;

export const HeaderBody = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 15px;

  @media only screen and (min-width: 992px) {
    padding: 40px;
  }

  @media only screen and (min-width: 1200px) {
    padding: 40px 100px;
  }
`;

export const HeaderSearch = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  margin-left: 24px;

  @media only screen and (min-width: 992px) {
    margin-left: 0;
  }
`;

export const HeaderSearchButton = styled.button`
  border: none;
  background-color: transparent;
  display: flex;
  svg {
    font-size: 18px;
    color: #002428;
    opacity: 0.5;
  }
`;

export const HeaderSearchInput = styled.input`
  flex: 1;
  padding: 0 12px;
  font-style: normal;
  font-weight: normal;
  font-size: ${rem(14)};
  line-height: ${rem(17)};
  color: #002428;
  border: none;
  width: calc(100% - 20px);

  &::placeholder {
    opacity: 0.8;
    font-style: italic;
  }
`;

export const HeaderLanguage = styled.div`
  background: #ffffff;
  box-shadow: 0px 8px 41px rgba(11, 125, 145, 0.09);
  border-radius: 6px;
  position: relative;
`;

export const HeaderLanguageButton = styled.button`
  display: flex;
  align-items: center;
  background-color: transparent;
  border: none;
  padding: 8px 16px;
  span {
    font-style: normal;
    font-weight: normal;
    font-size: ${rem(12)};
    line-height: ${rem((12 * 113) / 100)};
    color: #000000;
  }

  svg {
    font-size: 10px;
    margin-left: 4px;
    color: #0b7d91;
  }
`;

export const HeaderLanguageContent = styled.div`
  position: absolute;
  width: 100%;
  top: 35px;
  right: 0;
  z-index: 5;
  background: #ffffff;
  box-shadow: 0px 8px 41px rgba(11, 125, 145, 0.09);
  border-radius: 6px;
  padding: 8px 0;

  visibility: hidden;
  opacity: 0;
  transform: scale3d(0.9, 0.9, 0.9);
  transition: all 0.1s linear;

  &.open {
    visibility: visible;
    opacity: 1;
    transform: scale3d(1, 1, 1);
  }
`;

export const HeaderLanguageList = styled.ul`
  width: 100%;
  list-style: none;
`;

export const HeaderLanguageListItem = styled.li`
  width: 100%;
  text-align: center;
  padding: 4px 16px;
  font-style: normal;
  font-weight: normal;
  font-size: ${rem(14)};
  line-height: ${rem((14 * 113) / 100)};
  color: #000000;
  cursor: pointer;

  &:hover {
    background-color: #0b7d91;
    color: #ffffff;
  }
`;

export const HeaderMenuButton = styled.div`
  background: #ffffff;
  box-shadow: 0px 8px 41px rgba(11, 125, 145, 0.09);
  border-radius: 10px;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    font-size: 20px;
    color: #dd7e32;
  }
  @media only screen and (min-width: 992px) {
    display: none;
  }
`;
