import styled from "styled-components";
import { rem } from "../../../utility/helper";
import { rgba } from "polished";

export const SelectIcon = styled.div`
  display: inline-block;
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  font-size: ${rem(13)};
  color: #0b7d91;
  opacity: 0.5;
  transition: all 0.3s ease;
`;

export const SelectAnimateLine = styled.div`
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

  &.focus {
    top: -3px;
    font-size: ${rem(10)};
    font-weight: 600;
    color: #0b7d91;
  }
`;

export const SelectInput = styled.select`
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

  &:focus ~ ${Label}, &:valid ~ ${Label} {
    top: -3px;
    font-size: ${rem(10)};
    font-weight: 600;
    color: #0b7d91;
  }
  &:focus ~ ${SelectIcon}, &:valid ~ ${SelectIcon} {
    opacity: 1;
  }

  &:focus ~ ${SelectAnimateLine}, &:valid ~ ${SelectAnimateLine} {
    &:after {
      width: 100%;
      left: 0;
    }
  }
`;

export const Option = styled.option`
  width: 100%;
`;

export const SelectBody = styled.div`
  width: 100%;
  position: relative;

  &:focus-within ${Label} {
    top: -3px;
    font-size: ${rem(10)};
    font-weight: 600;
    color: #0b7d91;
  }

  &:focus-within ${SelectIcon} {
    opacity: 1;
  }
  &:focus-within ${SelectAnimateLine} {
    &:after {
      width: 100%;
      left: 0;
    }
  }

  .react-dropdown-select {
    border: none;
    padding: 12px 16px 12px 0;

    &:focus {
      box-shadow: unset;
    }
    &:focus-within {
      box-shadow: unset;
    }
  }
  .react-dropdown-select-dropdown-handle {
    display: none;
  }

  .react-dropdown-select-input {
    font-style: normal;
    font-weight: normal;
    font-size: ${rem(14)};
    line-height: ${rem((14 * 113) / 100)};
    color: #a5a5a5;
  }
  .react-dropdown-select-content span {
    font-style: normal;
    font-weight: normal;
    font-size: ${rem(14)};
    line-height: ${rem((14 * 113) / 100)};
    color: #000000;
  }

  .react-dropdown-select-dropdown {
    width: 100%;
    padding: 12px 0;
    border-radius: 0 0 12px 12px;
    background: #ffffff;
    box-shadow: 0px 8px 41px rgba(11, 125, 145, 0.09);
    border-radius: 0 0 6px 6px;
    padding: 8px 0;
    /* border: 1px solid ${rgba("#0b7d91", 0.3)}; */
    border: none;
    top: 40px;
  }

  .react-dropdown-select-item {
    font-style: normal;
    font-weight: normal;
    font-size: ${rem(14)};
    line-height: ${rem((14 * 113) / 100)};
    color: #000000;
    padding: 8px 16px;
    &:hover {
      background: transparent;
    }
  }

  .react-dropdown-select-item-selected {
    background: #0b7d91;

    &:hover {
      background: #0b7d91;
    }
  }
`;
