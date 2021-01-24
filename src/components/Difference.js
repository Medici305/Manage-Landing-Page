import React from "react";
import styled from "styled-components";
import { Title } from "../Styles";

const Difference = () => {
    return (
        <Different>
            <Box>
                <h3>What's different about Manage?</h3>
                <Text>
                    Manage provides all the functionality your team needs without the
                    complexity. Our software is tailor-made for modern digital product
                    teams.
                </Text>
            </Box>
            <Box2>
                <Card>
                    <Number>
                        <button>01</button>
                        <Title>Track company-wide progress </Title>
                    </Number>
                    <Description>
                        <p>
                            See how your day-to-day tasks fit into the wider vision. Go from
                            tracking progress at the milestone level all the way done to the
                            smallest of details. Never lose sight of the bigger picture again.
                        </p>
                    </Description>
                </Card>
                <Card>
                    <Number>
                        <button>02</button>
                        <Title>Advanced built-in reports </Title>
                    </Number>
                    <Description>
                        <p>
                            Set internal delivery estimates and track progress toward company
                            goals. Our customisable dashboard helps you build out the reports
                            you need to keep key stakeholders informed.
                        </p>
                    </Description>
                </Card>
                <Card>
                    <Number>
                        <button>03</button>
                        <Title>Everything you need in one place </Title>
                    </Number>
                    <Description>
                        <p>
                            Stop jumping from one service to another to communicate, store
                            files, track tasks and share documents. Manage offers an
                            all-in-one team productivity solution.
                        </p>
                    </Description>
                </Card>
            </Box2>
        </Different>
    );
};

const Different = styled.div`
  min-height: 110vh;
  display: flex;
  padding: 4rem 10rem;
  @media (max-width: 1420px) {
    min-height: 120vh;
    padding: 0rem 5rem;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
  }
  @media (max-width: 500px) {
    padding: 0rem;
    //border: 2px solid black;
  }
`;

const Box = styled.div`
  flex: 1;
  margin-top: 1rem;
  @media (max-width: 1420px) {
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    h3,
    p {
      width: 100%;
    }
  }
  @media (max-width: 500px) {
    padding: 0rem 2rem;
  }
`;

const Box2 = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 0rem;
  padding: 0rem;
  @media (max-width: 500px) {
    margin-top: 2rem;
  }
`;

const Text = styled.p`
  width: 65%;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
`;

const Description = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    p {
        width: 83%;
        @media (max-width: 500px) {
            width: auto;
        }
        padding: 1rem;
    }
`;

const Number = styled.div`
  display: flex;
  align-items: center;
  button {
    border: none;
    background: hsl(12, 88%, 59%);
    border: 2px solid hsl(12, 88%, 59%);
    color: #fff;
    border-radius: 2rem;
    padding: 0.5rem 1.5rem;
    font-weight: 700;
    margin-right: 2rem;
    @media (max-width: 1420px) {
      margin-top: 1rem;
    }
    @media (max-width: 500px) {
        margin-right: .3rem;
        margin-top: 0rem;
    }
  }
    @media (max-width: 500px) {
      background: #f5c2b6;
    }
`;

export default Difference;
