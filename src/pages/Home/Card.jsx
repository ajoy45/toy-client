import React from 'react';
import { TabPanel } from 'react-tabs';

const Card = ({ doll }) => {
    const { name, photoURL, price, rating } = doll
    return (
        
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={photoURL} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className=''>Toy Name:{name}</h2>
                <h3>Price:${price}</h3>
                <h3>Rating:${rating}</h3>
                <div className="card-actions justify-center">
                    <button className="btn bg-red-500 border-0">View Details</button>
                </div>
            </div>
        </div>
        
    );
};

export default Card;