import React from 'react';
import styled from 'styled-components';
import illustration from '../images/illustration-intro.svg';
import { titleAnim, fade, photoAnim } from '../Animation';
import { motion } from 'framer-motion';

const BetterProduct = () => {
    return (
        <Product>
            <Container>
                <Hide>
                    <motion.h2 variants={titleAnim}>Bring everyone</motion.h2>
                </Hide>
                <Hide>
                    <motion.h2 variants={titleAnim}>together to build</motion.h2>
                </Hide>
                <Hide>
                    <motion.h2 variants={titleAnim}>better products.</motion.h2>
                </Hide>
                <motion.p variants={fade}>
                    Manage makes it simple for software teams
                    to plan day-to-day tasks while keeping the
                    larger team goals in view.
                </motion.p>
                <Button3 variants={fade}>
                    Get Started
                </Button3>
            </Container>
            <Container2>
                <motion.img variants={photoAnim} src={illustration} alt="diagram" />
            </Container2>
        </Product>
    )
}

const Product = styled.div`
    height: 80vh;
    padding: 4rem 10rem;
    display: flex;
    @media (max-width: 1420px) {
        flex-direction: column;
        height: 140vh;
        padding: 1rem 5rem;
    }
    @media (max-width: 500px) { 
        flex-direction: column-reverse;
        padding: 1rem 2rem;
        height: 110vh;
        //border: 2px solid black;
        margin-bottom: 2rem;
    }
`;

const Hide = styled.div`
    width: 100%;
    overflow: hidden;
    height: 100%;
`;

const Container = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    @media (max-width: 1420px) {
        justify-content: center;
        align-items: center;
        text-align: center;
        margin: 1rem 0rem;
    }
    @media (max-width: 500px) { 
        flex: .6;
        margin: 0rem;
        //border: 2px solid blue;
    }
    p {
        width: 65%;
        @media (max-width: 500px) { 
            width: 90%;
            text-align: justify;
            font-size: 1rem;
        }
    }
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        @media (max-width: 1420px) {
            width: 50%;
            height: auto;
            object-fit: cover;
    
        }
    }
        
    h2 {
        font-size: 3.7rem;
        line-height: 4rem;
        color: hsl(228, 39%, 23%);
        width: 90%;
        @media (max-width: 1420px) {
            width: 100%;
        }
        @media (max-width: 500px) { 
            font-size: 3rem;
        }
    }
`;

const Container2 = styled(Container)`
    @media (max-width: 500px) { 
        //border: 2px solid red;
        flex: .4;
    }
`;

const Button3 = styled(motion.button)`
    margin: 1rem 0rem;
    padding: 1rem 2rem;
    font-size: 1rem;
    border-radius: 3rem;
    background: hsl(12, 88%, 59%);
    color: #fff;
    font-weight: 600;
    border: 1px solid hsl(12, 88%, 59%);
    cursor: pointer;
    text-align: center;
    &:hover {
        background: #f08165;
        border: 2px solid #f08165;
        color: #fff;
    }
`;


export default BetterProduct;
