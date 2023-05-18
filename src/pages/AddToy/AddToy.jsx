import React, { useState } from 'react';

const AddToy = () => {
    const [category,setCategory]=useState('')
    const handelAddSubmit=e=>{
        e.preventDefault()
        const name=e.target.name.value;
        const seller=e.target.seller.value;
        const email=e.target.email.value;
        const price=e.target.price.value;
        const rating=e.target.rating.value;
        const number=e.target.number.value;
        const photoURL=e.target.photo.value;
        const description=e.target.description.value;
        console.log(name,category,seller,email,price,rating,number,photoURL,description)
    }
    
    return (
        <div className=''>
            
                <h1 className='my-5 text-center pr-28 font-bold uppercase text-red-200'> please add toy</h1>
           
            <form onSubmit={handelAddSubmit}>
                <div className=' w-1/2 mx-auto '>

                    <div className='mb-4 '>
                        <input type="text" name='name' placeholder="Toy Name" className="input input-bordered input-primary w-full max-w-xs mr-3" />
                        <input type="text" name='seller' placeholder="seller Name" className="input input-bordered input-primary w-full max-w-xs" />
                    </div>
                    <div className='mb-4 ' >
                        <input type="email" name='email' placeholder="Your Email" className="input input-bordered input-primary w-full max-w-xs mr-3" />
                        <select onChange={(e)=>setCategory(e.target.value)}  className="select select-primary w-full max-w-xs" >
                            <option disabled selected>Sub-Category</option>
                            <option value='Car'>Car Toy</option>
                            <option value='Dol'>Dol Toy</option>
                            <option value='Wooden'>Wooden Toy</option>
                            
                        </select>
                    </div>
                    <div className='mb-4 '>
                        <input type="text" name='price' placeholder="Price" className="input input-bordered input-primary w-full max-w-xs mr-3" />
                        <input type="text" name='rating' placeholder="Rating" className="input input-bordered input-primary w-full max-w-xs" />
                    </div>
                    <div className='mb-4 '>
                        <input type="number" name='number' placeholder="Available Quantity" className="input input-bordered input-primary w-full max-w-xs mr-3" />
                        <input type="text" name='photo' placeholder="Photo URL" className="input input-bordered input-primary w-full max-w-xs" />
                    </div>
                    <div >
                        <textarea name='description' className="textarea textarea-primary w-5/6" placeholder="Description"></textarea>
                    </div>
                    <div>
                        <input className='w-5/6 bg-red-500 rounded-xl py-3 text-white' type="submit" value="Add Toy" />
                    </div>
                </div>

            </form>
        </div>
    );
};

export default AddToy;