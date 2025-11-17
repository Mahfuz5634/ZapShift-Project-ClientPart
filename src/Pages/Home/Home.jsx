import React from 'react';
import Banner from './Banner';
import HowItWorks from './HowItWorks';
import OurService from './OurService';
import Brands from './Brands';
import Extrasection from './Extrasection';
import Marchent from './Marchent';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <HowItWorks></HowItWorks>
           <OurService></OurService>
           {/* <Brands></Brands> */}
           <Extrasection></Extrasection>
           <Marchent></Marchent>
           

        
        </div>
    );
};

export default Home;