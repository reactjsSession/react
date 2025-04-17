import React from 'react';
import myImage from '../assets/banner-img.jpg'; // Adjust the path accordingly
import Product from './product';

function Home(props) {
     
    return (
        <>
         <img src={myImage}  alt="Banner images"/>
         <Product product="phone"/>
        </>
    );
}

export default Home;