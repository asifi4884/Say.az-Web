import styled from "styled-components";
import { rem } from "../../utility/helper";

export const Home = styled.section`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const HomeHeader = styled.div`
  width: 100%;
  margin-bottom: 16px;
`;

export const HomeHeaderBalance = styled.div`
  display: inline-block;
  padding: 12px 24px;
  background: #ffffff;
  box-shadow: 0px 8px 41px rgba(11, 125, 145, 0.09);
  border-radius: 10px;

  span {
    font-style: normal;
    font-weight: bold;
    font-size: ${rem(20)};
    line-height: ${rem(24)};
    color: #178106;
  }

  small {
    font-style: normal;
    font-weight: bold;
    font-size: ${rem(13)};
    line-height: ${rem(20)};
    color: #178106;
    opacity: 0.4;
  }
`;

export const HomeBody = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  min-height: 0;
  @media only screen and (min-width: 992px) {
    padding-right: 15px;
  }
`;

export const HomeBodyContent = styled.div`
  background: #ffffff;
  box-shadow: 0px 8px 41px rgba(11, 125, 145, 0.09);
  border-radius: 10px;
  padding: 0 16px;
  width: 100%;
  /* overflow-y: scroll;
  overflow-x: hidden; */

  &::-webkit-scrollbar {
    display: none;
  }
  @media only screen and (min-width: 992px) {
    padding: 0 32px;
  }
`;

export const HomeBodyHeader = styled.div`
  width: 100%;
  padding: 32px 0;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  background-color: #ffffff;

  position: sticky;
  top: 0;
`;

export const HomeTitle = styled.div`
  display: flex;

  svg {
    color: #0c7d91;
    opacity: 0.3;
    font-size: 30px;
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
`;

export const HomeTools = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`;

export const HomeData = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const HomeDataHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  margin-top: 24px;
`;

export const HomeDataContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  &:first-child ${HomeDataHeader} {
    margin-top: 0;
  }
`;

export const HomeDataQuarter = styled.span`
  padding-right: 16px;
  display: block;
  font-style: normal;
  font-weight: normal;
  font-size: ${rem(12)};
  line-height: ${rem(15)};
  color: #000000;
`;

export const HomeDataLine = styled.span`
  flex: 1;
  height: 1px;
  background-color: rgba(0, 0, 0, 0.1);
`;

export const HomeDataInner = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const HomeDataItem = styled.div`
  width: 100%;
  margin-bottom: 8px;
`;
