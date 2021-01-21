import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: 'Be Vietnam', sans-serif;
    }

    p {
        color: hsl(227, 12%, 61%);
        font-size: 1.1rem;
        padding: 1rem 0rem;
        line-height: 2rem;
    }

    h1 {
        color: hsl(228, 39%, 23%);
        font-size: 3rem;
    }

    h3 {
        font-size: 2.7rem;
        color: hsl(228, 39%, 23%);
        width: 80%;
    }
    a {
            text-decoration: none;
            color: hsl(228, 39%, 23%);
            &:hover {
                color: hsl(227, 12%, 61%);
            }
        }

    li {
        list-style: none;
    }
`;


export default GlobalStyle;