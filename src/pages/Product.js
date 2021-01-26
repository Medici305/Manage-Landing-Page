import React from "react";
import { motion } from "framer-motion";
import { PageTransition } from "../Animation";
import styled from 'styled-components';
import salesForce from '../images/salesforce-crm.svg';
import hubSpot from '../images/hubspot-sales-hub.svg';
import activeCampaign from '../images/activecampaign.svg';
import freshWorks from '../images/freshworks-crm.svg';
import zoho from '../images/zoho-crm.svg';
import pipeDrive from '../images/pipedrive.svg';

const Product = () => {
  return (
    <StyleProduct
      exit="exit"
      variants={PageTransition}
      initial="hidden"
      animate="show"
    >
      <h1>What Is CRM Software</h1>
      <p>
        CRM software (customer relationship management software),
        sometimes referred to as sales force automation (SFA) software,
        helps businesses track and manage customer interactions in a
        single system of record. A CRM will record interactions between
        a business, its prospects, and its existing customers.
      </p>
      <Container>
        <Item>
          <Head>
            <img src={salesForce} alt='salesForce' />
            <Name>Salesforce CRM</Name>
          </Head>
          <p>
            Salesforce helps businesses of all sizes accelerate sales, automate tasks
            and make smarter decisions so you can grow your business faster.
          </p>
        </Item>
        <Item>
          <Head>
            <img src={hubSpot} alt='hubSpot' />
            <Name>HubSpot Sales Hub</Name>
          </Head>
          <p>
            Supercharge your sales process with Sales Hub,
            a powerful and easy-to-use sales CRM that includes sales
            engagement tools, configure-price-quote (CPQ) functionality,
            and robust sales analytics for growing teams.
          </p>
        </Item>
        <Item>
          <Head>
            <img src={activeCampaign} alt='activeCampaign' />
            <Name>ActiveCampaign</Name>
          </Head>
          <p>
            ActiveCampaign's category-defining Customer Experience
            Automation (CXA) Platform helps over 130,000 businesses in
            170 countries meaningfully engage with their customers.
          </p>
        </Item>
        <Item>
          <Head>
            <img src={freshWorks} alt='freshWorks' />
            <Name>Freshworks CRM</Name>
          </Head>
          <p>
            Built on the next-generation customer engagement platform,
            Freshworks CRM helps break internal silos and deliver
            personalized experiences across marketing and sales.
          </p>
        </Item>
        <Item>
          <Head>
            <img src={zoho} alt='Zoho' />
            <Name>Zoho CRM</Name>
          </Head>
          <p>
            Zoho CRM is a cloud-based, integrated customer relationship
            management platform that caters to the needs of businesses
            and industries of all sizes and types.
          </p>
        </Item>
        <Item>
          <Head>
            <img src={pipeDrive} alt='pipeDrive' />
            <Name>Pipedrive</Name>
          </Head>
          <p>
            Pipedrive is a sales management tool for small teams
            with big ambitions. It visualises your sales pipeline
            and helps to make sure important activities and
            conversations won’t get dropped.
          </p>
        </Item>
      </Container>
    </StyleProduct>
  );
};

const StyleProduct = styled(motion.div)`
    padding: 4rem 10rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    p {
      width: 70%;
      text-align: center;
    }
  @media (max-width: 1420px) {
    padding: 2rem 5rem;
    h1 {
      text-align: center;
    }
  }
  @media (max-width: 500px) {
    padding: 2rem;
    p {
      width: 100%;
    }
  }
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 2rem 0rem;
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom-left-radius: 1rem;
  border-bottom-right-radius: 1rem;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  width: 30%;
  margin: .5rem;
  p {
    width: 100%;
    padding: 1rem;
  }
  @media (max-width: 1420px) {
    width: 50%;
  }
  @media (max-width: 500px) {
    width: 80%;
    margin: 1rem;
  }
`;

const Head = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0rem 2rem;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
  background:  hsl(12, 88%, 59%);
  align-items: center;
  img {
    width: 15%;
    height: auto;
    object-fit: cover;
    border-radius: 50%;
    padding: 1rem 0rem;
  }
`;

const Name = styled.h2`
  color: #fff;
`;

export default Product;
