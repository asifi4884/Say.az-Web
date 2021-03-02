import styled from "styled-components";
import { rem } from "../../utility/helper";

export const Aside = styled.aside`
  grid-area: sidenav;
  width: 290px;
  height: 100%;
  border-right: 1px solid #dedede;
  background-color: #ffffff;

  position: fixed;
  transform: translateX(-295px);
  transition: all 0.3s ease-in-out;
  z-index: 5;

  &.open {
    transform: translateX(0);
  }

  @media only screen and (min-width: 992px) {
    position: relative;
    transform: translateX(0);
  }
`;

export const AsideBody = styled.div`
  padding: 24px 0;
  display: flex;
  flex-direction: column;
  height: 100%;

  @media only screen and (min-width: 992px) {
    padding-bottom: 40px;
    padding-top: 0;
  }
`;

export const AsideHeader = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
  padding: 0 16px;

  @media only screen and (min-width: 992px) {
    padding: 0 40px;
    padding-top: 40px;
  }
`;

export const AsideTools = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  margin-bottom: 12px;
`;

export const AsideImage = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 14px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 14px;
  }
`;

export const AsideToolsLinkList = styled.ul`
  display: flex;
  align-items: center;
  padding: 0 2px;
`;

export const AsideToolsLinkListItem = styled.li`
  margin: 0 6px;
  border-radius: 8px;
  cursor: pointer;
  position: relative;

  a {
    padding: 7px;
    display: block;
  }
`;

export const AsideToolsNotification = styled.span`
  padding: 4px 5px;
  background: #c40707;
  position: absolute;
  top: -6px;
  right: -6px;
  border-radius: 10px;
  color: #ffffff;
  font-size: 9px;
  font-weight: 400;
`;

export const AsidePersonInformation = styled.div`
  display: flex;
  flex-direction: column;
`;

export const AsidePersonName = styled.h1`
  font-style: normal;
  font-weight: 600;
  font-size: ${rem(18)};
  line-height: ${rem(22)};
  color: #002428;
`;

export const AsidePersonLink = styled.div`
  a {
    font-style: normal;
    font-weight: normal;
    font-size: ${rem(10)};
    line-height: ${rem(12)};
    color: #9d9d9d;
    text-decoration: none;
  }
`;

export const AsideNav = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex: 1;
  overflow: hidden scroll;

  position: relative;

  a {
    padding: ${rem(28)} 16px;
    display: flex;
    align-items: center;
    text-decoration: none;
    font-style: normal;
    font-weight: normal;
    font-size: ${rem(14)};
    line-height: ${rem(17)};
    color: #002428;

    span {
      margin-left: 12px;
    }
    svg {
      font-size: ${rem(20)};
      color: rgba(0, 0, 0, 0.2);
    }

    &.active {
      color: #000000;
      font-weight: 600;
      border-bottom: 1px solid #dd7e32;

      svg {
        color: #dd7e32;
      }
    }

    @media only screen and (min-width: 992px) {
      padding: ${rem(28)} 40px;

      &.active {
        border-bottom: none;
      }
    }
  }
  @media only screen and (min-width: 992px) {
    overflow: unset;
  }
`;

export const AsideNavbarLine = styled.span`
  display: none;
  width: 3px;
  background-color: #dd7e32;
  border-radius: 6px;

  position: absolute;
  top: 0;
  right: -4px;

  transition: all 0.3s linear;

  @media only screen and (min-width: 992px) {
    display: block;
  }
`;

export const AsideBottom = styled.div`
  margin-top: auto;
  padding: 0 16px;

  a {
    max-width: 86px;
    display: block;
    img {
      width: 100%;
    }
  }
  @media only screen and (min-width: 992px) {
    padding: 0 40px;
  }
`;
