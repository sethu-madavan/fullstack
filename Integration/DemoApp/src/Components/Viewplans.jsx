// import React, { useState } from 'react';

// const Viewplans = () => {
//     const [openTab, setOpenTab] = useState(1);

//     return (
//         <div className="bg-gray-100 font-sans flex h-screen items-center justify-center">
//             <div className="p-8">
//                 <div className="max-w-md mx-auto">
//                     <div className="mb-4 flex space-x-4 p-2 bg-white rounded-lg shadow-md">
//                         <button onClick={() => setOpenTab(1)} className={`flex-1 py-2 px-4 rounded-md focus:outline-none focus:shadow-outline-blue transition-all duration-300 ${openTab === 1 ? 'bg-blue-600 text-white' : ''}`}>Popular Plans</button>
//                         <button onClick={() => setOpenTab(2)} className={`flex-1 py-2 px-4 rounded-md focus:outline-none focus:shadow-outline-blue transition-all duration-300 ${openTab === 2 ? 'bg-blue-600 text-white' : ''}`}>Data Booster</button>
//                         <button onClick={() => setOpenTab(3)} className={`flex-1 py-2 px-4 rounded-md focus:outline-none focus:shadow-outline-blue transition-all duration-300 ${openTab === 3 ? 'bg-blue-600 text-white' : ''}`}>Data Packs</button>
//                     </div>

//                     <div className={`transition-all duration-300 bg-white p-4 rounded-lg shadow-md border-l-4 ${openTab === 1 ? 'border-blue-600' : ''}`} style={{ display: openTab === 1 ? 'block' : 'none' }}>
//                         <h2 className="text-2xl font-semibold mb-2 text-blue-600">Popular Plans</h2>
//                         <p className="text-gray-700">
//                             Premium Plan
//                             PREPAID
//                             2GB /DAY
//                         </p>
//                         <p className="text-gray-700">
//                             Basic Plan
//                             POSTPAID
//                             2GB /DAY
//                         </p>
//                     </div>

//                     <div className={`transition-all duration-300 bg-white p-4 rounded-lg shadow-md border-l-4 ${openTab === 2 ? 'border-blue-600' : ''}`} style={{ display: openTab === 2 ? 'block' : 'none' }}>
//                         <h2 className="text-2xl font-semibold mb-2 text-blue-600">DataBooster</h2>
//                         <p className="text-gray-700">
//                             Basic Plan
//                             PREPAID
//                             2GB /DAY
//                         </p>
//                     </div>

//                     <div className={`transition-all duration-300 bg-white p-4 rounded-lg shadow-md border-l-4 ${openTab === 3 ? 'border-blue-600' : ''}`} style={{ display: openTab === 3 ? 'block' : 'none' }}>
//                         <h2 className="text-2xl font-semibold mb-2 text-blue-600">Data Packs</h2>
//                         <p className="text-gray-700">
//                             Student Plan
//                             PREPAID
//                             2GB /DAY
//                         </p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Viewplans;
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { detailSchema } from '../Schema/detailSchema';

const Viewplans = () => {

    const navigate = useNavigate();

    const initialData = {
        mobileNumber: "",
        operatorName: "",
        location: ""
    }

    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: initialData,
        validationSchema: detailSchema,
        onSubmit: (values, action) => {
            console.log(values);
            eventPlan();
        },
    });

    const eventPlan = () => {
        navigate(`/mobile-recharge/${values.operatorName}/${values.mobileNumber}`);
    }

    return (
        <div className='h-screen'>
            <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                <div class="mx-auto max-w-lg text-center">
                    <h1 class="text-2xl font-bold sm:text-3xl">Fill up the Details</h1>

                    {/* <p class="mt-4 text-gray-500">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et libero nulla eaque error neque
                        ipsa culpa autem, at itaque nostrum!
                    </p> */}
                </div>

                <form onSubmit={handleSubmit} class="mx-auto mb-0 mt-8 max-w-md space-y-4">
                    <div>
                        <label for="mobileNumber" class="sr-only">MobileNumber </label>
                        <div class="relative">
                            <input
                                name="mobileNumber"
                                type="text"
                                value={values.mobileNumber}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                placeholder="Enter Mobile Number"
                            />
                            {errors.mobileNumber && touched.mobileNumber && <div className="text-red-600 text-xs">{errors.mobileNumber}</div>}
                            <div className="relative">
                                <select
                                    name="operatorName"
                                    value={values.operatorName}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                >
                                    <option value="" disabled>Select Operator</option>
                                    <option value="Airtel">Airtel</option>
                                    <option value="Bsnl">Bsnl</option>
                                    <option value="Jio">Jio</option>
                                    <option value="Vi">Vi</option>
                                </select>
                                {errors.operatorName && touched.operatorName && <div className="text-red-600 text-xs">{errors.operatorName}</div>}
                            </div>
                            {/* <span class="absolute inset-y-0 end-0 grid place-content-center px-4">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="size-4 text-gray-400"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                                    />
                                </svg>
                            </span> */}
                        </div>
                    </div>

                    <div>
                        <label for="password" class="sr-only">Location</label>

                        <div class="relative">
                            <input
                                name="location"
                                value={values.location}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                placeholder="Enter Location"
                            />
                            {errors.location && touched.location && <div className="text-red-600 text-xs">{errors.location}</div>}

                            {/* <span class="absolute inset-y-0 end-0 grid place-content-center px-4">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="size-4 text-gray-400"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                    />
                                </svg>
                            </span> */}
                        </div>
                    </div>

                    <div class="flex items-center justify-center">
                        {/* <p class="text-sm text-gray-500">
                            No account?
                            <a class="underline" href="#">Sign up</a>
                        </p> */}

                        <button
                            type='submit'
                            class="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
                        >
                            Next
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Viewplans