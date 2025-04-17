import React from 'react';
import { Navbar } from '../navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../errorbound/Footer';
import Breadcrumb from '../Breadcrumb';

function RootLayout(props) {
    const height = {

    }
    return (
        <div className='container'>
         <Navbar/>
         <div  className='mx-auto max-w-10xl min-height'> 
            <div className='mx-auto max-w-10xl px-4 sm:px-6'> 
         <Breadcrumb/>
         </div>
         <Outlet/>   
         </div>
         <Footer/>
        </div>
    );
}

export default RootLayout;