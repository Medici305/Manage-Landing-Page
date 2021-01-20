import React from 'react';
import styled from 'styled-components';
import { Button2 } from '../Styles';
import illustration from '../images/illustration-intro.svg';

const BetterProduct = () => {
    return (
        <Product>
            <Container>
                <h2>Bring everyone together to build better products.</h2>
                <p>
                    Manage makes it simple for software teams
                    to plan day-to-day tasks while keeping the
                    larger team goals in view.
                </p>
                <Button3>
                    Get Started
                </Button3>
            </Container>
            <Container>
                <img src={illustration} alt="diagram" />
            </Container>
        </Product>
    )
}

const Product = styled.div`
    height: 80vh;
    background: #fff;
    padding: 4rem 10rem;
    display: flex;
`;

const Container = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    h2 {
        font-size: 3.7rem;
        padding: 1rem 0rem;
        line-height: 4rem;
        color: hsl(228, 39%, 23%);
        width: 90%;
    }
    p {
        width: 65%;
    }
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

const Button3 = styled(Button2)`
    margin: 1rem 0rem;
`;


export default BetterProduct;
