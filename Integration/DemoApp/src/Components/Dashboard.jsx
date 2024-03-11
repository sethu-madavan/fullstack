import React from 'react'

const
    Dashboard = () => {
        return (
            <div classNameName="justify-center" >
                <div className="flex items-center justify-center p-4 ml-2">
                    <div className="flex flex-col max-w-7xl w-full md:w-[100%]">
                        <div className="flex flex-col lg:flex-row ">
                            <div className="bg-white shadow-lg rounded-xl flex items-start h-32 w-[90%] lg:w-1/2 justify-center py-4 px-8 mx-4 my-2">
                                <div className="flex items-center justify-start w-full">
                                    <div className="flex-col w-[85%]">
                                        <div className="text-sm font-medium text-violet-600 my-2">Total Income</div>
                                        <div className="className flex items-center">
                                            <div className="text-3xl font-bold text-gray-700">$2,30,568</div>
                                            <div className="flex items-center justify-between mx-2 px-0.5 py-0.5 rounded-xl text-green-500 font-medium ">
                                                <div className="text-xs bg-green-200 px-2 rounded-lg">+ 78%</div>
                                            </div>
                                        </div>
                                        <div className="w-full h-1 rounded bg-gray-300 my-1">
                                            <div className="w-[78%] h-1 rounded bg-green-500"></div>
                                        </div>
                                        <div className="text-xs font-medium text-gray-400 ">Weekly Goal</div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white shadow-lg rounded-xl flex items-start h-32 w-[90%] lg:w-1/2 justify-center py-4 px-8 mx-4 my-2">
                                <div className="flex items-center justify-start w-full">
                                    <div className="flex-col w-[85%]">
                                        <div className="text-sm font-medium text-violet-600 my-2">Engaged Users</div>
                                        <div className="className flex items-center">
                                            <div className="text-3xl font-bold text-gray-700">32.78%</div>
                                            <div className="flex items-center justify-between mx-2 px-0.5 py-0.5 rounded-xl text-red-500 font-medium ">
                                                <div className="text-xs bg-red-200 px-2 rounded-lg">- 7%</div>
                                            </div>
                                        </div>
                                        <div className="w-full h-1 rounded bg-gray-300 my-1">
                                            <div className="w-[33%] h-1 rounded bg-red-500"></div>
                                        </div>
                                        <div className="text-xs font-medium text-gray-400 ">Daily Goal</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col lg:flex-row ">
                            <div className="bg-white shadow-lg rounded-xl flex items-start max-w-1/2 w-[90%] lg:w-1/2 justify-center py-4 px-4 mx-4 my-2">
                                <div className="flex items-center justify-start w-full">
                                    <div className="flex-col w-[85%]">
                                        <div className="text-sm font-medium text-violet-600 my-2">Weekly Income</div>
                                        <div className="className flex items-center">
                                            <div className="text-3xl font-bold text-gray-700">$6,568</div>
                                            <div className="flex items-center justify-between mx-2 px-0.5 py-0.5 rounded-xl text-green-500 font-medium ">
                                                <div className="text-xs bg-green-200 px-2 rounded-lg">+ 54%</div>
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-between mt-4 ">
                                            <div className="flex-col">
                                                <div className="h-16 w-6 rounded-tr rounded-tl bg-gray-100 mx-2">
                                                    <div className="h-[20%] w-6 rounded-tr rounded-tl bg-green-300"></div>
                                                </div>
                                                <div className="text-xs font-medium ml-2 text-gray-500">Mon</div>
                                            </div>
                                            <div className="flex-col">
                                                <div className="h-16 w-6 rounded-tr rounded-tl bg-gray-100 mx-2">
                                                    <div className="h-[60%] w-6 rounded-tr rounded-tl bg-green-300"></div>
                                                </div>
                                                <div className="text-xs font-medium ml-2 text-gray-500">Tue</div>
                                            </div>
                                            <div className="flex-col">
                                                <div className="h-16 w-6 rounded-tr rounded-tl bg-gray-100 mx-2">
                                                    <div className="h-[70%] w-6 rounded-tr rounded-tl bg-green-300"></div>
                                                </div>
                                                <div className="text-xs font-medium ml-2 text-gray-500">Wed</div>
                                            </div>
                                            <div className="flex-col">
                                                <div className="h-16 w-6 rounded-tr rounded-tl bg-gray-100 mx-2">
                                                    <div className="h-[44%] w-6 rounded-tr rounded-tl bg-green-300"></div>
                                                </div>
                                                <div className="text-xs font-medium ml-2 text-gray-500">Thu</div>
                                            </div>
                                            <div className="flex-col">
                                                <div className="h-16 w-6 rounded-tr rounded-tl bg-gray-100 mx-2">
                                                    <div className="h-[87%] w-6 rounded-tr rounded-tl bg-green-300"></div>
                                                </div>
                                                <div className="text-xs font-medium ml-2 text-gray-500">Fri</div>
                                            </div>
                                            <div className="flex-col">
                                                <div className="h-16 w-6 rounded-tr rounded-tl bg-gray-100 mx-2">
                                                    <div className="h-[55%] w-6 rounded-tr rounded-tl bg-green-300"></div>
                                                </div>
                                                <div className="text-xs font-medium ml-2 text-gray-500">Sat</div>
                                            </div>
                                            <div className="flex-col">
                                                <div className="h-16 w-6 rounded-tr rounded-tl bg-gray-100 mx-2">
                                                    <div className="h-[34%] w-6 rounded-tr rounded-tl bg-green-300"></div>
                                                </div>
                                                <div className="text-xs font-medium ml-2 text-gray-500">Sun</div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="bg-white shadow-lg rounded-xl flex items-start max-w-1/2 w-[90%] lg:w-1/2 justify-center py-4 px-4 mx-4 my-2">
                                <div className="flex items-center justify-start w-full">
                                    <div className="flex-col w-[85%]">
                                        <div className="text-sm font-medium text-violet-600 my-2">Weekly Users</div>
                                        <div className="className flex items-center">
                                            <div className="text-3xl font-bold text-gray-700">16,568</div>
                                            <div className="flex items-center justify-between mx-2 px-0.5 py-0.5 rounded-xl text-red-500 font-medium ">
                                                <div className="text-xs bg-red-200 px-2 rounded-lg">- 8.7%</div>
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-between mt-4 ">
                                            <div className="flex-col">
                                                <div className="h-16 w-6 rounded-tr rounded-tl bg-gray-100 mx-2">
                                                    <div className="h-[79%] w-6 rounded-tr rounded-tl bg-violet-300"></div>
                                                </div>
                                                <div className="text-xs font-medium ml-2 text-gray-500">Mon</div>
                                            </div>
                                            <div className="flex-col">
                                                <div className="h-16 w-6 rounded-tr rounded-tl bg-gray-100 mx-2">
                                                    <div className="h-[20%] w-6 rounded-tr rounded-tl bg-violet-300"></div>
                                                </div>
                                                <div className="text-xs font-medium ml-2 text-gray-500">Tue</div>
                                            </div>
                                            <div className="flex-col">
                                                <div className="h-16 w-6 rounded-tr rounded-tl bg-gray-100 mx-2">
                                                    <div className="h-[30%] w-6 rounded-tr rounded-tl bg-violet-300"></div>
                                                </div>
                                                <div className="text-xs font-medium ml-2 text-gray-500">Wed</div>
                                            </div>
                                            <div className="flex-col">
                                                <div className="h-16 w-6 rounded-tr rounded-tl bg-gray-100 mx-2">
                                                    <div className="h-[44%] w-6 rounded-tr rounded-tl bg-violet-300"></div>
                                                </div>
                                                <div className="text-xs font-medium ml-2 text-gray-500">Thu</div>
                                            </div>
                                            <div className="flex-col">
                                                <div className="h-16 w-6 rounded-tr rounded-tl bg-gray-100 mx-2">
                                                    <div className="h-[67%] w-6 rounded-tr rounded-tl bg-violet-300"></div>
                                                </div>
                                                <div className="text-xs font-medium ml-2 text-gray-500">Fri</div>
                                            </div>
                                            <div className="flex-col">
                                                <div className="h-16 w-6 rounded-tr rounded-tl bg-gray-100 mx-2">
                                                    <div className="h-[25%] w-6 rounded-tr rounded-tl bg-violet-300"></div>
                                                </div>
                                                <div className="text-xs font-medium ml-2 text-gray-500">Sat</div>
                                            </div>
                                            <div className="flex-col">
                                                <div className="h-16 w-6 rounded-tr rounded-tl bg-gray-100 mx-2">
                                                    <div className="h-[64%] w-6 rounded-tr rounded-tl bg-violet-300"></div>
                                                </div>
                                                <div className="text-xs font-medium ml-2 text-gray-500">Sun</div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-row ml-[5rem]'>
                    <div className="relative w-full p-4 overflow-hidden bg-white shadow-lg rounded-xl md:w-60">
                        <p className="mb-4 text-xl font-medium text-gray-600">
                            Top Users
                        </p>
                        <div className="grid grid-cols-3 gap-4">
                            <div className="flex flex-col items-center">
                                <div className="relative">
                                    <a href="#" className="relative block">
                                        <img alt="profil" src="/Images/img1.jpg" className="mx-auto object-cover rounded-full h-10 w-10 " />
                                    </a>
                                    <svg width="10" height="10" fill="currentColor" className="absolute bottom-0 right-0 w-4 h-4 p-1 -mx-1 -my-1 text-white bg-blue-600 rounded-full fill-current" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1671 566q0 40-28 68l-724 724-136 136q-28 28-68 28t-68-28l-136-136-362-362q-28-28-28-68t28-68l136-136q28-28 68-28t68 28l294 295 656-657q28-28 68-28t68 28l136 136q28 28 28 68z">
                                        </path>
                                    </svg>
                                </div>
                                <span className="mt-2 text-xs text-gray-600">
                                    Sethu Madavan D
                                </span>
                            </div>
                            <div className="flex flex-col items-center">
                                <div className="relative">
                                    <a href="#" className="relative block">
                                        <img alt="profil" src="/Images/img2.jpg" className="mx-auto object-cover rounded-full h-10 w-10 " />
                                    </a>
                                    <svg width="10" height="10" fill="currentColor" className="absolute bottom-0 right-0 w-4 h-4 p-1 -mx-1 -my-1 text-white bg-blue-600 rounded-full fill-current" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1671 566q0 40-28 68l-724 724-136 136q-28 28-68 28t-68-28l-136-136-362-362q-28-28-28-68t28-68l136-136q28-28 68-28t68 28l294 295 656-657q28-28 68-28t68 28l136 136q28 28 28 68z">
                                        </path>
                                    </svg>
                                </div>
                                <span className="mt-2 text-xs text-gray-600">
                                    Shree Varshan G
                                </span>
                            </div>
                            <div className="flex flex-col items-center">
                                <div className="relative">
                                    <a href="#" className="relative block">
                                        <img alt="profil" src="/Images/img3.jpg" className="mx-auto object-cover rounded-full h-10 w-10 " />
                                    </a>
                                    <svg width="10" height="10" fill="currentColor" className="absolute bottom-0 right-0 w-4 h-4 p-1 -mx-1 -my-1 text-white bg-blue-600 rounded-full fill-current" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1671 566q0 40-28 68l-724 724-136 136q-28 28-68 28t-68-28l-136-136-362-362q-28-28-28-68t28-68l136-136q28-28 68-28t68 28l294 295 656-657q28-28 68-28t68 28l136 136q28 28 28 68z">
                                        </path>
                                    </svg>
                                </div>
                                <span className="mt-2 text-xs text-gray-600">
                                    Elangovan
                                </span>
                            </div>
                            <div className="flex flex-col items-center">
                                <div className="relative">
                                    <a href="#" className="relative block">
                                        <img alt="profil" src="/Images/img6.jpg" className="mx-auto object-cover rounded-full h-10 w-10 " />
                                    </a>
                                    <svg width="10" height="10" fill="currentColor" className="absolute bottom-0 right-0 w-4 h-4 p-1 -mx-1 -my-1 text-white bg-blue-600 rounded-full fill-current" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1671 566q0 40-28 68l-724 724-136 136q-28 28-68 28t-68-28l-136-136-362-362q-28-28-28-68t28-68l136-136q28-28 68-28t68 28l294 295 656-657q28-28 68-28t68 28l136 136q28 28 28 68z">
                                        </path>
                                    </svg>
                                </div>
                                <span className="mt-2 text-xs text-gray-600">
                                    Sundara Krishnan
                                </span>
                            </div>
                            <div className="flex flex-col items-center">
                                <div className="relative">
                                    <a href="#" className="relative block">
                                        <img alt="profil" src="/Images/img5.jpg" className="mx-auto object-cover rounded-full h-10 w-10 " />
                                    </a>
                                    <svg width="10" height="10" fill="currentColor" className="absolute bottom-0 right-0 w-4 h-4 p-1 -mx-1 -my-1 text-white bg-blue-600 rounded-full fill-current" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1671 566q0 40-28 68l-724 724-136 136q-28 28-68 28t-68-28l-136-136-362-362q-28-28-28-68t28-68l136-136q28-28 68-28t68 28l294 295 656-657q28-28 68-28t68 28l136 136q28 28 28 68z">
                                        </path>
                                    </svg>
                                </div>
                                <span className="mt-2 text-xs text-gray-600 ">
                                    Sanjeevi C S
                                </span>
                            </div>
                            <div className="flex flex-col items-center">
                                <div className="relative">
                                    <a href="#" className="relative block">
                                        <img alt="profil" src="/Images/img4.jpg" className="mx-auto object-cover rounded-full h-10 w-10 " />
                                    </a>
                                    <svg width="10" height="10" fill="currentColor" className="absolute bottom-0 right-0 w-4 h-4 p-1 -mx-1 -my-1 text-white bg-blue-600 rounded-full fill-current" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1671 566q0 40-28 68l-724 724-136 136q-28 28-68 28t-68-28l-136-136-362-362q-28-28-28-68t28-68l136-136q28-28 68-28t68 28l294 295 656-657q28-28 68-28t68 28l136 136q28 28 28 68z">
                                        </path>
                                    </svg>
                                </div>
                                <span className="mt-2 text-xs text-gray-600">
                                    Siddhesh Agarwal
                                </span>
                            </div>
                        </div>
                    </div>
                    <div>
                        {/* <div class="relative p-4 overflow-hidden text-gray-700 bg-white shadow-lg rounded-xl w-60 md:w-72 ml-[80px]">
                            <a href="#" class="block w-full h-full">
                                <div class="w-full">
                                    <p class="mb-4 text-2xl font-light text-gray-700 ">
                                        Task Progress
                                    </p>
                                    <div class="flex items-center justify-between text-sm text-gray-400">
                                        <p>
                                            Design
                                        </p>
                                        <p>
                                            3/8
                                        </p>
                                    </div>
                                    <div class="w-full h-2 mb-4 bg-green-100 rounded-full">
                                        <div class="w-1/3 h-full text-xs text-center text-white bg-green-400 rounded-full">
                                        </div>
                                    </div>
                                    <div class="flex items-center justify-between text-sm text-gray-400">
                                        <p>
                                            Development
                                        </p>
                                        <p>
                                            6/10
                                        </p>
                                    </div>
                                    <div class="w-full h-2 mb-4 bg-indigo-100 rounded-full">
                                        <div class="w-2/3 h-full text-xs text-center text-white bg-indigo-400 rounded-full">
                                        </div>
                                    </div>
                                    <div class="flex items-center justify-between text-sm text-gray-400">
                                        <p>
                                            DevOps
                                        </p>
                                        <p>
                                            2/8
                                        </p>
                                    </div>
                                    <div class="w-full h-2 mb-4 bg-blue-100 rounded-full">
                                        <div class="w-1/4 h-full text-xs text-center text-white bg-blue-400 rounded-full">
                                        </div>
                                    </div>
                                    <div class="flex items-center justify-between text-sm text-gray-400">
                                        <p>
                                            Marketing
                                        </p>
                                        <p>
                                            8/8
                                        </p>
                                    </div>
                                    <div class="w-full h-2 bg-pink-100 rounded-full">
                                        <div class="w-full h-full text-xs text-center text-white bg-pink-400 rounded-full">
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div> */}
                    </div>
                </div>
                <script src="https://cdn.tailwindcss.com"></script>

            </div>
        )
    }

