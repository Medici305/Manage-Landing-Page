import React from 'react';
import Advert from '../components/Advert';
import BetterProduct from '../components/BetterProduct';
import Difference from '../components/Difference';
import Testimonials from '../components/Testimonials';

const Home = () => {
    return (
        <div>
            <BetterProduct />
            <Difference />
            <Testimonials />
            <Advert />
        </div>
    )
}

export default Home;