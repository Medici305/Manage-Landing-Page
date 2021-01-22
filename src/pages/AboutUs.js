import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { PageTransition, fade } from '../Animation';
import { Link } from 'react-router-dom';


const AboutUs = () => {
    return (
        <StyledAbout exit='exit' variants={PageTransition} initial='hidden' animate='show'>
            <h1>About Us</h1>
            <Description>
                <p>
                    Manage.com provides current and 14 day cloud data and historical cloud and geo data via. REST cloud in JSON format.
            </p>
                <p>
                    The cloud will also provide time zone information, astronomy data and geo location data.
            </p>
                <p>
                    The cloud data is provided in partnership with several data providers, government and metreological agencies.
            </p>
                <p>
                    If you have any feedback/queries then please do <StyledLink to='/contact-us'>get in touch.</StyledLink>
                </p>
            </Description>

            <Address>
                <Title>Medici Ltd</Title> <br />
                3rd Floor, <br />
                87-91 Geovanni Street, <br />
                London, Brixton, <br />
                SW9 4NE <br />
                UK
            </Address>
        </StyledAbout >
    )
}

const StyledAbout = styled(motion.div)`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 4rem 10rem;
`

const Title = styled.span`
    font-weight: 700;
`;

const Description = styled.div`
    margin: 2rem 0rem;
    text-align: center;
`;

const Address = styled.div`
    border: 4px solid #afafaf;
    text-align: center;
    color: hsl(227, 12%, 61%);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
`;

const StyledLink = styled(Link)`
    color: #0101a4;
    &:hover {
        color: #3434ff;
    }
`

export default AboutUs;