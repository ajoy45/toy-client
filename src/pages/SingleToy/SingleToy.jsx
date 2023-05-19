import React from 'react';
import { useLoaderData } from 'react-router-dom';

const SingleToy = () => {
    const data = useLoaderData();
    const { photoURL, name, seller_Name, Seller_email, price, rating, number, description } = data
    return (
        <div className='flex justify-center mt-20'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={photoURL} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Toy Name:{name}</h2>
                    <h2 className="card-title">seller Name:{seller_Name}</h2>
                    <p>Email:{Seller_email}</p>
                    <p>Price:${price}</p>
                    <p>Rating:{rating}</p>
                    <p>Quantity:{number}</p>
                    <p title={description}>Description:{description.slice(0,100)}...</p>
                </div>
            </div>
        </div>
    );
};

export default SingleToy;