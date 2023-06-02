import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    margin:0;
    padding: 0;
    outline:0;
  }

button{
    cursor: pointer;
    border: none;
    }

ul, ol, li{
    list-style: none;
  }

:root{
    --gray-1: #F9FAFB;
    --gray-2: #E5E7EB;
    --gray-3: #D1D5DB;
    --gray-4: #6B7280;
    --gray-5: #1F2937;
    --gray-6: rgba(0, 0, 0, 0.4);
    --color-primary: #22C55E;
    --color-primary-50: #16A34A;
    --color-secondary: #facc15;
    --white: #FFFFFF;


    --radius-4: 4px;
    --radius-6: 6px;
    --radius-8: 8px;
    --radius-10: 10px;
    --radius-20: 20px;

    --rem-08: 1.2rem;
    --rem-09: 1.5rem;
    --rem-11: 1.7rem;
    --rem-16: 2.0rem;

    font-size: 60%;
}

@media (min-width: 700px){
    :root{
        font-size: 62.5%;
    }
}

body, html {
    width: 100vw;
    height: 100vh;
}

body, input, button {
    font-size: 1.6rem;
}

body {
    font-family: 'Inter', sans-serif;
    background-color: --gray-1 ;
}

h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
}

a{
    color: #000000;
    text-decoration: none;
  }

`;
