import React from 'react';
import Banner from './Banner';
import HowItWorks from './HowItWorks';
import OurService from './OurService';
import Brands from './Brands';
import Extrasection from './Extrasection';
import Marchent from './Marchent';
import Reviews from './Reviews';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <HowItWorks></HowItWorks>
           <OurService></OurService>
           {/* <Brands></Brands> */}
           <Extrasection></Extrasection>
           <Marchent></Marchent>
           <Reviews></Reviews>
           

        
        </div>
    );
};

export default Home;