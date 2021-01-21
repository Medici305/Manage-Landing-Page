import React from 'react';
import styled from 'styled-components';

const Pricing = () => {
    return (
        <Price>
            <h3>Pricing</h3>
            <p>
                Quickly build an effective pricing table for your
                potential customers with this Bootstrap example.
                It's built with default Bootstrap components and
                utilities with little customization.
            </p>
            <Cards>
                <Card>
                    <h4>Free</h4>
                    <h5>$0 <span>/mo</span></h5>
                    <p>10 Users Included</p>
                    <p>2 GB of Storage</p>
                    <p>Email Support</p>
                    <p>Help Center Access</p>
                </Card>
                <Card>
                    <h4>Pro</h4>
                    <h5>$15 <span>/mo</span></h5>
                    <p>20 Users Included</p>
                    <p>10 GB of Storage</p>
                    <p>Priority Email Support</p>
                    <p>Help Center Access</p>
                </Card>
                <Card>
                    <h4>Enterprise</h4>
                    <h5>$29 <span>/mo</span></h5>
                    <p>30 Users Included</p>
                    <p>15 GB of Storage</p>
                    <p>Phone & Email Support</p>
                    <p>Help Center Access</p>
                </Card>
            </Cards>
        </Price>
    )
}

const Price = styled.div`
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
`;

const Cards = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;
    margin-top: 2rem;
`;

const Card = styled.div`
    //border: 2px solid hsl(0, 0%, 98%);
    text-align: center;
    flex: 0.25;
    border-bottom-left-radius: 1rem;
    border-bottom-right-radius: 1rem;
    //background: hsl(228, 39%, 23%);
    //box-shadow: 0 10px 10px -5px; 
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
    box-shadow: 5px 5px 20px;
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
`;

export default Pricing;