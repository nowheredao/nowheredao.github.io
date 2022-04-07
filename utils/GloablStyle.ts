import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "din_bold";
    src: url("../fonts/din_bold.otf");
  }
  @font-face {
    font-family: "din_regular";
    src: url("../fonts/din_regular.otf");
  }
    *{
      padding: 0;
      margin: 0;
    }
    body,html{
      background: #0e0f11;
      color: #fff;
    }
    li,ul{
      padding: 0;
      margin: 0;
      list-style: none;
    }
    .mainContent{
      width:1176px;
      margin: 0 auto;
    }
    @media(max-width: 1176px){
      .mainContent{
        width:100%;
      }
    }
    img{
      width: 100%;
    }

`;
export default GlobalStyle
