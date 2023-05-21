import React from 'react';
import { Link } from 'react-router-dom';

const MyToyTable = ({ myToy, index ,handelDelete}) => {
    console.log(myToy)
    const { Seller_email, photoURL, name,_id,price } = myToy;
    return (

        <tr>
            <td>{index + 1}</td>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={photoURL} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{name}</div>
                       
                    </div>
                </div>
            </td>
            <td>
                {Seller_email}
            </td>
            <td>
                ${price}
            </td>
            <td>
                <Link to={`/updateToy/${_id}`} className='bg-sky-200 px-3 py-2 rounded-lg'>UPDATE</Link>
            </td>
            <th>
                <button onClick={()=>handelDelete(_id)} className="bg-red-500 px-3 py-2 rounded-lg text-white">Delete</button>
            </th>
        </tr>

    );
};

export default MyToyTable;