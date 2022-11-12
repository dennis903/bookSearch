import axios from "axios";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import MainStyle from "../styles/MainStyle";

const ProfileStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 50px;

  img {
    margin-bottom: 50px;
    width: 200px;
    height: 200px;
    border-radius: 100px;
  }
  h1 {
    font-size: 30px;
    font-weight: 700;
    margin-bottom: 50px;
  }
`;

function Profile() {
  const [nickname, setNickname] = useState("");
  const [profileImage, setProfileImage] = useState("");
  const [birthday, setBirthday] = useState("");
  const [gender, setGender] = useState("");

  const getUserInfo = async () => {
    const jwtToken = localStorage.getItem("jwtToken");
    await axios
      .get(`https://kapi.kakao.com//v2/user/me`, {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
          "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
        },
      })
      .then(({ data }) => {
        setNickname(data.properties.nickname);
        setProfileImage(data.properties.profile_image);
        setBirthday(data.kakao_account.birthday);
        setGender(data.kakao_account.gender);
      });
  };
  useEffect(() => {
    getUserInfo();
  }, []);

  return (
    <MainStyle>
      <ProfileStyle>
        <img src={profileImage} alt="*" />
        <h1>{nickname}</h1>
        <span>
          {birthday.substr(0, 2)}월 {birthday.substr(2)}일
        </span>
        <span>{gender}</span>
      </ProfileStyle>
    </MainStyle>
  );
}

export default Profile;
