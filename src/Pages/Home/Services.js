import React from 'react';
import floride from '../../assets/images/fluoride.png'
import cavity from '../../assets/images/cavity.png'
import whitening from '../../assets/images/whitening.png'
import Service from './Service';

const Services = () => {
    const services = [
        { _id: 1, name: 'Floride Treatment', description: 'about floride treatment', img: floride },
        { _id: 2, name: 'Cavity filling', description: 'about cavity treatment', img: cavity },
        { _id: 3, name: 'Teeth Whitening', description: 'about whitening treatment', img: whitening }
    ]
    return (
        <div className='py-10'>
            <div className='text-center'>
                <h1 className='text-primary text-2xl font-bold'>Our services</h1>
                <h1 className='text-2xl font-bold'>Service We Provide</h1>
            </div>
            <div className='grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-4'>
                {services.map(service => <Service
                    key={service._id}
                    service={service}
                ></Service>)}
            </div>
        </div>
    );
};

export default Services;