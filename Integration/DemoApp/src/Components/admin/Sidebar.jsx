import React from 'react'
import { useNavigate } from 'react-router-dom'

const Sidebar = ({ setActiveLink }) => {

    const handleClick = (link) => {
        setActiveLink(link)
    }

    const nav = useNavigate();
    return (
        <div className="flex h-screen flex-col min-w-[20vw] justify-between border-e bg-white">
            <div className="px-4 py-6">
                {/* <span className="grid h-10 w-32 place-content-center rounded-lg bg-gray-100 text-xs text-gray-600"> */}
                <div className='flex flex-row'>
                    <img src='/Images/mobile.png' className='w-8 mb-2 mt-1'></img>
                    <h6 onClick={() => nav("/")} className='leading-10 cursor-pointer'>PocketRefill</h6>
                </div>
                {/* </span> */}
                <ul className="mt-6 space-y-1">
                    <li>
                        <a
                            onClick={() => handleClick("link1")}
                            className="block rounded-lg px-4 py-2 hover:bg-gray-100 hover:text-gray-700 text-sm font-medium text-gray-500"
                        >
                            Dashboard
                        </a>
                    </li>
                    <li>
                        <a
                            onClick={() => handleClick("link2")}
                            className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                        >
                            Details
                        </a>
                    </li>
                    <li>
                        <a
                            onClick={() => handleClick("link3")}
                            className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                        >
                            Recharge History
                        </a>
                    </li>

                    <li>
                        <a
                            onClick={() => handleClick("link4")}
                            className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                        >
                            User Details
                        </a>
                    </li>

                </ul>
            </div>

            <div className="sticky inset-x-0 bottom-0 border-t border-gray-100">
                <a href="#" className="flex items-center gap-2 bg-white p-4 hover:bg-gray-50">
                    <img
                        alt=""
                        src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                        className="size-10 rounded-full object-cover"
                    />
                    <div>
                        <p className="text-xs">
                            <strong className="block font-medium">Admin</strong>

                            <span> admin1@Pocketrefill.com</span>
                        </p>
                    </div>
                </a>
            </div>
        </div>
    )
}

export default Sidebar