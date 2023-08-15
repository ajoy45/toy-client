import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { authContext } from '../../Auth/AuthProvider';
const Card = ({ doll }) => {
    const{user}=useContext(authContext)
    const navigate=useNavigate()
    const { _id,name, photoURL, price, rating } = doll;
    const handelViewDetails=(id)=>{
        if(!user){
            toast("You have to log in first to view details")
        }
        navigate(`allToy/${id}`)
    }
    return (
        
            <div className="card card-compact w-full  bg-base-100 shadow-xl" data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500">
            <figure><img src={photoURL} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className=''>Toy Name:{name}</h2>
                <h3>Price:${price}</h3>
                <h3>Rating:{rating?rating:"No Rating"}</h3>
                <div  className="card-actions justify-center">
                    <button onClick={()=>handelViewDetails(_id)} className="btn bg-red-500 border-0">View Details</button>
                </div>
            </div>
        </div>
        
    );
};

export default Card;