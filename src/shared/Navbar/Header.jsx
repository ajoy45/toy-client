import React, { useContext } from 'react';
import logo from '../../../src/assets/images/logo/1.png'
import { Link } from 'react-router-dom';
import { authContext } from '../../Auth/AuthProvider';
const Header = () => {
    const{user,logOut}=useContext(authContext);
    const handelLogOut=()=>{
        logOut()
        .then(() => {
            console.log('log out successful')
          }).catch((error) => {
            
          });
          
    }
    console.log(user)
    return (
        <div className="navbar ">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow  rounded-box w-52">
                        <li><Link to='/'><a>Home</a></Link></li>
                        <li><Link to='/allToy'><a>All Toys</a></Link></li>
                        <li><Link to='/myToy'><a>My Toys</a></Link></li>
                        <Link to='/addToy'><a>Add Toy</a></Link>
                        <li><Link to='/blog'><a>Blogs</a></Link></li>
                    </ul>
                </div>
                <a className=" normal-case text-xl"><img src={logo} alt="logo" /></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 font-semibold text-2xl">
                    <li><Link to='/'><a>Home</a></Link></li>
                    <li><Link to='/allToy'><a>All Toys</a></Link></li>
                    <li><Link to='/myToy'><a>My Toys</a></Link></li>
                    <li><Link to='/addToy'><a>Add Toy</a></Link></li>
                    <li><Link to='/blog'><a>Blogs</a></Link></li>
                    <li onClick={handelLogOut}><a>Logout</a></li>
                </ul>
            </div>
            <div className="navbar-end">
               {
                user?<div className="avatar">
                <div className="w-12 rounded-full">
                  <img title={user?.displayName} src={user?.photoURL} />
                </div>
               </div>:<Link to='/login'> <a className="btn">Login</a></Link>
               }
               
            </div>
        </div>
    );
};

export default Header;