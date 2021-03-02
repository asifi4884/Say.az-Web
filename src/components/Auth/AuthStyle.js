import styled from "styled-components";
import { rem } from "../../utility/helper";

export const Auth = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #ffffff;
`;

export const AuthContainer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-areas: "main";

  @media only screen and (min-width: 992px) {
    grid-template-columns: 360px 1fr;
    grid-template-areas: "sidenav main";

    &.register-container {
      grid-template-columns: 1fr 360px;
      grid-template-areas: "main sidenav";
    }
  }
`;

export const Aside = styled.aside`
  width: 360px;
  grid-area: sidenav;
  background-color: #edf5f7;
  display: none;

  @media only screen and (min-width: 992px) {
    display: block;
  }
`;

export const AsideBody = styled.div`
  width: 365px;
  height: 100%;
  margin-left: 100px;
  display: flex;
  flex-direction: column;

  &.register-aside {
    margin-left: -100px;
  }

  @media only screen and (min-width: 992px) {
    justify-content: space-around;
  }
`;

export const AsideLogo = styled.div`
  display: flex;
  align-items: center;
  a {
    display: inline-block;
  }
  img {
    object-fit: contain;
  }

  /* &.flex-grow {
    flex-grow: 1;
  } */

  &.regsiter-aside__logo {
    a {
      display: none;
    }
  }

  @media only screen and (min-width: 992px) {
    &.mobile-logo {
      display: none;
    }
  }
`;

export const AsideIllustration = styled.div`
  svg {
    width: 100%;
    max-width: 300px;
    height: auto;
  }

  &.register-illustration {
    svg {
      max-width: 100%;
    }
  }
`;

export const AsideContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  &.register-aside__content {
    align-items: flex-end;
    text-align: right;
  }
`;

export const AsideTitle = styled.h1`
  font-style: normal;
  font-weight: bold;
  font-size: ${rem(48)};
  color: #000000;
  line-height: ${rem(53)};
  margin-bottom: 16px;
`;

export const AsideText = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: ${rem(14)};
  line-height: ${rem(17)};
  color: #9d9d9d;
  margin-bottom: 44px;
`;

export const AsideLink = styled.div`
  a {
    min-width: 236px;
    display: inline-block;
    padding: 16px;
    border: 1px solid #0b7d91;
    border-radius: 8px;
    font-style: normal;
    font-weight: bold;
    font-size: ${rem(14)};
    line-height: ${rem(17)};
    text-align: center;
    color: #0b7d91;
    text-decoration: none;
  }
`;

export const AuthContent = styled.main`
  grid-area: main;
  display: flex;
  justify-content: center;
  padding: 0 16px;

  @media only screen and (min-width: 576px) {
    padding: 0 100px;
  }
`;

export const AuthContentBody = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  & > div {
    margin-top: 24px;
  }

  @media only screen and (min-width: 992px) {
    justify-content: center;
  }
`;

export const AuthHeader = styled.div`
  margin-bottom: 16px;
`;

export const AuthButtons = styled.div`
  display: flex;

  button {
    background: #ffffff;
    border-radius: 10px;
    border: none;
    padding: 16px 24px;
    font-style: normal;
    font-weight: normal;
    font-size: ${rem(14)};
    line-height: ${rem((14 * 113) / 100)};
    color: #9d9d9d;
    margin-right: 16px;

    &.active {
      color: #0b7d91;
      font-weight: bold;
      box-shadow: 0 8px 41px rgba(11, 125, 145, 0.09);
    }
    &.disabled {
      pointer-events: none;
    }
  }
`;

export const AuthForm = styled.div`
  width: 100%;
  max-width: 435px;
  align-self: center;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  @media only screen and (min-width: 992px) {
    justify-content: center;
    flex-grow: 2;
    /* &.register-auth__form {
      justify-content: flex-start;
    } */
  }
`;

export const AuthFormBody = styled.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 8px 41px rgba(11, 125, 145, 0.09);
  border-radius: 10px;

  &.active {
    display: flex;
  }

  &.completed {
    display: none;
  }

  @media only screen and (min-width: 576px) {
    padding: 40px;
  }
`;

export const AuthFormHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 25px;
  img {
    margin-right: 16px;
  }

  @media only screen and (min-width: 576px) {
    margin-bottom: 64px;
  }
`;

export const AuthFormTitle = styled.h2`
  font-style: normal;
  font-weight: bold;
  font-size: ${rem(32)};
  line-height: ${rem((32 * 113) / 100)};
  color: #002428;
`;

export const AuthFormContent = styled.form`
  display: flex;
  flex-direction: column;
`;

export const AuthFormGroup = styled.div`
  width: 100%;
  margin-bottom: 32px;

  &:last-child {
    margin-bottom: 0;
  }

  button {
    width: 100%;
  }
`;

export const AuthMobileLink = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* flex-grow: 1; */

  a {
    font-style: normal;
    font-weight: normal;
    font-size: ${rem(12)};
    line-height: ${rem((12 * 113) / 100)};
    color: #0b7d91;
    text-decoration: none;
  }
  @media only screen and (min-width: 992px) {
    display: none;
  }
`;

export const AuthQuestion = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  a {
    font-style: normal;
    font-weight: 500;
    font-size: ${rem(12)};
    line-height: ${rem((12 * 113) / 100)};
    color: #000000;
    text-decoration: none;
    display: flex;
    align-items: center;
    svg {
      font-size: 14px;
      color: #0b7d91;
      margin-right: 7px;
    }
  }

  @media only screen and (min-width: 992px) {
    flex-grow: 1;
  } ;
`;

export const AuthImageBody = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 48px;
`;

export const AuthImage = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;

export const AuthImageContent = styled.div`
  width: ${rem(66)};
  height: ${rem(66)};
  background: rgba(196, 196, 196, 0.2);
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2px;
  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;

    &.photo {
      border-radius: 50%;
    }
  }
`;

export const AuthUploadImage = styled.span`
  font-style: normal;
  font-weight: normal;
  font-size: ${rem(8)};
  line-height: ${rem(10)};
  text-align: center;
  color: #0b7d91;
`;

export const AuthName = styled.div`
  margin-left: 16px;
  overflow: hidden;
  h3 {
    font-style: normal;
    font-weight: bold;
    font-size: ${rem(24)};
    line-height: ${rem((24 * 113) / 100)};
    color: #002428;
    margin-bottom: 8px;
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  span {
    font-style: normal;
    font-weight: normal;
    font-size: ${rem(12)};
    line-height: ${rem((12 * 113) / 100)};
    color: #9d9d9d;
  }
`;
