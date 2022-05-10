import React from 'react';
import appoint from '../../assets/images/appointment.png'
import doctor from '../../assets/images/doctor.png'
import PrimaryBtn from './Shared/PrimaryBtn';

const Appointment = () => {
    return (
        <section style={{
            background: `url(${appoint})`
        }} className='my-11 flex justify-center items-center rounded-md'>
            <div className='flex-1 lg:block hidden'>
                <img className='mt-[-100px] ' src={doctor} alt="" />
            </div>
            <div className='flex-1 p-4'>
                <h1 className='text-primary text-xl font-bold'>Appointment</h1>
                <h2 className='text-3xl font-semibold text-white'>Make an Appointment Today</h2>
                <p className='text-white'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum sunt asperiores quia modi maiores fuga itaque error nemo, doloribus autem cumque cupiditate, delectus aspernatur quidem nostrum corrupti necessitatibus perspiciatis optio consequatur sapiente similique. Harum quod amet quasi officiis aliquid, dolore, corrupti eum, quos libero explicabo veniam eos voluptas quam debitis.</p>
                <PrimaryBtn>Get Startd</PrimaryBtn>
            </div>

        </section>
    );
};

export default Appointment;