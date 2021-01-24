import React from 'react';
import styled from 'styled-components';
import { Title } from '../Styles';

const Difference = () => {
    return (
        <Different>
            <Box>
                <h3>What's different about Manage?</h3>
                <Text>
                    Manage provides all the functionality your
                    team needs without the complexity. Our software is
                    tailor-made for modern digital product teams.
                </Text>
            </Box>
            <Box2>
                <Card>
                    <Number>
                        <button>
                            01
                        </button>
                    </Number>
                    <div className="des">
                        <Title>Track company-wide progress </Title>
                        <p>
                            See how your day-to-day tasks fit into the wider vision.
                            Go from tracking progress at the milestone level all the way done to the smallest of details.
                            Never lose sight of the bigger picture again.
                        </p>
                    </div>
                </Card>
                <Card>
                    <Number>
                        <button>
                            02
                        </button>
                    </Number>
                    <div className="des">
                        <Title>Advanced built-in reports </Title>
                        <p>
                            Set internal delivery estimates and track progress toward company goals.
                            Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed.
                        </p>
                    </div>
                </Card>
                <Card>
                    <Number>
                        <button>
                            03
                        </button>
                    </Number>
                    <div className="des">
                        <Title>Everything you need in one place </Title>
                        <p>
                            Stop jumping from one service to another to communicate, store files, track tasks and share documents.
                            Manage offers an all-in-one team productivity solution.
                        </p>
                    </div>
                </Card>
            </Box2>
        </Different>
    )
}

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
`;

const Box = styled.div`
    flex: 1;
    margin-top: 1rem;
    @media (max-width: 1420px) { 
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        h3, p {
            width: 100%;
        }
    }
`;

const Box2 = styled(Box)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 0rem;
`;

const Text = styled.p`
    width: 65%;
`;

const Card = styled.div`
    display: flex;
`;

const Number = styled.div`
    button {
        border: none;
        background: hsl(12, 88%, 59%);
        border: 2px solid hsl(12, 88%, 59%);
        color: #fff;
        border-radius: 2rem;
        padding: .5rem 1.5rem;
        font-weight: 700;
        margin: 0rem 1rem;
        @media (max-width: 1420px) {
            margin-top: 1rem;
    }
}
`;

export default Difference;