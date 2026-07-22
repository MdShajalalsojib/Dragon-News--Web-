import React from 'react';
import { Outlet } from 'react-router';
import Header from '../Components/Header';

const HomeLayout = () => {
    return (
        <div>
            <header><Header></Header></header>
            <section className='left_nav'></section>
            <section className='main_nav'>
                <Outlet></Outlet>
            </section>
            <section className='right_nav'></section>
        </div>
    );
};

export default HomeLayout;