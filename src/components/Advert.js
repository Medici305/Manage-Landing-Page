import React from 'react';
import styled from 'styled-components';
import { Box, Button } from '../Styles';
import bg from '../images/bg-simplify-section-desktop.svg';

const Advert = () => {
    return (
        <StyledAvert>
            <Box2>
                <h2>Simplify how your team <br /> works today.</h2>
                <Button>
                    Get Started
                </Button>
            </Box2>
        </StyledAvert>
    )
}

const StyledAvert = styled.div`
    min-height: 30vh;
    background-image: url(${bg});
    background-repeat: none;
    background-size: cover;
    background-position: 160px 220px;
    background-color: hsl(12, 88%, 59%);
    padding: 0rem 10rem;
    display: flex;
    @media (max-width: 1420px) {
        padding: 0rem 4rem;
    }
`;

const Box2 = styled(Box)`
    align-items: center;
    justify-content: space-between;
    
    h2 {
        font-size: 2rem;
    }
`;

export default Advert;