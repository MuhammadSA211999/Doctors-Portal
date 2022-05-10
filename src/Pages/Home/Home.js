import React from 'react';
import Banner from './Banner';
import Info from './Info';
import Services from './Services';
import BannerTwo from '../Home/BannerTwo'
import Appointment from '../Home/Appointment'
import Testimonials from '../Home/Testimonials'
import Footer from '../Home/Footer'
import HomeForm from '../Home/HomeForm'
const Home = () => {
    return (
        <div className='px-12'>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <BannerTwo></BannerTwo>
            <Appointment></Appointment>
            <Testimonials></Testimonials>
            <HomeForm></HomeForm>
            <Footer></Footer>
        </div>
    );
};

export default Home;