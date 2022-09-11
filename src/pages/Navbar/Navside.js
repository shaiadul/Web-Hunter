import React, { useState } from 'react';
import logo from '../../Assets/logo.png';
import { GoThreeBars } from 'react-icons/go';
import { MdDashboardCustomize, MdOutlineClose } from 'react-icons/md';
import { NavLink } from 'react-router-dom';

const Navside = () => {
  const [toggle, setToggle] = useState(false);
  // toggle function
  const navBtnHndle = () => {
    setToggle(!toggle)
}
  return (
    <div className='header-container fixed top-0 w-full '>
            <nav
                className='flex justify-center items-start  md:justify-between md:px-32 px-5 md:items-center'
            >
                {/* {
                    // user &&
                    <label for="dashboard-drower" tabindex="1" class="md:hidden absolute left-6  top-[22px]">
                        <MdDashboardCustomize className='h-5 w-5'></MdDashboardCustomize>
                    </label>
                } */}
                <img className='sm:w-28 w-20' src={logo} alt="" />
                <span onChange={navBtnHndle} className='md:hidden absolute right-6  top-[22px]'>{toggle ? <MdOutlineClose></MdOutlineClose> : <GoThreeBars></GoThreeBars>}</span>
                <ul onChange={navBtnHndle} className={`flex flex-col p-3 font-serif font-bold text-center md:justify-end z-10  md:flex-row md:top-0 left-0 w-full md:relative md:opacity-100  absolute  py-4 md:py-0 duration-500 ${toggle ? " opacity-100  top-14" : " top-[-250px] opacity-0"}`}>
                    <NavLink className={({ isActive }) => (isActive ? 'activeLink' : 'navLink')} to={"/"}>Home</NavLink>
                    
                    <NavLink className={({ isActive }) => (isActive ? 'activeLink' : 'navLink')} to={"/myPortfolio"}>My Portfolio</NavLink>
                    <NavLink className={({ isActive }) => (isActive ? 'activeLink' : 'navLink')} to={"/blogs"}>Blogs</NavLink>

                   
                        <button  className='uppercase my-0.5 md:my-0 text-left   mx-auto md:mx-0 md:pb-0.5' >LogOut</button>
                        
                        <NavLink className={({ isActive }) => (isActive ? 'activeLink' : 'navLink')} to={"/login"}>Login</NavLink>
                    
                </ul>
            </nav>
        </div>
  );
};

export default Navside;