import React from 'react';
import quote from '../../assets/icons/quote.svg'
import p1 from '../../assets/images/people1.png'
import p2 from '../../assets/images/people2.png'
import p3 from '../../assets/images/people3.png'
import Review from './Review';

const Testimonials = () => {
    const reviews = [
        { _id: 554345634, name: 'Winson Herry', review: 'about  the agency', location: 'Dhaka', img: p1 },
        { _id: 5545634, name: 'Winson Messi', location: 'Chittagong', review: 'about kjsht jfhyeuyf ueyruyetref  iowrenbfdff euyrehgv oeff yendfufh   the agency', img: p2 },
        { _id: 55435634, name: 'Winson Paul', location: 'Sylhet', review: 'about  the agency', img: p3 },
    ]

    return (
        <section className='mb-10'>
            <div className='flex justify-between'>
                <div>
                    <h4 className='text-xl text-primary font-semibold'>Testimonials</h4>
                    <p className='text-2xl'>What our patients says</p>
                </div>
                <div>
                    <img className='w-24 lg:w-48' src={quote} alt="" />
                </div>
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4'>
                {
                    reviews.map(review => <Review
                        key={review._id}
                        review={review}
                    ></Review>)
                }
            </div>
        </section>
    );
};

export default Testimonials;