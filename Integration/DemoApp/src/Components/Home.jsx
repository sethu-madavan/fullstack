import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
    const nav = useNavigate();
    return (
        <div>
            <div className="relative h-screen overflow-hidden bg-indigo-900">
                <img src="/assets/5.svg" className="absolute object-cover w-full h-full" />
                <div className="absolute inset-0 bg-black opacity-25">
                </div>
                <div className="container relative z-10 flex items-center px-6 py-32 mx-auto md:px-12 xl:py-40">
                    <div className="relative z-10 flex flex-col items-start lg:w-3/5 xl:w-2/5">
                        {/* <span className="font-bold text-yellow-400 ">
                            PokcetRefill
                        </span> */}
                        <h1 className="mt-4 text-6xl font-bold leading-tight text-white sm:text-6xl">
                            Recharge on the go with easy and savings!
                        </h1>
                        <a onClick={() => nav('/Viewplans')} className="block px-4 py-3 mt-10 text-lg font-bold text-gray-800 bg-white rounded-lg hover:bg-gray-100">
                            View Plans
                        </a>
                    </div>
                </div>
            </div>
            <section className="bg-gray-900 text-white" id="features">
                <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
                    <div className="mx-auto max-w-lg text-center">
                        <h2 className="text-3xl font-bold sm:text-4xl">Convenience at your fingertips</h2>

                        <p className="mt-4 text-gray-300">
                            Say goodbye to long queues and delays. Recharge your mobile in seconds with our app
                        </p>
                    </div>

                    <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        <a
                            className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
                            href="#"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24">
                                <path fill="#b614c2" d="M21 9h-6v13h-2v-6h-2v6H9V9H3V7h18m-9-5a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2c0-1.11.89-2 2-2" />
                            </svg>

                            <h2 className="mt-4 text-xl font-bold text-white">Accessibility</h2>

                            <p className="mt-1 text-sm text-gray-300">
                                Recharge hassle-free, anytime, anywhere. Stay connected effortlessly with our mobile recharge app.
                            </p>
                        </a>

                        <a
                            className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
                            href="#"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24.27" height="35" viewBox="0 0 355 512"><path fill="#b614c2" d="M261.519 261.73v-44.52h28.153l61.983-50.342a7.166 7.166 0 0 0 2.924-5.775V10.914a7.165 7.165 0 0 0-7.022-7.163L159.25.002a7.139 7.139 0 0 0-6.302 3.503l-49.325 83.012c-2.225 3.055-.542 9.915 2.36 42.126c-19.534-.063-21.89-.873-25.035 2.604L3.156 208.015C.065 210.59 0 213.115 0 213.115l5.118 157.631h50.155V512h184.245l57.167-39.43a7.167 7.167 0 0 0 3.2-5.967v-160.96a7.165 7.165 0 0 0-7.165-7.165h-61.507c22.186-25.547 30.31-31.113 30.306-36.748M163.136 14.412l167.716 3.339l-60.9 64.347H122.908zM18.39 213.115l70.458-69.53l17.92.435l3.778 69.095zm221.128 280.24V366.14l46.037-39.734V462.76zm39.863-180.547l-57.644 49.75H168.89l49.558-49.75zm-32.192-53.806l-67.475 75.743l2.483-117.535h64.992zm42.83-64.66l1.7-112.244l48.53-53.43v128.796z"/></svg>

                            <h2 className="mt-4 text-xl font-bold text-white">Easy of Use</h2>

                            <p className="mt-1 text-sm text-gray-300">
                                Convenience at your fingertips. Recharge your mobile on-the-go with our user-friendly app.
                            </p>
                        </a>

                        <a
                            className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
                            href="#"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24"><path fill="#b614c2" d="M16 11q.425 0 .713-.288T17 10q0-.425-.288-.712T16 9q-.425 0-.712.288T15 10q0 .425.288.713T16 11M8 9h5V7H8zM4.5 21q-.85-2.85-1.675-5.687T2 9.5q0-2.3 1.6-3.9T7.5 4h5q.725-.95 1.763-1.475T16.5 2q.625 0 1.063.438T18 3.5q0 .125-.125.575q-.1.275-.187.563t-.138.587L19.825 7.5H22v6.975l-2.825.925L17.5 21H12v-2h-2v2z"/></svg>
                            <h2 className="mt-4 text-xl font-bold text-white">Savings</h2>

                            <p className="mt-1 text-sm text-gray-300">
                                Unlock exclusive offers and discounts on every recharge. Experience savings like never before!
                            </p>
                        </a>

                        <a
                            className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
                            href="#"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 48 48"><path fill="#b614c2" stroke="#b614c2" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M33 41c-5.48 3.003-10 3-16 1c-6.076-2.026-10-9-10-14c0-2.744 4.114-4.372 5.529-4.85a.687.687 0 0 0 .471-.648V15a3.5 3.5 0 1 1 7 0v-2.5a3.5 3.5 0 1 1 7 0V15a3.5 3.5 0 1 1 7 0V7.5a3.5 3.5 0 0 1 7 0v20.732c0 2.472-.592 4.928-2.038 6.934C37.492 37.205 35.357 39.708 33 41"/></svg>

                            <h2 className="mt-4 text-xl font-bold text-white">Efficiency</h2>

                            <p className="mt-1 text-sm text-gray-300">
                                Say goodbye to long queues and delays. Recharge your mobile in seconds with our app."
                            </p>
                        </a>
                        <a
                            className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
                            href="#"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24"><path fill="#b614c2" d="M6 23q-.825 0-1.412-.587T4 21V3q0-.825.588-1.412T6 1h10q.825 0 1.413.588T18 3v4h-2V6H6v12h10v-1h2v4q0 .825-.587 1.413T16 23zm8.95-7l-4.25-4.25l1.4-1.4l2.85 2.85l5.65-5.65l1.4 1.4z"/></svg>

                            <h2 className="mt-4 text-xl font-bold text-white">User Satisfaction</h2>

                            <p className="mt-1 text-sm text-gray-300">
                                Join millions of satisfied users. Experience the simplicity of mobile recharging with us.
                            </p>
                        </a>

                        <a
                            className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
                            href="#"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24"><path fill="#b614c2" d="M12 12.5a3.5 3.5 0 1 0 0 7a3.5 3.5 0 0 0 0-7M10.5 16a1.5 1.5 0 1 1 3 0a1.5 1.5 0 0 1-3 0"/><path fill="#b614c2" d="M17.526 5.116L14.347.659L2.658 9.997L2.01 9.99V10H1.5v12h21V10h-.962l-1.914-5.599zM19.425 10H9.397l7.469-2.546l1.522-.487zM15.55 5.79L7.84 8.418l6.106-4.878zM3.5 18.169v-4.34A3.008 3.008 0 0 0 5.33 12h13.34a3.009 3.009 0 0 0 1.83 1.83v4.34A3.009 3.009 0 0 0 18.67 20H5.332A3.01 3.01 0 0 0 3.5 18.169"/></svg>

                            <h2 className="mt-4 text-xl font-bold text-white">Value for Money</h2>

                            <p className="mt-1 text-sm text-gray-300">
                                Recharge, save, repeat. Get the best value for your money with our exclusive deals.
                            </p>
                        </a>
                    </div>

                    {/* <div className="mt-12 text-center">
                        <a
                            href="#"
                            className="inline-block rounded bg-pink-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-pink-700 focus:outline-none focus:ring focus:ring-yellow-400"
                        >
                            Get Started Today
                        </a>
                    </div> */}
                </div>
            </section>
        </div>
    );
}