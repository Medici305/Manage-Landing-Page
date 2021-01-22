import React, { useState } from 'react';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { motion } from 'framer-motion';
import { PageTransition } from '../Animation';
import firebase from '../Firebase';


const ContactUs = () => {
    // State
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    // const [nameError, setNameError] = useState({});
    // const [emailError, setEmailError] = useState({});
    // Function
    const submitHandler = (e) => {
        e.preventDefault();
        //const isValid = formValidation();
        firebase.firestore().collection('contacts').add({
            name: name,
            email: email,
            message: message
        })
            .then(() => {
                alert('Message has been submitted');
            })
            .catch((error) => {
                alert(error.message)
            })
        setName('');
        setEmail('');
        setMessage('');
    }

    // const formValidation = () => {
    //     const nameError = {};
    //     //const emailError = {};
    //     let isValid = true;

    //     if (!nameError.trim()) {
    //         nameError.blankName = 'Name can\'t be blank';
    //         isValid = false;
    //     }

    //     // if (!emailError) {
    //     //     emailError.blankName = 'Email can\'t be blank';
    //     //     isValid = false;
    //     // } else if (!/^[A-Z0-9._%+=]+@[a-z0-9.-]+\.[A-Z]{2,}$/i.test(emailError)) {
    //     //     emailError.atSymbol = 'Email Address is Invalid';
    //     // }

    //     setNameError(nameError);
    //     //setEmailError(emailError);
    //     return isValid;
    // }
    return (
        <FormStyled exit='exit' variants={PageTransition} initial='hidden' animate='show'>
            <FormBox noValidate autoComplete="off">
                <h1>Ask A Question</h1>
                <p>For pre-sale and general questions, please use the form below</p>
                <StyleInput>
                    <TextField onChange={(e) => setName(e.target.value)} value={name} style={styleInput} id="name" label="Name" variant="outlined" />
                    <TextField onChange={(e) => setEmail(e.target.value)} value={email} style={styleInput2} id="email" label="Email" variant="outlined" />
                </StyleInput>
                <TextArea
                    onChange={(e) => setMessage(e.target.value)}
                    value={message}
                    id="text-area"
                    label="Enter Your Message"
                    multiline
                    variant="outlined"
                />
                <Button onClick={submitHandler} type='submit' style={styleButton} variant="contained">
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