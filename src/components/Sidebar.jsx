import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Sidebar() {
    const location = useLocation(); // Get the current route

    return (
        <div className=" sidebar hidden md:flex w-1/6 h-screen bg-white border-r rounded fixed top-0 pt-16 left-0 flex-col">
            {/* Sidebar content */}
            <ul className="text-white mt-8 flex-grow">
                <Link to='/'>
                    <li className={`font-bold cursor-pointer text-white border border-white p-4 rounded mx-5 ${location.pathname === '/' ? 'bg-gray-700 text-red' : ' bg-gray-400 hover:bg-gray-700'}`}>
                        Home
                    </li>
                </Link>
                <Link to='/logo'>
                    <li className=" my-2 font-bold cursor-pointer bg-gray-400 text-white border border-white hover:bg-gray-700 p-4 rounded mx-5">
                        Logo
                    </li>
                </Link>
                <Link>
                    <li className="font-bold cursor-pointer bg-gray-400 text-white border border-white hover:bg-gray-700 p-4 rounded mx-5">
                        Dashboard
                    </li>
                </Link>
            </ul>
            <Link to='/contact'>
                <li
                    className={`text-center text-white list-none cursor-pointer p-4 rounded mx-5 mb-5 ${location.pathname === '/contact'
                        ? 'bg-gray-700 ' // Active styles
                        : 'bg-gray-400' // Default styles
                        }`}
                >
                    Contact
                </li>
            </Link>
        </div>
    );
}

export default Sidebar;
