import React from 'react-dom';
import styled from 'styled-components';
import Logo from '../images/logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faPinterest } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <StyleFooter>
            <Box>
                <InnerBox>
                    <img src={Logo} alt="logo" />
                    <div className="socials">
                        <FontAwesomeIcon icon={faFacebook} />
                        <FontAwesomeIcon icon={faYoutube} />
                        <FontAwesomeIcon icon={faTwitter} />
                        <FontAwesomeIcon icon={faPinterest} />
                        <FontAwesomeIcon icon={faInstagram} />
                    </div>
                </InnerBox>
                <InnerBox>
                    <li>Home</li>
                    <li>Pricing</li>
                    <li>Products</li>
                    <li>About Us</li>
                </InnerBox>
            </Box>
            <Box>
                <InnerBox>
                    <li>Careers</li>
                    <li>Community</li>
                    <li>Privacy Policy</li>
                </InnerBox>
                <InnerBox>
                    <div className="search-bar">
                        <input type="text" placeholder='Enter Email' />
                        <button>Go</button>
                    </div>
                    <p>Copyright 2021. All Rights Reserved</p>
                </InnerBox>
            </Box>
        </StyleFooter>
    )
}

const StyleFooter = styled.div`
    min-height: 30vh;
    display: flex;
    background: hsl(233, 12%, 13%);
    padding: 0rem 10rem;
`;

const Box = styled.div`
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

const InnerBox = styled.div`
    flex: 1;
    padding: 2.5rem 0rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    align-items: center;
    li {
        list-style: none;
        text-align: center;
        cursor: pointer;
        &:hover {
            color: hsl(12, 88%, 59%);
        }
    }
`;

export default Footer;