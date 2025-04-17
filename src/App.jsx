import { createElement, useEffect, useState } from 'react'
import { createBrowserRouter, createRoutesFromElements, Navigate, Route, RouterProvider, Routes, useNavigate } from 'react-router-dom'
import './App.css'
import { Navbar } from './component/navbar'
import Home from './component/home'
import Product, { productLoader } from './component/product'
import Contact from './component/contact'
import RootLayout from './component/layout/rootLayout'
import ProductLayout from './component/layout/ProductLayout'
import ProductDetail, { productdetailData } from './component/productDetail'
import LoginComponent from './component/LoginComponent'
import NotFoundComp from './component/errorbound/notFoundComp'
import LoginLayout from './component/layout/LoginLayout'
import { useAuth } from './auth/AuthContext'

function PrivateRoute({ children }) {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? children : <Navigate to="/login" />;
}

function App() {
  
 const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path="/" element={<Navigate to="/login" replace />} />
    <Route path="login" element={<LoginLayout/>}>
    <Route index element={<LoginComponent />} />
  </Route>
      <Route path="main" element={<PrivateRoute> <RootLayout/></PrivateRoute>}> 
      <Route index element={<Home/>} loader={productLoader}/>
      <Route path='product' element={<ProductLayout/>}>
      <Route index element={<Product/>} loader={productLoader}/>
      <Route path=':id' element={<ProductDetail/>} loader={productdetailData} errorElement = {<NotFoundComp />}/>
      </Route>
      <Route path='contact' element={<Contact/>}/>
      </Route>

      <Route path='*' element={<NotFoundComp/>}/>

      </>
   )
 )
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
