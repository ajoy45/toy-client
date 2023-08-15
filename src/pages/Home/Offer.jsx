import React from 'react';
import image1 from '../../../src/assets/images/category/heading-lines.png';
import {SiProcessingfoundation } from 'react-icons/si';
import { BiDollar } from 'react-icons/bi';
import { TbTruckDelivery } from 'react-icons/tb';
import { TbDiscountCheck } from 'react-icons/tb';
import { GiCargoShip } from 'react-icons/gi';
import { GoUnlock } from 'react-icons/go';
import divider from '../../../src/assets/images/category/divider.png'
const Offer = () => {
    return (
        <div className='bg-[#faf8ff] p-12'>
            <div className='my-12'>
                <h1 className='text-center text-4xl font-bold mb-4'>What We Offer</h1>
                <div className='flex justify-center mb-3'>
                    <img src={image1} alt="" />
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12'>
                    <div className='shadow-lg p-12 hover:border border-red-600 rounded-lg bg-white'>
                        <div className='flex  '>
                         <GoUnlock className='text-6xl text-yellow-400'></GoUnlock>
                         <h1 className='ml-2 text-2xl font-bold mb-3'>Secure Packaging</h1>
                        </div>
                         <img className='mb-3' src={divider} alt="" />
                         <p className='text-md'>Our packaging isn't just about aesthetics; it's also about safeguarding your products. We use sturdy materials that ensure your order arrives in pristine condition. What's more, our commitment to sustainability means that we opt for eco-friendly materials whenever possible, reducing our environmental footprint.</p>
                    </div>
                    <div className='shadow-lg p-12 hover:border border-red-600 rounded-lg bg-white'>
                        <div className='flex  '>
                         <SiProcessingfoundation className='text-6xl text-yellow-400'></SiProcessingfoundation>
                         <h1 className='ml-2 text-2xl font-bold mb-3'> Swift Processing </h1>
                        </div>
                         <img className='mb-3' src={divider} alt="" />
                         <p className='text-md'>Ever wondered what happens after you click "Order Now"? Allow us to take you behind the scenes and unveil the meticulous process that transforms your order into a tangible package, ready to make its way to your doorstep. At  we pride ourselves on delivering not just products, but an exceptional shopping experience from start to finish.</p>
                    </div>
                    <div className='shadow-lg p-12 hover:border border-red-600 rounded-lg bg-white'>
                        <div className='flex  '>
                         <BiDollar className='text-6xl text-yellow-400'></BiDollar>
                         <h1 className='ml-2 text-2xl font-bold mb-3'>Return Money </h1>
                        </div>
                         <img className='mb-3' src={divider} alt="" />
                         <p className='text-md'>If you are not satisfied we will return your money However, your question is a bit vague. Could you please provide more context or clarify what exactly you're looking for? Are you referring to returning money in terms of refunds, reimbursements, or a specific financial transaction? The more details you provide, the better I can assist you.</p>
                    </div>
                    <div className='shadow-lg p-12 hover:border border-red-600 rounded-lg bg-white'>
                        <div className='flex  '>
                         <TbTruckDelivery className='text-6xl text-yellow-400'></TbTruckDelivery>
                         <h1 className='ml-2 text-2xl font-bold mb-3'>Two Days Delivery </h1>
                        </div>
                         <img className='mb-3' src={divider} alt="" />
                         <p className='text-md'>Two days delivery is a convenient and expedited shipping option offered by many online retailers and businesses. With this service, customers can expect their ordered items to be delivered to their doorstep within a mere two-day time frame. This swift delivery option is designed to cater to the needs of customers who require their purchases quickly, whether it's due to time-sensitive occasions, urgent needs, or simply a desire for a prompt delivery.</p>
                    </div>
                    <div className='shadow-lg p-12 hover:border border-red-600 rounded-lg bg-white'>
                        <div className='flex  '>
                         <TbDiscountCheck className='text-6xl text-yellow-400'></TbDiscountCheck>
                         <h1 className='ml-2 text-2xl font-bold mb-3'>15% Off on Your Favorite Toy </h1>
                        </div>
                         <img className='mb-3' src={divider} alt="" />
                         <p className='text-md'>Get ready to elevate your shopping experience with an incredible 15% discount that's designed to make your purchases even more delightful. Whether you're shopping for fashion, electronics, home goods, or anything in between, our 15% discount offer is your golden ticket to unlock significant savings.</p>
                    </div>
                    <div className='shadow-lg p-12 hover:border border-red-600 rounded-lg bg-white'>
                        <div className='flex  '>
                         <GiCargoShip className='text-6xl text-yellow-400'></GiCargoShip>
                         <h1 className='ml-2 text-2xl font-bold mb-3'>Free Shipping Bonus</h1>
                        </div>
                         <img className='mb-3' src={divider} alt="" />
                         <p className='text-md'>Experience the ease and convenience of our shipping services, designed to ensure your ordered items reach you promptly and securely. We understand that the journey from our store to your doorstep is a crucial part of your shopping experience, and we're committed to making it exceptional.</p>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Offer;