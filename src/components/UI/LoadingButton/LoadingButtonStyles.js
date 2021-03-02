import styled from "styled-components";
import { rem } from "../../../utility/helper";

export const Button = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background: #0b7d91;
  box-shadow: 0px 15px 27px rgba(11, 125, 145, 0.2);
  border-radius: 8px;
  border: none;
  padding: 16px;
  margin-top: 32px;
  svg {
    font-size: 16px;
    color: #ffffff;
    opacity: 0.8;
  }
  span {
    font-style: normal;
    font-weight: bold;
    font-size: ${rem(14)};
    line-height: ${rem(17)};
    text-align: center;
    color: #ffffff;
    opacity: 0.8;
  }
`;
