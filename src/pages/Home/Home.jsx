import React, { useContext } from 'react';
import Banner from './Banner';
import PhotoGallery from './PhotoGallery';

import UseTitle from '../../hooks/UseTitle';
import Count from './Count';
import Slider from './Slider';
import Offer from './Offer';
import Client from './Client';
import Care from './Care';
import Category from './Category';

const Home = () => {
    UseTitle('home')
    return (
        <div>
            <Banner></Banner>
            <Slider></Slider> 
             <Offer></Offer>
             <Category></Category>
             <Client></Client>
             <PhotoGallery></PhotoGallery>
             <Care></Care>
            <Count></Count>
        </div>
    );
};

export default Home;