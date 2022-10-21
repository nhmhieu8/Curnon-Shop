import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer2 from './Footer2/Footer2';
import Header from './Header/Header';

const Layout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer2 />
        </>
    );
};

export default Layout;
