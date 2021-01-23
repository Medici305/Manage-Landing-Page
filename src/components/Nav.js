import React from 'react';
import styled from 'styled-components';
import Logo from '../images/logo.svg';
import { Button2 } from '../Styles';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <StyleNav>
            <Link to='/'>
                <img src={Logo} alt="" />
            </Link>
            <nav>
                <li>
                    <Link to='/pricing'>Pricing</Link>
                </li>
                <li>
                    <Link to='/product'>Product</Link>
                </li>
                <li>
                    <Link to='/about-us'>About Us</Link>
                </li>
                <li>
                    <Link to='/faq'>FAQ</Link>
                </li>
                <li>
                    <Link to='/contact-us'>Contact Us</Link>
                </li>
            </nav>
            <Button2>
                Get Started
            </Button2>
        </StyleNav>
    )
}

const StyleNav = styled.div`
    min-height: 15vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #fff;
    padding: 0rem 10rem;
    background: #fff;
    box-shadow: 0 1px 4px 0 rgba(0,0,0,.1);
    @media (max-width: 1420px) {
        padding: 0rem 4rem;
    }

    nav {
        list-style: none;
        display: flex;
        li {
            margin: 0rem 1rem;
            font-weight: 700;
            cursor: pointer;
            position: relative;
        }
    }
`;

export default Nav;