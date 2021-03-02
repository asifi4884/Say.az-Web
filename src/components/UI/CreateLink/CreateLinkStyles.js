import styled from "styled-components";
import { rem } from "../../../utility/helper";

export const Create = styled.div`
  a {
    display: flex;
    align-items: center;
    font-style: normal;
    font-weight: normal;
    font-size: ${rem(12)};
    line-height: ${rem((12 * 113) / 100)};
    color: #000000;
    text-decoration: none;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    padding: 7px 16px;
    svg {
      font-size: 9px;
      color: #0b7d91;
      margin-left: 8px;
    }
  }
`;
