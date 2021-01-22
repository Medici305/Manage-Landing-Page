import React from 'react';
import { motion } from 'framer-motion';
import { PageTransition } from '../Animation';
//import styled from 'styled-components';

const Product = () => {
    return (
        <motion.div exit='exit' variants={PageTransition} initial='hidden' animate='show'>
            <h1>Product</h1>
        </motion.div>
    )
}

export default Product;