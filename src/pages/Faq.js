import React from "react";
import styled from "styled-components";
import Toggle from "../components/Toggle";
import { motion } from "framer-motion";
import { PageTransition } from "../Animation";

const Faq = () => {
  return (
    <FaqStyle
      exit="exit"
      variants={PageTransition}
      initial="hidden"
      animate="show"
    >
      <h1>FAQ</h1>
      <Text>
        We want you to have the simplest, easiest buying experience possible.
        But we know you might have a few questions. Read on for details about
        purchasing, shipping, hecking order status, returns, and more. If you
        have any other questions you’d like answered please feel free to email
        us.
      </Text>

      <Toggle title="How Can I Get Assistance If I Need It?">
        <Question>
          <div className="answer">
            <p>
              Three Quick and Easy Solutions - We're Here to Help You! Call the
              Manage Customer Loyalty Team (MNG): MNG is here for you 24 hours a
              day - 365 days a year.1-800-927-7671 Email the MNG: MNG looks
              forward to helping you with your inquiry. We respond to email
              messages in the order that they are received, and we will respond
              to your email as quickly as possible. Email cs@Manage.com to send
              our Customer Loyalty Team an email. Connect With Live Help: Ask
              your question right now with a member of the Manage Customer
              Loyalty Team. Go Ahead - Start a Conversation With Now by visiting
              our Contact Page
            </p>
          </div>
        </Question>
      </Toggle>

      <Toggle title="Do You Accept International Credit Cards?">
        <Question>
          <div className="answer">
            <p>
              Currently Manage.com can accept international credit cards but we
              can only ship to an address within the United States and its
              territories. Please note that the credit card must be issued and
              contain a logo from either Visa, Mastercard, Discover, or American
              Express. On the checkout page, there will be a billing and
              shipping section.
            </p>
          </div>
        </Question>
      </Toggle>

      <Toggle title="How Do I Unsubscribe From Any Of Your Mailing Lists?">
        <Question>
          <div className="answer">
            <p>
              Call us at 1-800-927-7671 and one of our customer service
              representatives will take care of your request over the phone.
              Email us at cs@Manage.com and one of our customer service
              representatives will unsubscribe your email address.
            </p>
          </div>
        </Question>
      </Toggle>

      <Toggle title="Do You Offer Live Chat Support?">
        <Question>
          <div className="answer">
            <p>
              Yes we do! To get in contact with one of our live chat
              specialists, look for the Live Help button located on the top left
              hand of the page, to the right of our phone number. If you are
              unable to see this button, it saddens us to say that we do not
              have a specialist available to assist via chat.
            </p>
          </div>
        </Question>
      </Toggle>

      <Toggle title="How Do I Contact Customer Services?">
        <Question>
          <div className="answer">
            <p>
              Due to circumstances our phone lines are currently closed, however
              you’re welcome to contact us by email, you can reach out via our
              contact us page. Our Customer Service Team are working as hard to
              respond to everyone as quickly as possible, but we are currently
              experiencing a delay in getting back to everyone due to the rise
              in requests in response to the COVID-19 outbreak. Please be
              patient with us, and we’ll get back to you as soon as we can!
            </p>
          </div>
        </Question>
      </Toggle>
    </FaqStyle>
  );
};

const FaqStyle = styled(motion.div)`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 4rem 10rem;
  align-items: center;
`;

const Text = styled.p`
  width: 70%;
  text-align: center;
  margin-bottom: 3rem;
`;

const Question = styled.div`
  cursor: pointer;
`;

export default Faq;
