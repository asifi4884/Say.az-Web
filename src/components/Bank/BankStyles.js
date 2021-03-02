import styled from "styled-components";
import { rem } from "../../utility/helper";

export const Bank = styled.section`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const BankBody = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  min-height: 0;
  @media only screen and (min-width: 992px) {
    padding-right: 15px;
  }
`;

export const BankBodyContent = styled.div`
  background: #ffffff;
  box-shadow: 0px 8px 41px rgba(11, 125, 145, 0.09);
  border-radius: 10px;
  padding: 0 16px;
  width: 100%;
  /* overflow-y: scroll;
  overflow-x: hidden; */

  display: flex;
  flex-direction: column;

  &::-webkit-scrollbar {
    display: none;
  }
  @media only screen and (min-width: 992px) {
    padding: 0 32px;
  }
`;

export const BankBodyHeader = styled.div`
  width: 100%;
  padding: 32px 0;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;

  position: sticky;
  top: 0;

  @media only screen and (min-width: 576px) {
    flex-direction: row;
    align-items: center;
  }
`;

export const BankTitle = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  svg {
    color: #0c7d91;
    opacity: 0.3;
    font-size: 30px;
    cursor: pointer;
  }

  h2 {
    font-style: normal;
    font-weight: 600;
    font-size: ${rem(24)};
    line-height: ${rem(29)};
    color: #002428;
    margin-left: 18px;
    white-space: break-spaces;
  }

  @media only screen and (min-width: 576px) {
    margin-bottom: 0;
  }
`;

export const BankTools = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-start;

  @media only screen and (min-width: 576px) {
    justify-content: flex-end;
  }
`;

export const BankContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  column-gap: 32px;
  row-gap: 16px;

  @media only screen and (min-width: 576px) {
    grid-template-columns: 1fr 1fr;
  }

  @media only screen and (min-width: 1441px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export const BankCard = styled.div`
  background: #f5f5f5;
  border-radius: 10px;
  padding: 20px 16px;
`;

export const BankCardBody = styled.div`
  display: flex;
  align-items: center;
`;

export const BankCardImage = styled.div`
  font-size: ${rem(24)};
  width: 1em;
  height: 1em;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const BankCardNumber = styled.div`
  flex: 1;
  padding: 0 16px;
  display: flex;
  align-items: center;
  span {
    font-style: normal;
    font-weight: normal;
    font-size: ${rem(14)};
    line-height: ${rem(21)};
    color: #002d33;
    height: 16px;
    &:last-child {
      height: 20px;
      margin-left: 7px;
    }
  }
`;

export const BankCardDelete = styled.div`
  button {
    padding: 8px 10px;
    font-size: ${rem(13)};
    border: 1px solid #fbe7e7;
    box-sizing: border-box;
    border-radius: 5px;
    display: flex;
    align-items: center;
    color: #d60707;
  }
`;

export const BankForm = styled.form`
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 32px 0;
  padding-bottom: 45px;
`;

export const BankFormGroup = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 32px;

  @media only screen and (min-width: 576px) {
    grid-template-columns: 1fr 1fr;
    column-gap: 32px;
  }

  @media only screen and (min-width: 992px) {
    grid-template-columns: 50% 1fr 1fr;
  }
`;

export const BankFormButtons = styled.div`
  width: 100%;
  margin-top: auto;
  padding-top: 16px;
`;
