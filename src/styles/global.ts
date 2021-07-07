import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: #03116e;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 20px Roboto, sans-serif;
  }

  #root {
    max-width: 750px;
    margin: 0 auto;
    padding: 0 20px;
  }

  button {
    cursor: pointer;
  }
 `;
