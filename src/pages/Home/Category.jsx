import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Card from './Card';
const Category = () => {
    const [dolls, setDolls] = useState([]);
    const [activeTab, setActiveTab] = useState("");
    const defaultCategory='Dol'
    const handelCategory = (text) => {
        setActiveTab(text)
        fetch(`https://assingement11-server.vercel.app/toyCategory/${text}`)
            .then(res => res.json())
            .then(data => setDolls(data))
    }
    useEffect(()=>{
        fetch(`https://assingement11-server.vercel.app/toyCategory/${defaultCategory}`)
        .then(res=>res.json())
        .then(data=>setDolls(data))
    },[])
    return (
        <div className='text-center my-16'>
            <h1 className='text-3xl mb-16 font-bold'>Children's Toy Room </h1>
            <div className='my-3'>
                <button  className={`mr-3 px-4 py-2 bg-red-500 text-white rounded-lg ${activeTab==='Dol'?'bg-black':""}`} onClick={() => handelCategory('Dol')}>DOLL</button>
                <button className={`mr-3 px-4 py-2 bg-red-500 text-white rounded-lg ${activeTab==='Wooden'?'bg-black':""}`} onClick={() => handelCategory('Wooden')}>WOODEN</button>
                <button className={`mr-3 px-4 py-2 bg-red-500 text-white rounded-lg ${activeTab==='Car'?'bg-black':""}`} onClick={() => handelCategory('Car')}>CAR</button>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-16'>
                {
                    dolls.map(doll => <Card
                        key={doll._id}
                        doll={doll}
                    ></Card>)
                }
            </div>

        </div>
    );
};

export default Category;