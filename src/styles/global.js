import { createGlobalStyle } from 'styled-components';

import 'react-redux-toastr/lib/css/react-redux-toastr.min.css';

export default createGlobalStyle`
  * {
    padding:0;
    margin: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    background: #24202C;
    color: #fff;
    font-family: 'Helvetica', sans-serif;
  }

  html, body, #root {
    height: 100%;
  }

  button {
    font-family: 'Helvetica-Bold', sans-serif;
    background-color: #E5556E;
    color: #fff;
    cursor: pointer;
  }

  input {
    font-family: 'Helvetica', sans-serif;
  }

`;
