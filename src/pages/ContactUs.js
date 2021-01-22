import React from 'react';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { motion } from 'framer-motion';
import { PageTransition } from '../Animation';
import Typing from 'react-typing-animation';

const ContactUs = () => {
    return (
        <FormStyled exit='exit' variants={PageTransition} initial='hidden' animate='show'>
            <FormBox noValidate autoComplete="off">
                <h1>Ask A Question</h1>
                <Typing speed={-1}>
                    <Typing.Delay ms={100} />
                    <p>For pre-sale and general questions, please use the form below</p>
                </Typing>
                <StyleInput>
                    <TextField style={styleInput} id="name" label="Name" variant="outlined" />
                    <TextField style={styleInput2} id="email" label="Email" variant="outlined" />
                </StyleInput>
                <TextArea
                    id="text-area"
                    label="Enter Your Message"
                    multiline
                    variant="outlined"
                />
                <Button style={styleButton} variant="contained">
                    Submit
                </Button>
            </FormBox>
        </FormStyled>
    )
}

const FormStyled = styled(motion.div)`
    min-height: 90vh;
    display: flex;
    flex-direction: column;
    padding: 4rem 10rem;
    align-items: center;
    p {
        margin-bottom: 2rem;
    }
`;

const FormBox = styled.div`
    padding: 2rem;
    text-align: center;
    width: 70%;
    display: flex;
    flex-direction: column;
    border: 3px solid  #e7e8ec;
    border-radius: 1rem;
    box-shadow: 0 .5rem 1rem rgba(0,0,0,.15);
`;

const StyleInput = styled.div`
    display: flex;
    justify-content: space-between;
`;

const TextArea = styled(TextField)`
    margin: 10rem;
`;

const styleInput = {
    marginRight: '.5rem',
    marginBottom: '2rem',
    width: '100%'
}

const styleInput2 = {
    marginLeft: '.5rem',
    marginBottom: '2rem',
    width: '100%'
}

const styleButton = {
    background: 'hsl(12, 88%, 59%)',
    color: '#fff',
    margin: '2rem 0rem',
}

export default ContactUs;