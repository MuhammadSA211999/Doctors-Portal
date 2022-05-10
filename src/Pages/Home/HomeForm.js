import React from 'react';
import formBack from '../../assets/images/appointment.png'

const HomeForm = () => {
    return (
        <div className='p-5 rounded-md' style={{ background: `url(${formBack})` }}>
            <h4 className='text-center text-2xl font-bold text-primary'>Contact us</h4>
            <h3 className='text-center text-3xl font-semibold text-white'>Stay Connected With Us</h3>
            <form className='flex flex-col'>
                <div className='p-10 mx-auto flex flex-col justify-center items-center'>
                    <input className='w-15 h-8 rounded-lg p-3' type="text" placeholder='Name' name="" id="" />
                    <br />
                    <input className='w-15 h-8 rounded-lg p-3' type="email" placeholder='Email' name="" id="" />
                    <br />
                    <textarea placeholder='Opinion' className='w-[199px] h-25 rounded-lg p-3' name="" id=""></textarea>
                    <br />
                    <input className='btn btn-primary uppercase font-bold text-white bg-gradient-to-r from-secondary to-primary' type="submit" value="Submit" />
                </div>
            </form>
        </div>

    );
};

export default HomeForm;