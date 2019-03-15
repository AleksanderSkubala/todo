import React from "react";
import styled, { createGlobalStyle , ThemeProvider } from 'styled-components';
import { lightTheme } from '../utils/lightTheme.js';


const GlobalStyle = createGlobalStyle`
  body, html {
    padding: 0;
    margin: 0;
    color: ${({theme})=>theme.colors.black};
    font-family: 'Montserrat', sans-serif;
  }

  *, *::after, *::before {
    box-sizing: border-box;
  }

  @font-face {
    font-family: 'Material Icons';
    font-style: normal;
    font-weight: 400;
    src: url(https://fonts.gstatic.com/s/materialicons/v46/flUhRq6tzZclQEJ-Vdg-IuiaDsNc.woff2) format('woff2');
  }

  .material-icons {
    font-family: 'Material Icons';
    font-weight: normal;
    font-style: normal;
    font-size: 24px;
    line-height: 1;
    letter-spacing: normal;
    text-transform: none;
    display: inline-block;
    white-space: nowrap;
    word-wrap: normal;
    direction: ltr;
  }

`

const MainWrapper = styled.div`
  width: 40vw;
  height: 90vh;
  display: flex;
  flex-direction: column;
  margin: 20px auto;
  text-align: center;

  border: .5px solid ${({theme})=>theme.colors.border};
  border-radius: 5px;
  box-shadow: 0 0 15px 0px ${({theme})=>theme.colors.boxShadow};

  @media screen and (max-width: 900px) {
      width: 60vh;
  }

`

const Layout = ({children}) => (
  <ThemeProvider theme={lightTheme}>
    <>
      <GlobalStyle></GlobalStyle>
      <MainWrapper>
        {children}
      </MainWrapper>
    </>
  </ThemeProvider>
)

export default Layout
