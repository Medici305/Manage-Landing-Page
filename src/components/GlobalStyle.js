import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background: black;
        font-family: 'Be Vietnam', sans-serif;
    }

    p {
        color: hsl(227, 12%, 61%);
        font-size: 1.1rem;
        padding: 1rem 0rem;
        line-height: 2rem;
    }
`;


export default GlobalStyle;