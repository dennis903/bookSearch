import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  min-height: 80vh;
  background-color: ${({ theme }) => theme.bgColor};
`;

const MainStyle = ({ children }) => <Wrapper>{children}</Wrapper>;

export default MainStyle;
