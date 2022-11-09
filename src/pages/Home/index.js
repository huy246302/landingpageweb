import React from 'react'
import About from '../../components/About';
import Banner from '../../components/Banner';
import Client from '../../components/Client';
import Pricing from '../../components/Pricing';
import Service from '../../components/Service';

export const Home = () => {
    return (
        <>
            <Banner />
            <Service />
            <About />
            <Client />
            <Pricing />
        </>
    )
}
export default Home;