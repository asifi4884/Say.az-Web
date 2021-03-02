import styled from "styled-components";
import { rem } from "../../utility/helper";

export const Taxes = styled.section`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const TaxesBody = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  min-height: 0;

  @media only screen and (min-width: 992px) {
    padding-right: 15px;
  }
`;

export const TaxesBodyContent = styled.div`
  background: #ffffff;
  box-shadow: 0 8px 41px rgba(11, 125, 145, 0.09);
  border-radius: 10px;
  padding: 0 16px;
  width: 100%;

  display: flex;
  flex-direction: column;

  &::-webkit-scrollbar {
    display: none;
  }
  @media only screen and (min-width: 992px) {
    padding: 0 32px;
  }
`;

export const TaxesBodyHeader = styled.div`
  width: 100%;
  padding: 32px 0;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  background-color: #ffffff;

  position: sticky;
  top: 0;
`;

export const TaxesTitle = styled.div`
  display: flex;
  margin-bottom: 16px;
  align-items: center;
  flex: 1;
  white-space: nowrap;
  padding-right: 16px;
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

export const TaxesTools = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-bottom: 16px;
  & > div {
    margin-left: 16px;

    &:first-child {
      margin-left: 0;
    }
  }

  .width {
    width: 140px;
  }

  @media only screen and (min-width: 576px) {
    justify-content: flex-end;
    margin-bottom: 0;
  }
`;

export const TaxesData = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const TaxesDataItem = styled.div`
  width: 100%;
  margin-bottom: 8px;
`;

export const TaxesForm = styled.form`
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 32px 0;
  padding-bottom: 45px;
`;

export const TaxesFormGroup = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 32px;

  @media only screen and (min-width: 576px) {
    grid-template-columns: 1fr 1fr;
    column-gap: 32px;
  }

  @media only screen and (min-width: 1441px) {
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 32px;
  }
`;

export const TaxesFormButtons = styled.div`
  width: 100%;
  margin-top: auto;
  padding-top: 16px;
`;

export const TaxesFormCheckBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TaxesFormCheckBoxTitle = styled.span`
  font-style: normal;
  font-weight: 600;
  font-size: ${rem(10)};
  line-height: rem(10 * 113 / 100);
  color: #0b7d91;
  margin-bottom: 16px;
`;

export const TaxesFormCheckBoxs = styled.div`
  width: 100%;
  display: flex;
  label {
    margin-left: 10px;
    margin-right: 10px;

    &:first-child {
      margin-left: 0;
    }
  }
`;