export default
    Dashboard

// import React from 'react'

// const Dashboard = () => {
//   return (
//     <div>
//         <div class="grid grid-cols-12 gap-6 mt-5">
//                                     <a class="transform  hover:scale-105 transition duration-300 shadow-xl rounded-lg col-span-12 sm:col-span-6 xl:col-span-3 intro-y bg-white"
//                                         href="#">
//                                         <div class="p-5">
//                                             <div class="flex justify-between">
//                                                 <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 text-blue-400"
//                                                     fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                                                     <path stroke-linecap="round" stroke-linejoin="round"
//                                                         stroke-width="2"
//                                                         d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
//                                                 </svg>
//                                                 <div
//                                                     class="bg-green-500 rounded-full h-6 px-2 flex justify-items-center text-white font-semibold text-sm">
//                                                     <span class="flex items-center">30%</span>
//                                                 </div>
//                                             </div>
//                                             <div class="ml-2 w-full flex-1">
//                                                 <div>
//                                                     <div class="mt-3 text-3xl font-bold leading-8">4.510</div>

//                                                     <div class="mt-1 text-base text-gray-600">Item Sales</div>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </a>
//                                     <a class="transform  hover:scale-105 transition duration-300 shadow-xl rounded-lg col-span-12 sm:col-span-6 xl:col-span-3 intro-y bg-white"
//                                         href="#">
//                                         <div class="p-5">
//                                             <div class="flex justify-between">
//                                                 <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 text-yellow-400"
//                                                     fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                                                     <path stroke-linecap="round" stroke-linejoin="round"
//                                                         stroke-width="2"
//                                                         d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
//                                                 </svg>
//                                                 <div
//                                                     class="bg-red-500 rounded-full h-6 px-2 flex justify-items-center text-white font-semibold text-sm">
//                                                     <span class="flex items-center">30%</span>
//                                                 </div>
//                                             </div>
//                                             <div class="ml-2 w-full flex-1">
//                                                 <div>
//                                                     <div class="mt-3 text-3xl font-bold leading-8">4.510</div>

