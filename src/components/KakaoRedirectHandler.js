import React, { useEffect } from "react";
import { REST_API_KEY, REDIRECT_URI } from "./Oauth";
import { useLocation, useNavigate } from "react-router-dom";
const KakaoRedirectHandler = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const KAKAO_CODE = location.search.split("=")[1];

  const getKakaoToken = () => {
    fetch(`https://kauth.kakao.com/oauth/token`, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `grant_type=authorization_code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&code=${KAKAO_CODE}`,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.access_token) {
          localStorage.setItem("jwtToken", data.access_token);
          navigate("/profile");
        } else {
          navigate("/");
        }
      });
  };
  useEffect(() => {
    if (!location.search) return;
    getKakaoToken();
  });

  return <div>auth</div>;
};

export default KakaoRedirectHandler;
