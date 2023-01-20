import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    text-decoration: none;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif !important;
    box-sizing: border-box;
  }
    /* ::-webkit-scrollbar {
      height: 0px;
      width: 8px;
      opacity: 0;
      position: relative;
      display: none; 
      left: 8px; 

    }

    ::-webkit-scrollbar-thumb:hover {
      display: block; 
    }

    ::-webkit-scrollbar-track {
        box-shadow: inset 0 0 3px lightgrey; 
        border-radius: 5px;
        display: none;
    }
    ::-webkit-scrollbar-thumb {
        background: lightgrey; 
        border-radius: 5px;
        opacity: 0.1;
        left: 8px;
        height: 40px;
    }
    ::-webkit-scrollbar-thumb:hover {
        
        opacity: 0.1;
    } */

  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /* overflow-y: hidden; */
    overflow-x: hidden; 
    box-sizing: border-box;

  }

  a{
    color: inherit;
  }
`

export default GlobalStyle;