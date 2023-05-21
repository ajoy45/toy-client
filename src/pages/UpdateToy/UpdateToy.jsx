import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';
import UseTitle from '../../hooks/UseTitle';

const UpdateToy = () => {
    const toy=useLoaderData();
    UseTitle('updateToy')
    const{_id}=toy
    console.log(toy)
    const handelUpdateSubmit=e=>{
        e.preventDefault()
        const price=e.target.price.value;
        const number=e.target.number.value;
        const description=e.target.description.value;
        const toysInfo={
            price,number,description
        }
        fetch(`https://assingement11-server.vercel.app/updateToy/${_id}`,{
            method:"PUT",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(toysInfo)

        })
        .then(res=>res.json)
        .then(data=>{
            toast('update successful')
            console.log(data)
        })

        
    }
    return (
        <div>
            <div>

                <h1 className='my-5 text-center pr-28 font-bold uppercase text-red-200'> please Update toy</h1>

                <form onSubmit={handelUpdateSubmit}>
                    <div className=' w-1/2 mx-auto '>

                        
                        <div className='mb-4 '>
                            <input type="text" name='price' placeholder="Price" className="input input-bordered input-primary w-full max-w-xs mr-3" />
                            <input type="number" name='number' placeholder="Available Quantity" className="input input-bordered input-primary w-full max-w-xs mr-3" />
                           
                        </div>
                        
                        <div >
                            <textarea name='description' className="textarea textarea-primary w-5/6" placeholder="Description"></textarea>
                        </div>
                        <div>
                            <input className='w-5/6 bg-red-500 rounded-xl py-3 text-white' type="submit" value="Update Toy" />
                        </div>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default UpdateToy;