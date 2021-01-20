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
                    <Link to='/careers'>Careers</Link>
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
    nav {
        list-style: none;
        display: flex;
        li {
            margin: 0rem 1rem;
            font-weight: 700;
            cursor: pointer;
        }
        a {
            text-decoration: none;
            color: hsl(228, 39%, 23%);
            &:hover {
                color: hsl(227, 12%, 61%);
            }
        }
    }
`;

export default Nav;