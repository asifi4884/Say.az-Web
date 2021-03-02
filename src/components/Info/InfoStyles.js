import styled from "styled-components";
import { rem } from "../../utility/helper";

export const InfoSection = styled.section`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const InfoHeader = styled.div`
  width: 100%;
  margin-bottom: 16px;
`;

export const InfoBody = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  min-height: 0;
`;

export const InfoBodyContent = styled.div`
  background: #ffffff;
  box-shadow: 0px 8px 41px rgba(11, 125, 145, 0.09);
  border-radius: 10px;
  padding: 0 16px;
  width: 100%;
  overflow-y: scroll;
  overflow-x: hidden;

  display: flex;
  flex-direction: column;

  &::-webkit-scrollbar {
    display: none;
  }
  @media only screen and (min-width: 992px) {
    padding: 0 32px;
  }
`;

export const InfoBodyHeader = styled.div`
  width: 100%;
  padding: 32px 0;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  background-color: #ffffff;

  position: sticky;
  top: 0;
`;

export const InfoTitle = styled.div`
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

export const InfoContent = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  padding-bottom: 45px;
`;

export const InfoContentInner = styled.div`
  width: 100%;
`;

export const InfoContentText = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: ${rem(14)};
  line-height: ${rem(17)};
  color: #48484a;
  margin-bottom: 16px;
`;

export const InfoContentButton = styled.div`
  width: 100%;
  margin-top: auto;

  a {
    background: #d7e9ec;
    box-shadow: 0px 8px 41px rgba(11, 125, 145, 0.09);
    border-radius: 10px;
    font-style: normal;
    font-weight: 600;
    font-size: ${rem(12)};
    line-height: ${rem(15)};
    color: #0b7d91;
    padding: 12px 24px;
    text-decoration: none;
  }
`;
