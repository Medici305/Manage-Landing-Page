import React from 'react-dom';
import styled from 'styled-components';
import Logo from '../images/logo2.svg';
import { Box } from '../Styles';
import { Link } from 'react-router-dom';
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
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/pricing'>Pricing</Link>
                    </li>
                    <li>
                        <Link to='/product'>Product</Link>
                    </li>
                    <li>
                        <Link to='/about-us'>About Us</Link>
                    </li>
                </InnerBox>
            </Box>
            <Box>
                <InnerBox>
                    <Link to='/faq'>FAQ</Link>
                    <Link to='/contact-us'>Contact Us</Link>
                    <Link to=''>Privacy Policy</Link>
                </InnerBox>
                <InnerBox2>
                    <div className="search-bar">
                        <input type="text" placeholder='Enter Email' />
                        <button>Go</button>
                    </div>
                    <p>Copyright 2021. All Rights Reserved</p>
                </InnerBox2>
            </Box>
        </StyleFooter>
    )
}

const StyleFooter = styled.div`
    min-height: 30vh;
    display: flex;
    background: hsl(233, 12%, 13%);
    padding: 0rem 10rem;
    @media (max-width: 1420px) {
        padding: 0rem 4rem;
    }
`;

const InnerBox = styled.div`
    flex: 1;
    padding: 2.5rem 0rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    a {
        color: #fff;
        cursor: pointer;
        &:hover {
            color: hsl(12, 88%, 59%);
        }
    }
`;

const InnerBox2 = styled(InnerBox)`
    align-items: flex-end;
`;

export default Footer;