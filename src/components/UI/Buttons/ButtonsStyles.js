import styled from "styled-components";
import { rem } from "../../../utility/helper";
import { rgba } from "polished";

export const Button = styled.button`
  padding: 12px 24px;
  border-radius: 10px;
  border: none;
  margin: 0 8px;
  background-color: transparent;
  font-style: normal;
  font-weight: 600;
  font-size: ${rem(12)};
  line-height: ${rem(15)};

  &.cancel {
    background-color: ${rgba("#C40707", 0.09)};
    color: #c40707;
  }

  &.submit {
    background-color: ${rgba("#0B7D91", 1)};
    color: #ffffff;
  }

  &.disable {
    background-color: ${rgba("#0B7D91", 0.09)};
    color: #0b7d91;
  }
  &:first-child {
    margin-left: 0;
  }
`;
