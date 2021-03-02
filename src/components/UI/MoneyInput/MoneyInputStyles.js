import styled from "styled-components";
import { rem } from "../../../utility/helper";

export const Money = styled.div`
  width: 100%;
`;

export const MoneyBody = styled.div`
  flex-wrap: wrap;
  position: relative;
`;

export const Label = styled.label`
  display: block;
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  font-style: normal;
  font-weight: normal;
  font-size: ${rem(14)};
  line-height: ${rem((14 * 113) / 100)};
  color: #a5a5a5;
  transition: all 0.3s ease;
`;

export const MoneyInputAnimateLine = styled.div`
  display: block;
  height: 1px;
  background-color: rgba(0, 0, 0, 0.2);
  position: relative;

  &:after {
    content: "";
    display: inline-block;
    width: 0;
    height: 1px;
    position: absolute;
    top: 0;
    left: 50%;
    background-color: #0b7d91;
    transition: all 0.3s ease;
  }
`;

export const MoneyInputType = styled.input`
  width: 100%;
  display: block;
  padding: 12px 16px 12px 0;
  font-style: normal;
  font-weight: normal;
  font-size: ${rem(14)};
  line-height: ${rem((14 * 113) / 100)};
  color: #000000;
  border: none;
  appearance: none;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &:focus ~ ${Label}, &:valid ~ ${Label} {
    top: -3px;
    font-size: ${rem(10)};
    font-weight: 600;
    color: #0b7d91;
  }

  &:focus ~ ${MoneyInputAnimateLine}, &:valid ~ ${MoneyInputAnimateLine} {
    &:after {
      width: 100%;
      left: 0;
    }
  }
`;

export const SelectInput = styled.div`
  width: 90px;
  display: block;
  /* padding: 12px 24px 12px 12px; */
  font-style: normal;
  font-weight: normal;
  font-size: ${rem(14)};
  line-height: ${rem((14 * 113) / 100)};
  color: #000000;
  border: none;
  appearance: none;
  cursor: pointer;

  font-style: normal;
  font-weight: 500;
  font-size: ${rem(14)};
  line-height: ${rem((14 * 113) / 100)};
  color: #0b7d91;

  position: absolute;
  top: 0;
  right: 0;

  .react-dropdown-select {
    border: none;
  }
  .react-dropdown-select:focus-within,
  .react-dropdown-select:focus {
    box-shadow: unset;
  }

  .react-dropdown-select-dropdown-handle {
    display: none;
  }

  .react-dropdown-select-dropdown {
    width: 100%;
    padding: 12px 0;
    border-radius: 0 0 12px 12px;
    background: #ffffff;
    box-shadow: 0px 8px 41px rgba(11, 125, 145, 0.09);
    border-radius: 0 0 6px 6px;
    padding: 8px 0;
    border: none;
  }
`;

export const SelectIcon = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  padding: 12px 0;

  font-size: ${rem(13)};
  color: #0b7d91;
`;
