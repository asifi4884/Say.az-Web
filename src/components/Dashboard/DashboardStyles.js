import styled from "styled-components";
import { rem } from "../../utility/helper";

export const DashboardSection = styled.section`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const DashboardBody = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  min-height: 0;
  @media only screen and (min-width: 992px) {
    padding-right: 15px;
  }
`;

export const DashboardBodyContent = styled.div`
  background: #ffffff;
  box-shadow: 0px 8px 41px rgba(11, 125, 145, 0.09);
  border-radius: 10px;
  padding: 0 16px;
  width: 100%;
  overflow-y: scroll;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    display: none;
  }
  @media only screen and (min-width: 992px) {
    padding: 0 32px;
  }
`;

export const DashboardBodyHeader = styled.div`
  width: 100%;
  padding: 32px 0;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  background-color: #ffffff;

  position: sticky;
  top: 0;
`;

export const DashboardTitle = styled.div`
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

export const DashboardTools = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`;

export const DashboardData = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const DashboardDataHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  margin-top: 24px;
`;

export const DashboardDataContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  &:first-child ${DashboardDataHeader} {
    margin-top: 0;
  }
`;

export const DashboardDataQuarter = styled.span`
  padding-right: 16px;
  display: block;
  font-style: normal;
  font-weight: normal;
  font-size: ${rem(12)};
  line-height: ${rem(15)};
  color: #000000;
`;

export const DashboardDataLine = styled.span`
  flex: 1;
  height: 1px;
  background-color: rgba(0, 0, 0, 0.1);
`;

export const DashboardDataInner = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 15px;
`;

export const DashboardDataInnerHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  grid-gap: 40px;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const DashboardDataInnerBottom = styled.div`
  width: 100%;
  margin: 40px 0;
`;

export const DashboardChartSide = styled.div`
  @media only screen and (min-width: 768px) {
    width: 100%;
    max-width: 345px;
    cursor: pointer;
  }
`;

export const DashboardStatistic = styled.div`
  width: 100%;
`;

export const DashboardStatisticBody = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const DashboardStatisticItem = styled.div`
  width: 100%;
  padding: 8px 0;
  border-bottom: 1px solid #bcbcbc;
  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    font-style: normal;
    font-weight: 500;
    font-size: ${rem(12)};
    line-height: ${rem(15)};

    svg {
      color: #178106;
      margin-right: 12px;
    }

    &:first-child {
      color: #000000;
    }

    &:last-child {
      color: #178106;
    }

    strong {
      font-size: ${rem(16)};
      line-height: ${rem(19)};
    }
  }
`;
