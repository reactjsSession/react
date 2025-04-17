import React from 'react';
import { Outlet } from 'react-router-dom';

function LoginLayout(props) {
    return (
        <div className="login-layout">
         <Outlet/>    
        </div>
    );
}

export default LoginLayout;