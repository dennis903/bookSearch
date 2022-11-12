import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 100px;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Layout = ({ children }) => <Wrapper>{children}</Wrapper>;

export default Layout;
