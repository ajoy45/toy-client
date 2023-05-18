import React from 'react';
import img from '../../../src/assets/images/slider/404.jpg'
import { Link } from 'react-router-dom';
const ErrorPage = () => {
    return (
        <div className='mt-16'>
            <div  className='flex justify-center'>
                <img src={img} alt="" />
            </div>
            <div className='flex justify-center'>
                <Link to='/'><button className='px-3 bg-red-500 py-2 rounded-lg text-white'>Back Home</button></Link>
            </div>
        </div>
    );
};

export default ErrorPage;