import React from 'react'
import { useNavigate } from 'react-router-dom'
const Header = () => {
    const nav = useNavigate();
    return (
        <header className="text-gray-600 body-fon bg-Hcol ">
            <div className="container mx-auto flex flex-wrap flex-col md:flex-row items-center justify-center">
                <a onClick={() => nav('/')} className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 pt-3 cursor-pointer">
                    <img src="/Images/mobile.png" width={40}></img>
                    <span className="ml-3 text-xl text-white">PocketRefill</span>
                </a>
                <nav className="md:ml-auto md:mr-auto  flex flex-wrap items-center text-white justify-center">
                    <a className="mr-5 text-white cursor-pointer" onClick={() => nav('/Viewplans')}>Plans</a>
                    <a className="mr-5 text-white cursor-pointer" href='#features'>Features</a>
                    <a className="mr-5 text-white cursor-pointer" onClick={() => nav('/')}>Recharge</a>
                    <a className="mr-5 text-white cursor-pointer" href='#foot'>Contact</a>
                </nav>
                <div>
                    {/* <button onClick={() => nav('/')} className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Logout
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </button> */}
                    <div className='flex flex-row'>
                        <div className='mr-[17.5px]'>
                            <a onClick={() => nav('/admin-dash')}>
                                <svg className='hover:decoration-white active:decoration-slate-200 cursor-pointer' xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24"><path fill="none" stroke="white" stroke-width="0.8" d="M8 11A5 5 0 1 0 8 1a5 5 0 0 0 0 10Zm5.023 2.023C11.772 11.76 10.013 11 8 11c-4 0-7 3-7 7v5h7m2-3.5a2.5 2.5 0 1 0 5.002-.002A2.5 2.5 0 0 0 10 19.5zM23 15l-3-3l-6 6m3.5-3.5l3 3z" /></svg>
                            </a>
                        </div>
                        <div className='mr-[19px] cursor-pointer'>
                            <a onClick={() => nav('/Profile')}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24"><g fill="none" stroke="white"><path stroke-linejoin="round" d="M4 18a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z" /><circle cx="12" cy="7" r="3" /></g></svg>
                            </a>
                        </div>
                        <div className='cursor-pointer'>
                            <a onClick={()=> nav('/Login')}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24"><g fill="none" stroke="white" stroke-linecap="round" stroke-width="1.5"><path stroke-linejoin="round" d="M2.001 11.999h14m0 0l-3.5-3m3.5 3l-3.5 3"/><path d="M9.002 7c.012-2.175.109-3.353.877-4.121C10.758 2 12.172 2 15 2h1c2.829 0 4.243 0 5.122.879C22 3.757 22 5.172 22 8v8c0 2.828 0 4.243-.878 5.121C20.242 22 18.829 22 16 22h-1c-2.828 0-4.242 0-5.121-.879c-.768-.768-.865-1.946-.877-4.121"/></g></svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header