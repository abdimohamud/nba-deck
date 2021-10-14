import React from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";

import { useSelector } from "react-redux";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    transition: all 0.5s;
  }
`;

const Theme = ({ children }) => {
  const theme = useSelector((state) => state.preferences.theme);


  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

export default Theme;
