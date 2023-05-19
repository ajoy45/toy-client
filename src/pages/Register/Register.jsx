import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { authContext } from '../../Auth/AuthProvider';

const Register = () => {
    const [error, setError] = useState('')
    const { createUser, user, updateUserProfile } = useContext(authContext);
    const navigate = useNavigate()
    const handelRegister = e => {
        e.preventDefault()
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        createUser(email, password)
            .then(result => {
                const user = result.user;
                navigate('/login')
                updateUserProfile(user, name, photo)
                    .then(() => {
                        console.log('update profile')
                    })
                    .catch(error => {
                        console.log('update user error')
                    })

                console.log(user)
            })
            .catch(error => {
                setError(error.message)
            })
        // console.log(name,photo,email,password)
    }
    return (
        <section className="h-screen">

            <div className="container py-24 px-6">
                <h1 className='text-center mb-5 font-bold uppercase text-3xl text-red-500'>please Register</h1>
                <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">

                    <div className="mb-12 md:mb-0 md:w-8/12 lg:w-6/12">
                        <img
                            src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                            className="w-full"
                            alt="Phone image" />
                    </div>

                    <div className="md:w-8/12 lg:ml-6 lg:w-5/12">

                        <form onSubmit={handelRegister}>

                            <div className="relative mb-6" data-te-input-wrapper-init>
                                <input
                                    type="text" name='name'
                                    className='w-full p-2 border border-blue-300'
                                    placeholder="Name" />

                            </div>
                            <div className="relative mb-6" data-te-input-wrapper-init>
                                <input
                                    type="text" name='photo'
                                    className='w-full p-2 border border-blue-300'
                                    placeholder="photo URL" />

                            </div>
                            <div className="relative mb-6" data-te-input-wrapper-init>
                                <input
                                    type="email" name='email'
                                    className='w-full p-2 border border-blue-300'
                                    placeholder="Email address" />

                            </div>


                            <div className="relative mb-6" data-te-input-wrapper-init>
                                <input
                                    type="password" name='password'
                                    className='w-full p-2 border border-blue-300'

                                    placeholder="Password" />

                            </div>


                            <div className="mb-6 flex items-center justify-between">

                                <div className="flex items-center justify-between pb-6">
                                    <p className="mb-0 mr-2">Already have an account?</p>
                                    <Link to='/login'>
                                        <button
                                            type="button"
                                            className="inline-block rounded border-2 border-danger px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-danger-600 focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                                            data-te-ripple-init
                                            data-te-ripple-color="light">
                                            Login
                                        </button>
                                    </Link>

                                </div>

                            </div>

                            <div>
                                <p className='text-red-300'>{error}</p>
                            </div>
                            <button
                                type="submit"
                                className="inline-block w-full rounded bg-primary px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                                data-te-ripple-init
                                data-te-ripple-color="light">
                                Sign Up
                            </button>


                            <div
                                className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                                <p
                                    className="mx-4 mb-0 text-center font-semibold dark:text-neutral-200">
                                    OR
                                </p>
                            </div>



                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Register;