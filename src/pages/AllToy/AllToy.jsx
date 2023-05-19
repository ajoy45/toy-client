import React, { useEffect, useState } from 'react';
import TableData from './tableData';
const AllToy = () => {
    const [toys, setToys] = useState([]);
    const [searchText, setSearchText] = useState('')
    const handelSearch = () => {
        fetch(`http://localhost:3000/allToyBySearch/${searchText}`)
            .then(res => res.json())
            .then(data => setToys(data))
    }
    useEffect(() => {
        fetch('http://localhost:3000/allToy')
            .then(res => res.json())
            .then(data => setToys(data))
    }, [])
    console.log(toys)
    return (
        <div className='mt-20'>
            <div className="mb-3 ">
                <div className="relative mb-4 flex w-1/5 flex-wrap items-stretch mx-auto">
                    <input onChange={(e) => setSearchText(e.target.value)}
                        type="search"
                        className="relative m-0 -mr-0.5 block w-[1px] min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
                        placeholder="Search"
                        aria-label="Search"
                        aria-describedby="button-addon3" />

                    {/* Search button */}
                    <button onClick={handelSearch}
                        className="relative z-[2] rounded-r border-2 border-primary px-6 py-2 text-xs font-medium uppercase text-primary transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
                        type="button"
                        id="button-addon3"
                        data-te-ripple-init>
                        Search
                    </button>
                </div>
            </div>
            <div className="overflow-x-auto mt-10">
                <table className="table table-compact w-full">
                    <thead>
                        <tr>
                            <th>N</th>
                            <th>Seller Name</th>
                            <th>Toy Name</th>
                            <th>Sub-category</th>
                            <th>Price</th>
                            <th>Available Quantity</th>
                            <th>Details</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            toys.map((toy, index) =><TableData
                             key={toy._id}
                             toy={toy}
                             index={index}
                            ></TableData>)
                        }

                    </tbody>

                </table>
            </div>
          
        </div>
    );
};

export default AllToy;