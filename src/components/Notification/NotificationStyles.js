import styled from "styled-components";
import { rem } from "../../utility/helper";

export const Notification = styled.section`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const NotificationBody = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  min-height: 0;
`;

export const NotificationBodyContent = styled.div`
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

export const NotificationBodyHeader = styled.div`
  width: 100%;
  padding: 32px 0;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  background-color: #ffffff;

  position: sticky;
  top: 0;
`;

export const NotificationTitle = styled.div`
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
  }
`;

export const NotificationData = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const NotificationCard = styled.div`
  width: 100%;
  margin-bottom: 8px;
`;

export const NotificationCardBody = styled.div`
  display: flex;
  background: #f5f5f5;
  border-radius: 10px;
  padding: 16px;

  @media only screen and (min-width: 576px) {
    padding: 16px 24px;
  }
`;

export const NotificationCardIcon = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;

  &.green {
    background-color: #178106;
  }

  &.red {
    background-color: #c40707;
  }

  svg {
    font-size: 10px;
    color: #ffffff;
  }
`;

export const NotificationContent = styled.div`
  flex: 1;
  margin-left: 14px;
  display: flex;
  flex-wrap: wrap;

  p {
    width: 100%;
    font-style: normal;
    font-weight: 500;
    font-size: ${rem(14)};
    line-height: ${rem(17)};
    color: #000000;
    margin-bottom: 6px;

    &.come {
      font-weight: 600;
    }
  }

  span {
    font-style: normal;
    font-weight: normal;
    font-size: ${rem(12)};
    line-height: ${rem(15)};
    color: #000000;
    opacity: 0.7;
    display: inline-block;
    margin-right: 12px;

    @media only screen and (min-width: 576px) {
      margin-right: 24px;
    }
  }
`;
