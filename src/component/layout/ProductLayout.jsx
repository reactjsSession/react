import React from 'react';
import Product from '../product';
import { Outlet } from 'react-router-dom';

function ProductLayout() {
    return (
        <>
          <Outlet/>  
        </>
    );
}

export default ProductLayout;