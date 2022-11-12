import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
function MainPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const jwtToken = localStorage.getItem("jwtToken");
    if (jwtToken) navigate("/profile");
    else navigate("/login");
  }, []);

  return <div></div>;
}

export default MainPage;
