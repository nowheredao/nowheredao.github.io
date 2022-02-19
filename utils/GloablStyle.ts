import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    @font-face {
      font-family: "sf-pro-display_regular";
      src: url('../fonts/SF-Pro-Display-Regular.otf');
    }
    
    @font-face {
      font-family: "Roboto-Regular";
      src: url('../fonts/Roboto-Regular.ttf');
    }
    @font-face {
      font-family: "Roboto-Bold";
      src: url('../fonts/Roboto-Bold.ttf');
    }
    @font-face {
      font-family: "SFProDisplay-Bold";
      src: url('../fonts/SF-Pro-Text-Bold.otf');
    }

    
    @font-face {
      font-family: "BodoniFLF-Bold";
      src: url('../fonts/Bodoni-72-Bold-39.otf');
    }
    @font-face {
      font-family: "BodoniFLF-Roman";
      src: url('../fonts/BodoniSvtyTwoITCTT-Book.ttf');
    }
    
    
    *{
      padding: 0;
      margin: 0;
    }
    body,html{
      background: #000;
      color: #fff;
    }
    li,ul{
      padding: 0;
      margin: 0;
      list-style: none;
    }
    .mainContent{
      width:1200px;
      margin: 0 auto;
    }
    

`;
export default GlobalStyle
