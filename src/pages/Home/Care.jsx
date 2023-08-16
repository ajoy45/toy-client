import React from 'react';
import image1 from '../../../src/assets/images/category/home-graphic.jpg'
import image2 from '../../../src/assets/images/category/heart.png'
import { AiOutlineArrowRight } from 'react-icons/ai';
const Care = () => {
    return (
        <div className='bg-[#f0eff7] py-24 px-12 my-12' data-aos="fade-right"
        data-aos-anchor-placement="center-bottom" data-aos-duration="2000">
            <div className='grid grid-cols-1 md:grid-cols-2 items-center gap-5'>
                <div>
                    <img src={image1} alt="" />
                </div>
                <div>
                    <div className='flex items-center'>
                        <h1 className='text-4xl font-bold'>We Care Like Mom Does.</h1>
                        <img className='w-12' src={image2} alt="" />
                    </div>
                    <p className='text-xl my-4'>We are an ambitious community that strives for excellence, and where happiness of our students is our first priority. Pellentesque tincidunt ullamcorper rutrum. Etiam tristique ipsum at purus pharetra finibus. Class aptent taciti socios qu ad litora torquent per conubia nostra.</p>
                    <div className='flex items-center bg-[#ff4841] w-32 '>
                    <button className='px-3 text-white text-xl'>Our FAQS </button>
                    <AiOutlineArrowRight className='text-white '></AiOutlineArrowRight> 
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Care;