import React from 'react';
import Banner from './Banner';
import HowItWorks from './HowItWorks';
import OurService from './OurService';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <HowItWorks></HowItWorks>
           <OurService></OurService>
        </div>
    );
};

export default Home;