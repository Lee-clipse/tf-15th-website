import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import theme from "./Theme";
import GmarketSansTTFBold from "../fonts/GmarketSansTTFBold.ttf";
import GmarketSansTTFMedium from "../fonts/GmarketSansTTFMedium.ttf";
import GmarketSansTTFLight from "../fonts/GmarketSansTTFLight.ttf";

const GlobalStyle = createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    width: 100vw;
    height: 100vh;
    font-size: 80%;
  }

  body, #root {
    width: 100%;
    // height: 100%;
  }

  body {
    background-color: ${theme.color.BACKGROUND}
  }

  #root {
    display: flex;
    flex-direction: column;
    font-family: "Pretendard";	
  }

  button {
    cursor: pointer;
    background: none;
    border: none;
  }

  a {
    text-decoration: none;
  }

  .scroll::-webkit-scrollbar {
    display: none;
  }

  .scroll {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }

  input {
    outline: none;
    border: none;
    border-bottom: 0.1rem solid ${theme.color.TEXT_BLACK}
  }

  @font-face {
    font-family: 'GmarketSansTTFBold';
    src: local('GmarketSansTTFBold'), local('GmarketSansTTFBold');
    font-style: normal;
    src: url(${GmarketSansTTFBold}) format('truetype');
  }
  @font-face {
    font-family: 'GmarketSansTTFMedium';
    src: local('GmarketSansTTFMedium'), local('GmarketSansTTFMedium');
    font-style: normal;
    src: url(${GmarketSansTTFMedium}) format('truetype');
  }
  @font-face {
    font-family: 'GmarketSansTTFLight';
    src: local('GmarketSansTTFLight'), local('GmarketSansTTFLight');
    font-style: normal;
    src: url(${GmarketSansTTFLight}) format('truetype');
  }
`;

export default GlobalStyle;
