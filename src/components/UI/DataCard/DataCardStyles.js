import styled from "styled-components";
import { rem } from "../../../utility/helper";
import { rgba } from "polished";

export const DataCard = styled.div`
  width: 100%;
`;

export const DataCardBody = styled.div`
  width: 100%;
  background: #f5f5f5;
  border-radius: 10px;
  padding: 16px;

  display: flex;

  @media only screen and (min-width: 992px) {
    padding: 16px 24px;
  }
`;

export const DataCardImage = styled.div`
  width: ${rem(38)};
  height: ${rem(38)};
  margin-right: 12px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 14px;
  }

  @media only screen and (min-width: 992px) {
    img {
      border-radius: 50%;
    }
  }
`;

export const DataContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export const DataContentTitle = styled.div`
  width: 100%;
  margin-bottom: 4px;
  span {
    font-style: normal;
    font-weight: 600;
    font-size: ${rem(16)};
    line-height: ${rem(19)};
    color: #000000;
    display: block;
    width: 100%;
    text-overflow: ellipsis;
    /* white-space: nowrap; */
    overflow: hidden;
  }

  @media only screen and (min-width: 992px) {
    span {
      color: #0b7d91;
    }
  }
`;

export const DataContentAbout = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

export const DataContentWord = styled.span`
  font-style: normal;
  font-weight: normal;
  font-size: ${rem(12)};
  line-height: ${rem(15)};
  color: rgba(0, 0, 0, 0.7);
  margin-right: 24px;
  display: none;

  &:first-child {
    margin-left: 0;
    display: block;
  }
  &:last-child {
    margin-right: 0;
  }

  @media only screen and (min-width: 576px) {
    display: block;
  }
`;

export const DataCardTools = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 12px;
`;

export const DataCardToolsAmount = styled.span`
  font-style: normal;
  font-weight: bold;
  font-size: ${rem(14)};
  line-height: ${rem(17)};
  text-align: right;
  color: #178106;
  margin-bottom: 4px;

  svg {
    font-size: 10px;
    margin-left: 12px;
  }
`;

export const DataToolsButtons = styled.div`
  display: flex;
  align-items: center;
  margin-top: auto;

  button {
    border: 1px solid;
    background-color: transparent;
    border-radius: 5px;
    padding: 8px;
    display: flex;
    align-items: center;
    margin-left: 8px;
    margin-right: 8px;
    font-size: 14px;

    &:last-child {
      margin-right: 0;
    }

    &.delete {
      color: #d60707;
      border-color: #d60707;
    }

    &.cancel {
      color: #178106;
      border-color: ${rgba("#178106", 0.4)};
    }
  }
`;
