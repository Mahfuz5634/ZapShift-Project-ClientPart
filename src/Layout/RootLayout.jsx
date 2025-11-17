import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Pages/Navbar';
import Footer from '../Pages/Footer';

const RootLayout = () => {
    return (
       <div className='bg-[#eaeced]'>
         <div className='container mx-auto pt-5 '>
            <Navbar></Navbar>
            <div className='min-h-screen flex flex-1'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
       </div>
    );
};

export default RootLayout;