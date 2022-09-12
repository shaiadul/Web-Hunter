import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import "./Navside.css";

const Navside = () => {

    return (
        <div className=''>
            {/* start header  */}
            <header className="absolute top-0 left-0 w-full z-50 px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 text-black shadow-xl">


                <div className="flex flex-wrap items-center justify-between py-6">
                    <div className="w-1/2 md:w-auto">

                        <Link to="#">
                            <img className='w-40' src="https://o.remove.bg/downloads/6ee166b6-eff3-475a-9f2d-318e78ce9662/hoo-removebg-preview.png" alt="" />
                        </Link>
                    </div>

                    <label htmlFor="menu-toggle" className="pointer-cursor md:hidden block"><svg className="fill-current text-black font-serif font-bold"
                        xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                        <title>menu</title>
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                    </svg></label>
                    {/* toggle menu */}
                    <input className="hidden" type="checkbox" id="menu-toggle" />

                    <div className="hidden md:block w-full md:w-auto" id="menu">
                        <nav
                            className="w-full bg-white md:bg-transparent rounded shadow-lg px-6 py-4 mt-4 text-center md:p-0 md:mt-0 md:shadow-none">
                            <ul className="md:flex items-center">
                                <li><a className="py-2 inline-block md:text-black md:hidden lg:block font-semibold" href="#">About Us</a></li>
                                <li className="md:ml-4"><a className="py-2 inline-block md:text-black md:px-2 font-semibold"
                                    href="#">Treatments</a></li>
                                <li className="md:ml-4"><a className="py-2 inline-block md:text-black md:px-2 font-semibold"
                                    href="#">Testimonials</a></li>
                                <li className="md:ml-4 md:hidden lg:block"><a className="py-2 inline-block md:text-black md:px-2 font-semibold"
                                    href="#">Blog</a></li>
                                <li className="md:ml-4"><a className="py-2 inline-block md:text-black md:px-2 font-semibold" href="#">Contact
                                    Us</a></li>
                                <li className="md:ml-6 mt-3 md:mt-0">
                                    <a className="inline-block font-semibold px-4 py-2 text-black bg-orange-500  md:text-black border  rounded"
                                        href="book-appointment.html">Client Portal</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
            {/* -- end header -- */}
        </div>
    );
};

export default Navside;