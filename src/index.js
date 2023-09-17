import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  ::-moz-selection {
    background-color: #b3d4fc; /* 1 */
    color: #000000; /* 1 */
    text-shadow: none;
  }

  ::selection {
    background-color: #b3d4fc; /* 1 */
    color: #000000; /* 1 */
    text-shadow: none;
  }

  table {
    border-collapse: collapse;
  }

  th {
    text-align: inherit;
  }

  input {
    outline: none;
    border: none;
    background-image: none;
    background-color: transparent;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
    height: 40px;
    padding: 10px;
    text-align: center;
  }

  button {
    outline: none;
    border: none;
    background-image: none;
    background-color: transparent;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
    height: 40px;
    padding: 10px;
    text-align: center;
  }

  textarea {
    border: none;
    overflow: auto;
    outline: none;

    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;

    resize: none;
  }

  a:link {
    text-decoration: none;
  }

  a:visited {
    text-decoration: none;
  }

  a:hover {
    text-decoration: none;
  }

  a:active {
    text-decoration: none;
  }

`

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>
);
