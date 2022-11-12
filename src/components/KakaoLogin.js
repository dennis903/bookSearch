import React from "react";
import { KAKAO_AUTH_URL } from "./Oauth";

function KakaoLogin() {
  return (
    <a href={KAKAO_AUTH_URL}>
      <img src={"img/kakao_login.png"} alt="*" />
    </a>
  );
}

export default KakaoLogin;
