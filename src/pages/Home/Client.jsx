import React from 'react';
import image1 from '../../../src/assets/images/category/heading-lines.png';
import client1 from '../../../src/assets/images/category/client-1.jpg'
import client2 from '../../../src/assets/images/category/client-2.jpg'
import client3 from '../../../src/assets/images/category/client-3.jpg'
import { BiLogoFacebookCircle } from 'react-icons/bi';
import { AiFillInstagram } from 'react-icons/ai';
import { AiFillTwitterCircle } from 'react-icons/ai';
const Client = () => {
    return (
        <div className='my-12'>
            <div>
                <h1 className='text-center text-4xl font-bold mb-4'>Our Client</h1>
                <div className='flex justify-center mb-3'>
                    <img src={image1} alt="" />
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12'>
                    <div className="card w-full bg-base-100 shadow-xl" data-aos="flip-down"
        data-aos-anchor-placement="center-bottom" data-aos-duration="2000">
                        <figure><img src={client1} alt="Shoes" /></figure>
                        <div >
                            <h2 className="text-center text-3xl mt-4 font-bold">Cristina James</h2>
                            <p className="text-center font-bold">1-3 years old customer</p>
                            <div className='flex justify-center my-5'>
                               <BiLogoFacebookCircle className='mr-4 text-3xl text-red-600 cursor-pointer'></BiLogoFacebookCircle>
                               <AiFillInstagram className='mr-4 text-3xl text-red-600 cursor-pointer'></AiFillInstagram>
                               <AiFillTwitterCircle className='mr-4 text-3xl text-red-600 cursor-pointer'></AiFillTwitterCircle>
                            </div>
                        </div>
                    </div>
                    <div className="card w-full bg-base-100 shadow-xl" data-aos="flip-down"
        data-aos-anchor-placement="center-bottom" data-aos-duration="2000">
                        <figure><img src={client2} alt="Shoes" /></figure>
                        <div >
                            <h2 className="text-center text-3xl mt-4 font-bold">Mary Smith</h2>
                            <p className="text-center font-bold">2-3 years old customer</p>
                            <div className='flex justify-center my-5'>
                               <BiLogoFacebookCircle className='mr-4 text-3xl text-red-600 cursor-pointer'></BiLogoFacebookCircle>
                               <AiFillInstagram className='mr-4 text-3xl text-red-600 cursor-pointer'></AiFillInstagram>
                               <AiFillTwitterCircle className='mr-4 text-3xl text-red-600 cursor-pointer'></AiFillTwitterCircle>
                            </div>
                        </div>
                    </div>
                    <div className="card w-full bg-base-100 shadow-xl" data-aos="flip-down"
        data-aos-anchor-placement="center-bottom" data-aos-duration="2000">
                        <figure><img src={client3} alt="Shoes" /></figure>
                        <div >
                            <h2 className="text-center text-3xl mt-4 font-bold">John Doe</h2>
                            <p className="text-center font-bold">5-4 years old customer</p>
                            <div className='flex justify-center my-5'>
                               <BiLogoFacebookCircle className='mr-4 text-3xl text-red-600 cursor-pointer'></BiLogoFacebookCircle>
                               <AiFillInstagram className='mr-4 text-3xl text-red-600 cursor-pointer'></AiFillInstagram>
                               <AiFillTwitterCircle className='mr-4 text-3xl text-red-600 cursor-pointer'></AiFillTwitterCircle>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Client;