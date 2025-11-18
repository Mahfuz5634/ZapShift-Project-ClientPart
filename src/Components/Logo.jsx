import React from 'react';
import logo from '../assets/logo.png';
import { Link } from 'react-router';

const Logo = () => {
    return (
        <Link to="/">
            <div>
                <div className='flex items-end'>
                    <img className='lg:h-[45px] -ml-4.5 lg:-ml-2.5' src={logo} alt="Logo" />
                    <h3 className='text-2xl font-bold -ml-4.5 lg:-ml-2.5'>ZapShift</h3>
                </div>
            </div>
        </Link>
    );
};

export default Logo;
