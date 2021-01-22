import React from 'react';
import styled from 'styled-components';
import { Button2 } from '../Styles';
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
            <Container>
                <motion.img variants={photoAnim} src={illustration} alt="diagram" />
            </Container>
        </Product>
    )
}

const Product = styled.div`
    height: 80vh;
    padding: 4rem 10rem;
    display: flex;
`;

const Hide = styled.div`
    overflow: hidden;
    width: 100%;
`;

const Container = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    p {
        width: 65%;
    }
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
        
    h2 {
        font-size: 3.7rem;
        line-height: 4rem;
        color: hsl(228, 39%, 23%);
        width: 90%;
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
