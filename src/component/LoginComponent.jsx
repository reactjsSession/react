import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../auth/AuthContext';
  
function LoginComponent() {
    const { login} = useAuth();
    
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
  
    
    const handleLogin = async (e) => {
        e.preventDefault();
        const success = await login(email, password);
        if (success) {
          navigate('/main');
        } else {
          setError('Invalid credentials');
        }
      };

    return (
        <>
         <div className="container mx-auto p-8 flex">
        <div className="max-w-md w-full mx-auto">
            <h1 className="text-4xl text-center mb-12 font-thin">LOGIN</h1>
            {error && <p className="text-red-500">{error}</p>}
            <form onSubmit={handleLogin}>

            <div className="bg-white rounded-lg overflow-hidden shadow-2xl">
                <div className="p-8">
                         <div className="mb-5">
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-600">Username</label>

                            <input
          className="border p-2 w-full mb-2"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />                        </div>
                
                        <div className="mb-5">
                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-600">Password</label>

                            <input
          className="border p-2 w-full mb-2"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />                        </div>

<button className="bg-blue-500 text-white px-4 py-2 rounded" type="submit">
          Login
        </button> 
        </div> 
        </div>          
        </form>
        
                
            </div>
        </div>
         </>
    );
}

export default LoginComponent;