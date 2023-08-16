import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import image1 from '../../../src/assets/images/category/category1.jpg'
import image2 from '../../../src/assets/images/category/category2.jpg'
import image3 from '../../../src/assets/images/category/category3.jpg'
import image4 from '../../../src/assets/images/category/category4.jpg'
import image5 from '../../../src/assets/images/category/category5.jpg'
import image6 from '../../../src/assets/images/category/category6.jpg'
import bg from '../../../src/assets/images/category/heading-lines.png'
const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};
const Slider = () => {
    return (
        <div className='my-12' data-aos="fade-right"
        data-aos-anchor-placement="center-bottom" data-aos-duration="2000">
            <h1 className='text-center text-4xl font-bold mb-4'>Category</h1>
                <div className='flex justify-center'>
                    <img src={bg} alt="" />
                </div>
            <Carousel responsive={responsive} >
                <div ><img className='hover:border border-dashed border-blue-600 hover:translate-x-8' src={image1} alt="" /></div>
                <div><img className='hover:border border-dashed border-blue-600 hover:translate-x-8' src={image2} alt="" /></div>
                <div><img className='hover:border border-dashed border-blue-600 hover:translate-x-8' src={image3} alt="" /></div>
                <div><img className='hover:border border-dashed border-blue-600 hover:translate-x-8' src={image4} alt="" /></div>
                <div><img className='hover:border border-dashed border-blue-600 hover:translate-x-8' src={image5} alt="" /></div>
                <div><img className='hover:border border-dashed border-blue-600 hover:translate-x-8' src={image6} alt="" /></div>

            </Carousel>
        </div>
    );
};

export default Slider;