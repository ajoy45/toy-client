import React from 'react';
import toy from '../../../src/assets/images/logo/toy.jpg'
const Team = () => {
    return (
        <div className="container my-24 px-6 mx-auto" data-aos="zoom-out-left">
            <h1 className='text-center my-20 font-bold text-5xl'>Our Team</h1>
            <section className="mb-32 text-gray-800">
                <div className="container mx-auto xl:px-32 text-center lg:text-left">
                    <div className="grid lg:grid-cols-2 flex items-center">
                        <div className="mb-12 lg:mb-0">
                            <div className="block rounded-lg shadow-lg px-6 py-12 md:px-12 lg:-mr-14"
                                style={{background: "hsla(0, 0%, 100%, 0.55)", backdropFilter: "blur(30px)"}}>
                                <h2 className="text-3xl font-bold mb-6">Meet Our Toy Team</h2>
                                <p className="text-gray-500 mb-6 pb-2 lg:pb-0">
                                Team Toy is a group of passionate individuals dedicated to creating and designing innovative and interactive toys for children. Our team consists of talented designers, engineers, and marketers who work together to bring joy and educational experiences to kids of all ages.
                                </p>

                                <div className="flex flex-col md:flex-row md:justify-around lg:justify-between mb-6 mx-auto">
                                    <p className="flex items-center mb-4 md:mb-2 lg:mb-0 mx-auto md:mx-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 mr-2 text-sky-400">
                                            <path fill="currentColor"
                                                d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z">
                                            </path>
                                        </svg>
                                        Ajoy Biswas
                                    </p>

                                    <p className="flex items-center mb-4 md:mb-2 lg:mb-0 mx-auto md:mx-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 mr-2 text-sky-400">
                                            <path fill="currentColor"
                                                d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z">
                                            </path>
                                        </svg>
                                        Dipa Sarker
                                    </p>

                                    <p className="flex items-center mb-2 lg:mb-0 mx-auto md:mx-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 mr-2 text-sky-300">
                                            <path fill="currentColor"
                                                d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z">
                                            </path>
                                        </svg>
                                        Antor Biswas
                                    </p>
                                </div>

                                <p className="text-gray-500 mb-0">
                                Our mission is to develop toys that foster creativity, imagination, and learning. We believe that playtime should be more than just entertainment; it should be an opportunity for children to explore, discover, and develop essential skills. With this vision in mind, we strive to design toys that engage children in meaningful ways, encouraging problem-solving, critical thinking, and social interaction.
                                </p>
                            </div>
                        </div>

                        <div>
                            <img src={toy} className="w-full rounded-lg shadow-lg"
                                alt="toy" />
                        </div>
                    </div>
                </div>
               
            </section>

        </div>
    );
};

export default Team;