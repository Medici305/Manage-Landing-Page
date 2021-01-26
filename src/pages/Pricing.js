import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { PageTransition } from "../Animation";

const Pricing = () => {
  return (
    <Price
      exit="exit"
      variants={PageTransition}
      initial="hidden"
      animate="show"
    >
      <h3>Pricing</h3>
      <p>
        Quickly build an effective pricing table for your potential customers
        with this Bootstrap example. It's built with default Bootstrap
        components and utilities with little customization.
      </p>
      <Cards>
        <Card>
          <h4>Free</h4>
          <h5>
            $0 <span>/mo</span>
          </h5>
          <p>10 Users Included</p>
          <p>2 GB of Storage</p>
          <p>Email Support</p>
          <p>Help Center Access</p>
        </Card>
        <Card>
          <h4>Pro</h4>
          <h5>
            $15 <span>/mo</span>
          </h5>
          <p>20 Users Included</p>
          <p>10 GB of Storage</p>
          <p>Priority Email Support</p>
          <p>Help Center Access</p>
        </Card>
        <Card>
          <h4>Enterprise</h4>
          <h5>
            $29 <span>/mo</span>
          </h5>
          <p>30 Users Included</p>
          <p>15 GB of Storage</p>
          <p>Phone & Email Support</p>
          <p>Help Center Access</p>
        </Card>
      </Cards>
    </Price>
  );
};

const Price = styled(motion.div)`
  min-height: 80vh;
  padding: 4rem 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 5rem;
  h3 {
    width: 100%;
    text-align: center;
  }
  p {
    width: 70%;
    text-align: center;
  }
  @media (max-width: 500px) {
    padding: 2rem 2rem;
    margin-bottom: 0rem;
    p {
      width: 100%;
    }
  }
`;

const Cards = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin: 4rem 0rem 2rem 0rem;
  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

const Card = styled.div`
  text-align: center;
  flex: 0.25;
  border-bottom-left-radius: 1rem;
  border-bottom-right-radius: 1rem;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  padding-bottom: 3rem;
  transition: all 0.3s ease-in-out;
  &:hover {
    box-shadow: 0 0 10px 5px #a2a2b6;
  }
  h4 {
    padding: 2rem 0rem;
    font-size: 1.5rem;
    font-weight: 700;
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
    background: hsl(12, 88%, 59%);
    color: #fff;
  }
  h5 {
    padding: 2rem;
    font-size: 3.5rem;
    span {
      color: hsl(0, 0%, 38.43137254901961%);
    }
  }
  p {
    padding: 1rem 0rem;
    text-align: center;
    width: 100%;
  }
  @media (max-width: 500px) {
    margin-bottom: 2rem;
  }
`;

export default Pricing;
