import React from "react-dom";
import styled from "styled-components";
import Logo from "../images/logo2.svg";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faPinterest } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <StyleFooter>
      <Container1>
        <p>Copyright 2021. All Rights Reserved</p>
        <img src={Logo} alt="logo" />
        <div className="socials">
          <FontAwesomeIcon icon={faFacebook} />
          <FontAwesomeIcon icon={faYoutube} />
          <FontAwesomeIcon icon={faTwitter} />
          <FontAwesomeIcon icon={faPinterest} />
          <FontAwesomeIcon icon={faInstagram} />
        </div>
      </Container1>
      <MidBox>
        <NavLink>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/pricing">Pricing</Link>
          </li>
          <li>
            <Link to="/product">Product</Link>
          </li>
          <li>
            <Link to="/about-us">About Us</Link>
          </li>
        </NavLink>
        <NavLink>
          <li>
            <Link to="/faq">FAQ</Link>
          </li>
          <li>
            <Link to="/contact-us">Contact Us</Link>
          </li>
          <li>
            <Link to="">Privacy Policy</Link>
          </li>
        </NavLink>
      </MidBox>
      <Container2>
        <div className="search-bar">
          <input type="text" placeholder="Enter Email" />
          <button>Go</button>
        </div>
        <p>Copyright 2021. All Rights Reserved</p>
      </Container2>
    </StyleFooter>
  );
};

const StyleFooter = styled.div`
  min-height: 30vh;
  display: flex;
  background: hsl(233, 12%, 13%);
  padding: 2rem 10rem;
  @media (max-width: 1420px) {
    min-height: 70vh;
    flex-direction: column-reverse;
    padding: 1rem 5rem;
  }
`;

const Container1 = styled.div`
  flex: 0.2;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  svg {
    color: #fff;
    font-size: 1.5rem;
    margin: 0rem 0.5rem;
    cursor: pointer;
    &:hover {
      color: hsl(12, 88%, 59%);
    }
  }
  p {
    display: none;
  }
  @media (max-width: 1420px) {
    flex-direction: column-reverse;
    justify-content: space-between;
    flex: 0.3;
    p {
      display: flex;
      font-size: 0.6rem;
      padding: 0rem;
    }
    svg {
      font-size: 1.7rem;
      margin: 0rem 1rem;
    }
  }
`;

const Container2 = styled.div`
  flex: 0.3;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-end;
  input {
    border: none;
    background: #fff;
    border: 1px solid #fff;
    border-radius: 2rem;
    padding: 0.7rem 1rem;
    font-size: 1rem;
    outline: none;
  }
  button {
    margin-left: 0.5rem;
    border: none;
    background: hsl(12, 88%, 59%);
    color: #fff;
    border: 1px solid hsl(12, 88%, 59%);
    border-radius: 1.5rem;
    padding: 0.8rem 1.2rem;
    outline: none;
    cursor: pointer;
    &:hover {
      background: #f08165;
    }
  }
  p {
    font-size: 0.9rem;
  }
  @media (max-width: 1420px) {
    align-items: center;
    p {
      display: none;
    }
  }
`;

const MidBox = styled.div`
  flex: 0.5;
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media (max-width: 1420px) {
    flex: 0.4;
  }
`;

const NavLink = styled.div`
  li {
    padding: 0.5rem 0rem;
  }
  a {
    color: #fff;
    cursor: pointer;
    margin: 0.5rem 0rem;
    &:hover {
      color: hsl(12, 88%, 59%);
    }
  }
`;

export default Footer;
