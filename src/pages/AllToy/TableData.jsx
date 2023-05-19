import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const TableData = ({ toy, index }) => {
    const {_id}=toy;
    
    return (
        <>
        
            <tr>
                <th>{index + 1}</th>
                <td>{toy.seller_Name}</td>
                <td>{toy.name}</td>
                <td>{toy.category}</td>
                <td>${toy.price}</td>
                <td>{toy.number}</td>
                <td> <Link to={`/allToy/${_id}`}  className="px-3 py-2 bg-sky-300 rounded-lg">View Details</Link></td>
            </tr>
           
        </>
            
        
    );
};

export default TableData;