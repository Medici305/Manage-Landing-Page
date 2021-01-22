import React from 'react';
//import styled from 'styled-components';
import { motion } from 'framer-motion';
import { PageTransition } from '../Animation';


const AboutUs = () => {
    return (
        <motion.div exit='exit' variants={PageTransition} initial='hidden' animate='show'>
            <h1>About Us</h1>
        </motion.div>
    )
}

export default AboutUs;