import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: #292828;
    -webkit-font-smoothing: antialiased;
  }

  body, button {
    font: 24px Roboto, sans-serif;
  }

  input {
    font: 24px Pokemon;
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
