import React, { useState } from 'react';
import Products from '../components/Products';
import Login from '../components/Login';
import { Route, Routes } from 'react-router-dom'
import HomeContent from '../components/HomeContent';
import Cart from '../components/Cart';
export default function Nav() {
    const [productData, setProductData] = useState([]);
    const getCartsProducts = (data) => {
        setProductData(data);
    }
    return (
        <Routes>
            <Route exact path='/login' element={<Login />} />
            <Route exact path='/' element={<HomeContent />} />
            <Route exact path='/products' element={<Products getCartsProducts={getCartsProducts} />} />
            <Route exact path='/cart' element={<Cart productData={productData} />} />
        </Routes>
    )
}
