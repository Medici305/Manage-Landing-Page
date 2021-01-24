import React, { useState } from "react";
import styled from "styled-components";
import Logo from "../images/logo.svg";
import { Button2 } from "../Styles";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Nav = () => {
    const [active, setActive] = useState(false);
    console.log(active);
    return (
        <StyleNav>
            <Link to="/">
                <img src={Logo} alt="" />
            </Link>
            <nav>
                <li>
                    <Link to="/pricing">Pricing</Link>
                </li>
                <li>
                    <Link to="/product">Product</Link>
                </li>
                <li>
                    <Link to="/about-us">About Us</Link>
                </li>
                <li>
                    <Link to="/faq">FAQ</Link>
                </li>
                <li>
                    <Link to="/contact-us">Contact Us</Link>
                </li>
            </nav>
            <ButtonNav>Get Started</ButtonNav>
            <FontAwesomeIcon onClick={() => setActive(!active)} icon={faBars} />
            <Menu active={active}>
                <Icon>
                    <FontAwesomeIcon onClick={() => setActive(!active)} active={active} icon={faTimes} />
                </Icon>
                <DropDown onClick={() => setActive(!active)}>
                    <li>
                        <Link to="/pricing">Pricing</Link>
                    </li>
                    <li>
                        <Link to="/product">Product</Link>
                    </li>
                    <li>
                        <Link to="/about-us">About Us</Link>
                    </li>
                    <li>
                        <Link to="/faq">FAQ</Link>
                    </li>
                    <li>
                        <Link to="/contact-us">Contact Us</Link>
                    </li>
                </DropDown>
            </Menu>
        </StyleNav>
    );
};

const StyleNav = styled.div`
  min-height: 15vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #fff;
  padding: 0rem 10rem;
  background: #fff;
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.1);
  @media (max-width: 1420px) {
    flex-direction: column;
    justify-content: space-around;
    padding: 0rem 4rem;
  }
  @media (max-width: 500px) {
    flex-direction: row;
    justify-content: space-between;
    min-height: 10vh;
    padding: 0rem 2rem;
  }
  svg {
    display: none;
    @media (max-width: 500px) {
      display: flex;
      font-size: 1.5rem;
      color: hsl(228, 39%, 23%);
      cursor: pointer;
    }
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
    @media (max-width: 500px) {
      display: none;
    }
  }
`;

const ButtonNav = styled(Button2)`
  @media (max-width: 1420px) {
    display: none;
  }
`;

const Menu = styled.div`
  display: none;
  @media (max-width: 500px) {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 80%;
    background: #bbbaba;
    z-index: 5;
    transform: ${({ active }) =>
        active ? "translateX(0%)" : "translateX(-100%)"};
    opacity: ${({ active }) => (active ? "1" : "0")}; 
    transition: all .4s ease-in-out;
    display: flex;
    flex-direction: column;
    box-shadow: 2px 2px 50px rgb(110, 110, 110);
    padding: 0rem 2rem;
    svg {
        margin: 1rem 0rem;
        font-size: 2.5rem;
        transition: all .3 ease;
        opacity: ${({ active }) => (active ? "1" : "0")}; 
        &:hover {
                color: #fff;
        }
    }
    }
`;

const DropDown = styled.div`
    @media (max-width: 500px) {
        font-size: 2rem;
        li {
            padding: 2rem 0rem;
            font-weight: 500;
            transition: all .3 ease;
            a {
                    &:hover {
                    color: #fff;
                }
            }
        }
    }
`;

const Icon = styled.div`
    @media (max-width:500px) {
        display: flex;
        justify-content: flex-end;
    }
`;

export default Nav;
