import React from 'react';

const Review = ({ review }) => {
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <div className="card-body">

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, aliquam! Consequatur velit maxime explicabo perferendis? Veniam, dicta ratione dolore ullam porro esse quo vitae sunt quae reiciendis labore amet odit?</p>
                <div className="flex">
                    <div className="avatar">
                        <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={review.img} alt='' />
                        </div>
                    </div>
                    <div className='p-4'>
                        <h4>{review.name}</h4>
                        <p>{review?.location}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;