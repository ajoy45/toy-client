import React from 'react';
import banner1 from '../../../src/assets/images/banner1.jpg'
const Banner = () => {
    return (
        <div className="hero min-h-screen " style={{ backgroundImage: `url(${banner1})` }}>
            <div className="hero-overlay bg-opacity-50 "></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <p className="mb-5 ">Exclusive Offer On Toys</p>
                    <h1 className="mb-5 text-5xl font-bold">Make Kids Happy
& Healthy</h1>
                    <button className="bg-red-500 px-4 rounded-3xl py-2">Shop Now</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;