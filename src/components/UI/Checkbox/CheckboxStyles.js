import styled from "styled-components";
import { rem } from "../../../utility/helper";

export const Checkbox = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  user-select: none;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    position: relative;

    width: 14px;
    height: 14px;
    border: 2px solid #84bdc7;
    border-radius: 2px;
    margin-right: 6px;
    transition: all 0.3s;

    &:after {
      content: "";
      width: 2px;
      height: 6px;
      border: solid #ffffff;
      border-width: 0 2px 2px 0;
      transform: rotate(45deg);
      transition: all 0.3s;
    }
  }
  span {
    font-style: normal;
    font-weight: normal;
    font-size: ${rem(14)};
    line-height: ${rem((14 * 122) / 100)};
    color: #1d1d1d;
  }

  input:checked ~ div {
    border-color: #0b7d91;

    &:after {
      border-color: #0b7d91;
    }
  }
  input:checked ~ span {
    color: #203152;
  }
`;
