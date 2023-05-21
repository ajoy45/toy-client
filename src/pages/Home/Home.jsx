import React, { useContext } from 'react';
import Banner from './Banner';
import PhotoGallery from './PhotoGallery';
import Category from './Category';
import UseTitle from '../../hooks/UseTitle';


const Home = () => {
    UseTitle('home')
    return (
        <div>
            <Banner></Banner>
            <PhotoGallery></PhotoGallery>
            <Category></Category>
        </div>
    );
};

export default Home;