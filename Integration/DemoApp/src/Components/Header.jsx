import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Prof from "./Profiledrop";

const Header = () => {

    const nav = useNavigate();
    const dispatch = useDispatch();

    const { isLoggedIn } = useSelector(state => state.global);



    return (
        <header className="text-gray-600 bg-Hcol h-[70px]">
            <div className="container mx-auto flex flex-wrap flex-col md:flex-row items-center justify-center">
                <a onClick={() => nav('/')} className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 pt-3 cursor-pointer">
                    <img src="/Images/mobile.png" width={40}></img>
                    <span className="ml-3 text-xl text-white">PocketRefill</span>
                </a>
                <nav className="md:ml-auto md:mr-auto  flex flex-wrap items-center text-white justify-center">
                    <a className="mr-5 text-white cursor-pointer" onClick={() => nav("/Viewplans")}>Recharge</a>
                    <a className="mr-5 text-white cursor-pointer" href='#features'>Features</a>
                    <a className="mr-5 text-white cursor-pointer" href='#foot'>Contact</a>
                </nav>
                <div>
                    {
                        isLoggedIn === true ? <Prof /> : <a onClick={() => nav("/Login")} className="relative px-5 py-3 overflow-hidden font-medium cursor-pointer text-gray-600 bg-gray-100 border border-gray-100 rounded-lg shadow-inner group">
                            <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
                            <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
                            <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                            <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                            <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-slate-400 opacity-0 group-hover:opacity-100"></span>
                            <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease">Log In</span>
                        </a>
                    }
                </div>
            </div>
        </header>
    )
}

export default Header