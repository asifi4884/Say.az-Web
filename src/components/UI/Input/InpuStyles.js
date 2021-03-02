import styled from "styled-components";
import { rem } from "../../../utility/helper";

export const InputGroup = styled.div`
  width: 100%;
`;

export const InputBody = styled.div`
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

export const InputIcon = styled.div`
  display: inline-block;
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  font-size: 13px;
  color: #0b7d91;
  opacity: 0.5;
  transition: all 0.3s ease;
`;

export const InputAnimateLine = styled.div`
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

export const InputType = styled.input`
  width: 100%;
  display: block;
  padding: 12px 16px 12px 0;
  font-style: normal;
  font-weight: normal;
  font-size: ${rem(14)};
  line-height: ${rem((14 * 113) / 100)};
  color: #000000;
  border: none;

  &.readOnly {
    pointer-events: none;
    user-select: none;
    & ~ ${Label} {
      top: -3px;
      font-size: ${rem(10)};
      font-weight: 600;
      color: #0b7d91;
    }
    & ~ ${InputIcon} {
      opacity: 1;
    }

    & ~ ${InputAnimateLine} {
      &:after {
        width: 100%;
        left: 0;
      }
    }
  }

  &:focus ~ ${Label}, &:valid ~ ${Label} {
    top: -3px;
    font-size: ${rem(10)};
    font-weight: 600;
    color: #0b7d91;
  }
  &:focus ~ ${InputIcon}, &:valid ~ ${InputIcon} {
    opacity: 1;
  }

  &:focus ~ ${InputAnimateLine}, &:valid ~ ${InputAnimateLine} {
    &:after {
      width: 100%;
      left: 0;
    }
  }
`;
