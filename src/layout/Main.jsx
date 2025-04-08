import React from 'react';
import Navbar from '../nav/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../footer/Footer';

const Main = () => {
    return (
        <div className='w-full bg-black text-white'>
            <div className="fixed top-0 left-0 w-full z-50 ">
            <Navbar></Navbar>

            </div>
            <div className='container mx-auto min-h-screen pt-40'>
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;