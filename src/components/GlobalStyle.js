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
    
    h3 {
        font-size: 2.7rem;
        color: hsl(228, 39%, 23%);
        width: 80%;
    }
`;


export default GlobalStyle;