import React from 'react';
import logo from '../../Assets/logo.png';

const Navside = () => {
  return (
    <div className="navbar bg-white shadow-xl text-center text-slate-900">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className=" lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="purple" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-gray-200 rounded-box w-52 font-bold font-serif text-orange-500">
            <li><a>Home</a></li>
            <li><a>Service</a></li>
            <li><a>Packages</a></li>
            <li><a>Coverage</a></li>
            <li><a>Pay Bill</a></li>
            <li><a>Offer</a></li>
            <li><a>Support</a></li>
          </ul>
        </div>
        {/* logo */}
        <h2 className="pl-4 font-bold text-2xl text-center font-serif"><span className='text-orange-500'>W</span>eb<span className='text-orange-500'>||</span>Hunte<span className='text-orange-500'>r</span></h2>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-2 m-2 font-bold font-serif ">
          <li className='hover:text-orange-500 '><a>Home</a></li>
          <li className='hover:text-orange-500 '><a>Service</a></li>
          <li className='hover:text-orange-500 '><a>Packages</a></li>
          <li className='hover:text-orange-500 '><a>Coverage</a></li>
          <li className='hover:text-orange-500 '><a>Pay Bill</a></li>
          <li className='hover:text-orange-500 '><a>Offer</a></li>
          <li className='hover:text-orange-500 '><a>Support</a></li>
        </ul>
      </div>
      <div className="navbar-end">
        <p className="btn btn-md border-none shadow-orange-300 bg-orange-500 font-serif font-bold text-lg text-black lowercase">Client Portel</p>
        <p className="btn btn-md btn-outline border-none  shadow-orange-300 bg-orange-500 font-serif font-bold text-lg text-black lowercase">HOB</p>
      </div>
    </div>
  );
};

export default Navside;