//                                                     <div class="mt-1 text-base text-gray-600">Item Sales</div>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </a>
//                                     <a class="transform  hover:scale-105 transition duration-300 shadow-xl rounded-lg col-span-12 sm:col-span-6 xl:col-span-3 intro-y bg-white"
//                                         href="#">
//                                         <div class="p-5">
//                                             <div class="flex justify-between">
//                                                 <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 text-pink-600"
//                                                     fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                                                     <path stroke-linecap="round" stroke-linejoin="round"
//                                                         stroke-width="2"
//                                                         d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
//                                                     <path stroke-linecap="round" stroke-linejoin="round"
//                                                         stroke-width="2"
//                                                         d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
//                                                 </svg>
//                                                 <div
//                                                     class="bg-yellow-500 rounded-full h-6 px-2 flex justify-items-center text-white font-semibold text-sm">
//                                                     <span class="flex items-center">30%</span>
//                                                 </div>
//                                             </div>
//                                             <div class="ml-2 w-full flex-1">
//                                                 <div>
//                                                     <div class="mt-3 text-3xl font-bold leading-8">4.510</div>

//                                                     <div class="mt-1 text-base text-gray-600">Item Sales</div>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </a>
//                                     <a class="transform  hover:scale-105 transition duration-300 shadow-xl rounded-lg col-span-12 sm:col-span-6 xl:col-span-3 intro-y bg-white"
//                                         href="#">
//                                         <div class="p-5">
//                                             <div class="flex justify-between">
//                                                 <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 text-green-400"
//                                                     fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                                                     <path stroke-linecap="round" stroke-linejoin="round"
//                                                         stroke-width="2"
//                                                         d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
//                                                 </svg>
//                                                 <div
//                                                     class="bg-blue-500 rounded-full h-6 px-2 flex justify-items-center text-white font-semibold text-sm">
//                                                     <span class="flex items-center">30%</span>
//                                                 </div>
//                                             </div>
//                                             <div class="ml-2 w-full flex-1">
//                                                 <div>
//                                                     <div class="mt-3 text-3xl font-bold leading-8">4.510</div>

//                                                     <div class="mt-1 text-base text-gray-600">Item Sales</div>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </a>
//                                 </div>
//     </div>
//   )
// }

// export default Dashboard