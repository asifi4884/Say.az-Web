import styled from "styled-components";
import { rem } from "../../utility/helper";

export const Profile = styled.section`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const ProfileHeader = styled.div`
  width: 100%;
  margin-bottom: 16px;
`;

export const ProfileBody = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  min-height: 0;
`;

export const ProfileBodyContent = styled.div`
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

export const ProfileInner = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 32px 0;
  padding-bottom: 45px;
`;

export const ProfileForm = styled.form`
  width: 100%;
`;

export const ProfileFormAbout = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProfilePicture = styled.label`
  width: 105px;
  height: 105px;
  border-radius: 50%;
  cursor: pointer;
  position: relative;
  margin-bottom: 8px;

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
  }

  span {
    width: 32px;
    height: 32px;
    background: #dd7e32;
    border-radius: 50%;
    font-size: 12px;
    color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    bottom: 8px;
    right: -3px;
  }
`;

export const ProfileName = styled.h2`
  font-style: normal;
  font-weight: 600;
  font-size: ${rem(18)};
  line-height: ${rem(22)};
  color: #002428;
  margin-bottom: 4px;
`;

export const ProfileBirthday = styled.span`
  font-style: normal;
  font-weight: normal;
  font-size: ${rem(10)};
  line-height: ${rem(12)};
  color: #9d9d9d;
`;

export const ProfileFormGroup = styled.div`
  width: 100%;
  margin-top: 32px;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 32px;

  @media only screen and (min-width: 576px) {
    grid-template-columns: 1fr 1fr;
  }

  @media only screen and (min-width: 1441px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export const ProfileInfo = styled.span`
  width: 100%;
  font-style: normal;
  font-weight: normal;
  font-size: ${rem(10)};
  line-height: ${rem((10 * 113) / 100)};
  color: #9d9d9d;
  margin-top: 32px;
  display: block;

  @media only screen and (min-width: 768px) {
    max-width: 315px;
  }
`;

export const ProfileFormButtons = styled.div`
  width: 100%;
  margin-top: auto;
  padding-top: 16px;
  display: flex;
  flex-wrap: wrap;

  button {
    margin-top: 8px;
  }
`;

export const ProfileRemove = styled.button`
  background: #ffffff;
  box-shadow: 0px 8px 41px rgba(11, 125, 145, 0.09);
  border-radius: 10px;
  border: none;
  padding: 12px 24px;
  font-style: normal;
  font-weight: 600;
  font-size: ${rem(12)};
  line-height: ${rem(15)};
  color: #c40707;

  @media only screen and (min-width: 576px) {
    margin-left: auto;
  }
`;
