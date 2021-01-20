import React from 'react';
import styled from 'styled-components';
import { Button2, Title } from '../Styles';
import Ali from '../images/avatar-ali.png';
import Anisha from '../images/avatar-anisha.png';
import Richard from '../images/avatar-richard.png';

const Testimonials = () => {
    return (
        <Testimonial>
            <h3>What they've said</h3>
            <Cards>
                <Card>
                    <img src={Anisha} alt="Anisha" />
                    <Title>Anisha Li</Title>
                    <p>
                        “Manage has supercharged our team’s workflow.
                        The ability to maintain visibility on larger milestones
                        at all times keeps everyone motivated.”
                </p>
                </Card>
                <Card>
                    <img src={Ali} alt="Ali" />
                    <Title>Ali Bravo</Title>
                    <p>
                        “We have been able to cancel so many other subscriptions
                        since using Manage. There is no more cross-channel confusion
                        and everyone is much more focused.”
                </p>
                </Card>
                <Card>
                    <img src={Richard} alt="Richard" />
                    <Title>Richard Watts</Title>
                    <p>
                        “Manage allows us to provide structure and process.
                        It keeps us organized and focused. I can’t stop recommending
                        them to everyone I talk to!”
                </p>
                </Card>
            </Cards>
            <Button2>Get Started</Button2>
        </Testimonial>
    )
}

const Testimonial = styled.div`
    min-height: 90vh;
    background: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    margin-bottom: 10rem;
    h3 {
        width: 100%;
        text-align: center;
    }
`;

const Cards = styled.div`
    display: flex;
`;

const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    p {
        text-align: center;
    }
`;

export default Testimonials;