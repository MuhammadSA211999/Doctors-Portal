import React from 'react';
import treat from '../../assets/images/treatment.png'
import PrimaryBtn from './Shared/PrimaryBtn';

const BannerTwo = () => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">

                <div>
                    <h1 className="text-5xl font-bold">Youe new smile start here!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <PrimaryBtn>Get Started</PrimaryBtn>
                </div>
                <img src={treat} className='max-w-sm rounded-lg shadow-2xl' />
            </div>
        </div>
    );
};

export default BannerTwo;