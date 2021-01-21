import styled from 'styled-components';

export const Box = styled.div`
    flex: 1;
    display: flex;
    color: #fff;

    input {
        border: none;
        background: #fff;
        border: 1px solid #fff;
        border-radius: 2rem;
        padding: .7rem 1rem;
        font-size: 1rem;
        outline: none;
    }
    button {
        margin-left: .5rem;
        border: none;
        background: hsl(12, 88%, 59%);
        color: #fff;
        border: 1px solid hsl(12, 88%, 59%);
        border-radius: 1.5rem;
        padding: .7rem 1.2rem;
        cursor: pointer;
        &:hover {
            background: #f08165;
        }
    }
    p {
        color: hsl(227, 12%, 61%);
        font-size: .8rem;
        text-align: right;
    }
    svg {
        margin: 0rem .5rem;
        cursor: pointer;
        &:hover {
            color: hsl(12, 88%, 59%);
        }
    }
`;

export const Button = styled.div`
        padding: .7rem 1.7rem;
        border-radius: 3rem;
        color: hsl(12, 88%, 59%);
        background: #fff;
        font-weight: 600;
        border: 1px solid #fff;
        cursor: pointer;
        text-align: center;
        &:hover {
            border: 1px solid #fff;
            background: #fff;
            color: #f08165;
        }
`;

export const Button2 = styled(Button)`
    background: hsl(12, 88%, 59%);
    border: 2px solid hsl(12, 88%, 59%);
    color: #fff;
    &:hover {
        background: #f08165;
        border: 2px solid #f08165;
        color: #fff;
    }
`;

export const Title = styled.p`
color: hsl(228, 39%, 23%);
padding-bottom: 0rem;
padding-top: .3zrem;
font-weight: 700;
`;

export const Line = styled.div`
height: .2rem;
margin: 1rem 0rem;
width: 100%;
background: hsl(228, 39%, 23%);

`;