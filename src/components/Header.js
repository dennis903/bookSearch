import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import styled from "styled-components";

const HeaderStyle = styled.header`
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  background-color: ${({ theme }) => theme.bgColor};
`;

const HeaderNav = styled.nav`
  height: 100%;
  padding: 0px 20px;
  display: flex;
  list-style: none;
  align-items: center;
  li {
    margin-right: 20px;
  }
`;

function Header() {
  const [isLogined, setIsLogined] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const jwtToken = localStorage.getItem("jwtToken");
    if (jwtToken) setIsLogined(true);
    else navigate("/login");
  }, []);

  return (
    <HeaderStyle>
      <HeaderNav>
        <li>
          {isLogined ? (
            <Link to="/profile">프로필</Link>
          ) : (
            <Link to="/login">로그인</Link>
          )}
        </li>
        <li>
          <Link to="/books">도서검색</Link>
        </li>
      </HeaderNav>
    </HeaderStyle>
  );
}

export default Header;
