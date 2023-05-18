import React from 'react';
import logo from '../../../src/assets/images/logo/1.png'
const Header = () => {
    return (
        <div className="navbar ">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow  rounded-box w-52">
                        <li><a>Home</a></li>
                        <li><a>All Toys</a></li>
                        <li><a>My Toys</a></li>
                        <li><a>Add A Toy</a></li>
                        <li><a>Blogs</a></li>
                    </ul>
                </div>
                <a className=" normal-case text-xl"><img src={logo} alt="logo" /></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 font-semibold text-2xl">
                    <li><a>Home</a></li>
                    <li><a>All Toys</a></li>
                    <li><a>My Toys</a></li>
                    <li><a>Add A Toy</a></li>
                    <li><a>Blogs</a></li>
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Login</a>
            </div>
        </div>
    );
};

export default Header;