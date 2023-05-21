import React from 'react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
const images = [
    "https://i.ibb.co/nmwB4nj/2.jpg/200/300",
    "https://i.ibb.co/8Xthp3g/1.jpg/300/400",
    "https://i.ibb.co/QXzQMhX/3.jpg/200/300",
    "https://i.ibb.co/wYY8Xyg/4.jpg/300/300",
    "https://i.ibb.co/nsY9Hnt/5.jpg/200/300",
    "https://i.ibb.co/j4YLCjK/6.jpg/300/300",
    "https://i.ibb.co/HBSYh7x/8.jpg/7.jpg/200/300",
    "https://i.ibb.co/9rwhrfM/9.jpg/300/300",
    "https://i.ibb.co/yys0wkk/10.jpg/200/300",
    "https://i.ibb.co/thjxpmj/11.jpg/300/300",
    "https://i.ibb.co/PwNh72R/13.jpg/300/300",
    "https://i.ibb.co/TqFm0gX/14.jpg/300/300",
]
const PhotoGallery = () => {

    return (
        <div>
            <div className='mt-16' data-aos="fade-right"
                 data-aos-duration="1000"
                data-aos-easing="ease-in-sine" >
                <div className='text-center mb-16'>
                    <h1 className='text-3xl font-bold '>Toy <span className='text-red-500'>Gallery</span></h1>
                    <p className='w-1/2 mx-auto text-xl mt-3'>Image galleries are commonly used in various applications and websites to showcase a collection of photos, artwork, products, or any visual content. They offer a visually engaging way to present images, allowing users to view them in a controlled and interactive manner.</p>
                </div>
            </div>
            <div  data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
                <ResponsiveMasonry
                    columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
                >
                    <Masonry  columnsCount={3} gutter="10px">
                        {images.map((image, i) => (
                            <img
                                key={i}
                                src={image}
                                style={{ width: "100%", display: "block" }}
                            />
                        ))}
                    </Masonry>
                </ResponsiveMasonry>
            </div>
        </div>
    )
}

export default PhotoGallery;