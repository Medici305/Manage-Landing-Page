import React from 'react';
import Advert from '../components/Advert';
import BetterProduct from '../components/BetterProduct';
import Difference from '../components/Difference';

const Home = () => {
    return (
        <div>
            <BetterProduct />
            <Difference />
            <Advert />
        </div>
    )
}

export default Home;