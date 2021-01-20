import React from 'react';
import styled from 'styled-components';
import Logo from '../images/logo.svg';
import { Button2 } from '../Styles';

const Nav = () => {
    return (
        <StyleNav>
            <img src={Logo} alt="" />
            <nav>
                <li>Pricing</li>
                <li>Product</li>
                <li>About Us</li>
                <li>Careers</li>
                <li>Community</li>
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
            cursor: pointer;
            color: hsl(228, 39%, 23%);
            &:hover {
                color: hsl(227, 12%, 61%);
            }
        }
    }
`;

export default Nav;