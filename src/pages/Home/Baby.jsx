import React from 'react';
import image from '../../../src/assets/images/category/bg-1.jpg'
const Baby = () => {
    const containerStyle = {
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
       
      };
      
 
    return (
        <div 
            style={containerStyle}
           
         className='md:py-20 text-center my-12 '>
            <h1 className='text-3xl text-[#1e2d5f] font-bold my-3'>Baby pillow</h1>
            <p className='text-xl'>Buy now for your baby!</p>
            <button className='px-4 py-3 bg-white mt-4 text-xl font-md'>Shop Now</button>
        </div>
    );
};

export default Baby;