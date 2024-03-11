import React, { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toggleLogin } from '../config/GlobalSlice';

function Example() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownButtonRef = useRef(null);
    const dropdownMenuRef = useRef(null);
    const dispatch = useDispatch();
    const nav = useNavigate();


    const eventLogout = () => {
        dispatch(toggleLogin(false));
        nav("/")
    }

    useEffect(() => {
        function handleClickOutside(event) {
            if (
                dropdownButtonRef.current &&
                !dropdownButtonRef.current.contains(event.target) &&
                dropdownMenuRef.current &&
                !dropdownMenuRef.current.contains(event.target)
            ) {
                setIsDropdownOpen(false);
            }
        }

        window.addEventListener('click', handleClickOutside);

        return () => {
            window.removeEventListener('click', handleClickOutside);
        };
    }, []);

    function toggleDropdown() {
        setIsDropdownOpen(!isDropdownOpen);
    }

    return (
        <div className="relative z-50">
            <div className="bg-gray-100 flex items-center justify-center z-[100px] rounded-full">
                <div className="relative inline-block text-left">
                    <button
                        ref={dropdownButtonRef}
                        className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500"
                        onClick={toggleDropdown}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 36 36"><path fill="grey" d="M30.61 24.52a17.16 17.16 0 0 0-25.22 0a1.51 1.51 0 0 0-.39 1v6A1.5 1.5 0 0 0 6.5 33h23a1.5 1.5 0 0 0 1.5-1.5v-6a1.51 1.51 0 0 0-.39-.98" className="clr-i-solid clr-i-solid-path-1" /><circle cx="18" cy="10" r="7" fill="grey" className="clr-i-solid clr-i-solid-path-2" /><path fill="none" d="M0 0h36v36H0z" /></svg>
                    </button>
                    <div
                        ref={dropdownMenuRef}
                        className={`origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 ${isDropdownOpen ? '' : 'hidden'
                            }`}
                    >
                        <div className="py-2 p-2" role="menu" aria-orientation="vertical" aria-labelledby="dropdown-button">
                            <a
                                onClick={() => nav("/Profile")}
                                className="flex rounded-md px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 active:bg-blue-100 cursor-pointer"
                                role="menuitem"
                            >
                                Profile
                            </a>
                            <a
                                onClick={() => nav("/PaymentHistory")}
                                className="flex rounded-md px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 active:bg-blue-100 cursor-pointer"
                                role="menuitem"
                            >
                                Payment History
                            </a>
                            <a
                                onClick={eventLogout}
                                className="flex rounded-md px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 active:bg-blue-100 cursor-pointer"
                                role="menuitem"
                            >
                                Logout
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Example;
