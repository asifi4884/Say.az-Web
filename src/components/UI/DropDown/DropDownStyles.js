import styled from "styled-components";
import { rem } from "../../../utility/helper";

export const DropDown = styled.div`
  width: min-content;
`;

export const DropDownBody = styled.div`
  position: relative;
`;

export const DropDownButton = styled.button`
  max-width: 160px;
  min-width: 85px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: transparent;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  border-radius: 5px;
  padding: 8px 16px;

  span {
    font-style: normal;
    font-weight: normal;
    font-size: ${rem(12)};
    line-height: ${rem((12 * 113) / 100)};
    color: #000000;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  svg {
    font-size: 8px;
    color: #0b7d91;
    margin-left: 4px;
  }
`;

export const DropDownContent = styled.div`
  max-width: 160px;
  min-width: 100%;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  border-radius: 5px;
  background-color: #ffffff;
  padding: 8px 0;

  position: absolute;
  top: 35px;
  right: 0;
  z-index: 3;

  visibility: hidden;
  opacity: 0;
  transform: translate3d(0.8, 0.8, 0.8);
  transition: all 0.2s linear;

  &.open {
    visibility: visible;
    opacity: 1;
    transform: translate3d(1, 1, 1);
  }
`;

export const DropDownList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
`;

export const DropDownListItem = styled.li`
  width: 100%;
  padding: 4px 16px;
  font-style: normal;
  font-weight: normal;
  font-size: ${rem(12)};
  line-height: ${rem((12 * 113) / 100)};
  color: #000000;
  transition: all 0.2s linear;
  cursor: pointer;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;
