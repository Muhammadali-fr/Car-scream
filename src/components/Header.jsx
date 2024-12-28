import React from 'react';
import { useNavigate } from 'react-router-dom';
import { HiBars3 } from "react-icons/hi2";
import { Link } from 'react-router-dom';
import { CiSearch } from "react-icons/ci";

function Header() {
    const navigate = useNavigate();



    return (
        <>

            {/* Header */}
            <div className="header backdrop-blur flex w-full mx-auto items-center justify-between py-4 px-8 fixed top-0 z-10 shadow-md">
                <Link to="/">
                    <h1 className="cursor-pointer text-3xl font-bold text-white">Carshape</h1>
                </Link>
                <div className="flex space-x-4 items-center">

                    <Link to="/sign-up">
                        <button className="hidden md:block bg-black px-5 py-2 text-white font-bold rounded hover:bg-white hover:text-black hover:border-white">
                            Sign Up
                        </button>
                    </Link>
                    <Link to="/login">
                        <button className="hidden md:block bg-black px-5 py-2 text-white font-bold rounded hover:bg-white hover:text-black hover:border-white">
                            Log in
                        </button>
                    </Link>
                    <div className="text-white flex items-center text-2xl md:hidden">
                        <HiBars3 />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Header;
