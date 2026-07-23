import React from 'react';
import { Outlet } from 'react-router';
import Header from '../Components/Header';
import LatestNews from '../Components/LatestNews';

const HomeLayout = () => {
    return (
        <div>
             
            <header>
                <Header></Header>
                <section className='w-11/12 mx-auto my-3'>
                    <LatestNews></LatestNews> 
                </section>
                </header>
            <section className='left_nav'></section>
            <section className='main_nav'>
                <Outlet></Outlet>
            </section>
            <section className='right_nav'></section>
        </div>
    );
};

export default HomeLayout;