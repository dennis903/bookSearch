import React from "react";
import { KAKAO_AUTH_URL } from "./Oauth";

function KakaoLogin() {
  return <a href={KAKAO_AUTH_URL}>카카오 로그인</a>;
}

export default KakaoLogin;
