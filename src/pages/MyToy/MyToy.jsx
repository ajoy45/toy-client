import React, { useContext, useEffect, useState } from 'react';
import { authContext } from '../../Auth/AuthProvider';
import MyToyTable from './MyToyTable';
import UseTitle from '../../hooks/UseTitle';


const MyToy = () => {
    const { user } = useContext(authContext)
    UseTitle('MyToy')
    const [myToys, setMyToys] = useState([]);
    const handelDelete=id=>{
        const processed=confirm('Are you sure to Delete ?')
        if(processed){
            fetch(`https://assingement11-server.vercel.app/deleteToy/${id}`,{
            method:"DELETE",
        })
        .then(res=>res.json())
        .then(data=>{
               if(data.deletedCount>0){
                const remaining=myToys.filter(toy=>toy._id!==id);
                setMyToys(remaining)
               }
             
        })
        }
       
        
    }
    useEffect(() => {
        fetch(`https://assingement11-server.vercel.app/myToy?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setMyToys(data))
    }, [])
    // console.log(myToys)
    return (
        <div>
            <div className="overflow-x-auto w-full ">
                <table className="table w-full sm:table-auto">
                    {/* head */}
                    <thead>
                        <tr> 
                            <th>NO</th>
                            <th>Name And Picture</th>
                            <th>Email</th>
                            <th>Price</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            myToys.map((myToy,index)=><MyToyTable
                             key={myToy._id}
                             myToy={myToy}
                             index={index}
                             handelDelete={handelDelete}
                            ></MyToyTable>)
                        }
                       
                        
                     
                        
                        
                    </tbody>
                   
                  

                </table>
            </div>
        </div>
    );
};

export default MyToy;