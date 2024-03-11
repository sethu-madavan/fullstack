import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import CustomerService from '../services/CustomerService';
const TabsComponent = ({ openTab, setOpenTab, operatorName, accessToken }) => {

    const [records, setRecords] = useState([]);

    const { userDetails } = useSelector(state => state.global);

    const { mobileNumber, operator } = useParams();

    const navigate = useNavigate();

    const onPay = (details, target) => {

        const price = details.planPrice || details.addonPrice;

        var options = {
            key: "rzp_test_2T7H6EgTNZQFr7",
            key_secret: "PzOT0enrRrjjPojSXYPW28WY",
            amount: price * 100,
            currency: "INR",
            name: "PocketRefill",
            description: "Sample",
            prefill: {
                name: userDetails.username,
                email: userDetails.email,
                contact: mobileNumber,
            },
            handler: function (response) {
                console.log(response);
                if (target === "plan") {
                    makeRechargePlan(details, price);
                }
                else {
                    makeRechargeAddon(details, price);
                }
                Swal.fire({
                    position: "top-center",
                    icon: "success",
                    title: "Payment Done",
                    showConfirmButton: false,
                    timer: 3000,
                }).then(navigate("/"));
            },
            notes: {
                address: "Razorpay Corporate office",
            },
            theme: {
                color: "#0E273C",
            },
        };

        var pay = new window.Razorpay(options);
        pay.open();
    };

    const makeRechargeAddon = async (details, price) => {
        var today = new Date();

        const data = {
            // "rechargeId": 0,
            "rechargePrice": price,
            "status": "string",
            "date": today,
            "addon": details
        }
        const res = await CustomerService.makeRecharge(userDetails.userName, accessToken, data);
        console.log(res);
    }

    const makeRechargePlan = async (details, price) => {
        var today = new Date();

        const data = {
            // "rechargeId": 0,
            "rechargePrice": price,
            "status": "string",
            "date": today,
            "plan": details
        }
        const res = await CustomerService.makeRecharge(userDetails.userName, accessToken, data);
        console.log(res);
    }

    useEffect(() => {

        if (openTab === 1) {
            const fetchData = async () => {
                try {
                    const data = await fetchPlans();
                    console.log(data);
                    setRecords(data);
                } catch (error) {
                    console.error('Error fetching plans:', error);
                }
            };

            fetchData();
        } else if (openTab === 2) {
            const fetchData1 = async () => {
                try {
                    const data = await fetchAddon();
                    console.log(data);
                    setRecords(data);
                } catch (error) {
                    console.error('Error fetching plans:', error);
                }
            };
            fetchData1();
        }
    }, [openTab]);

    const fetchPlans = async () => {
        console.log(operator, accessToken)
        const res = await CustomerService.getPlans(operator, accessToken);
        console.log(res.data);
        return res.data;
    }

    const fetchAddon = async () => {
        console.log(operator, accessToken)
        const res = await CustomerService.getAddon(operator, accessToken);
        console.log(res.data);
        return res.data;
    }

    return (

        <div className="max-w-full mx-auto">
            <div className="mb-4 flex space-x-4 p-2 bg-white rounded-lg shadow-md">
                <button onClick={() => setOpenTab(1)} className={`flex-1 py-2 px-4 rounded-md focus:outline-none focus:shadow-outline-blue transition-all duration-300 ${openTab === 1 ? 'bg-Hcol text-white' : ''}`}>Plans</button>
                <button onClick={() => setOpenTab(2)} className={`flex-1 py-2 px-4 rounded-md focus:outline-none focus:shadow-outline-blue transition-all duration-300 ${openTab === 2 ? 'bg-Hcol text-white' : ''}`}>Add on</button>
            </div>

            <div style={{ display: openTab === 1 ? 'block' : 'none' }}>
                {records.map(record => (
                    <>
                        <div className="transition-all duration-300 bg-white p-4 rounded-lg shadow-md border-l-4 border-Hcol mb-2">
                            <div className="flex justify-between items-center">
                                <div className='flex flex-row justify-center'>
                                    <div className='w-36'> {/* Adjust the width as needed */}
                                        <div className="text-2xl font-semibold text-Hcol">₹ {record.planPrice}</div>
                                        <div className="text-gray-700">{record.planName}</div>
                                    </div>
                                    <div className='w-36'> {/* Adjust the width as needed */}
                                        <div className="text-2xl font-semibold text-Hcol">{record.planValidity}</div>
                                        <div className="text-gray-700">Validity</div>
                                    </div>
                                    <div className='w-36'> {/* Adjust the width as needed */}
                                        <div className="text-2xl font-semibold text-Hcol">{record.planData}</div>
                                        <div className="text-gray-700">Data</div>
                                    </div>
                                    <div className='w-36'> {/* Adjust the width as needed */}
                                        <div className="text-2xl font-semibold text-Hcol uppercase">{record.planType}</div>
                                        <div className="text-gray-700">Plan Type</div>
                                    </div>
                                </div>

                                <div>
                                    <div className="flex justify-center items-center">
                                        <a onClick={() => onPay(record, "plan")} className="relative rounded px-5 py-2.5 overflow-hidden group bg-Hcol hover:bg-gradient-to-r hover:from-Hcol hover:to-purple text-white hover:ring-2 hover:ring-offset-2 hover:ring-Hcol transition-all ease-out duration-300">
                                            <span className="relative">Apply</span>
                                        </a>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </>
                ))}
            </div>

            <div style={{ display: openTab === 2 ? 'block' : 'none' }}>
                {records.map(record => (
                    <>
                        <div className="transition-all duration-300 bg-white p-4 rounded-lg shadow-md border-l-4 border-Hcol mb-2">
                            <div className="flex justify-between items-center">
                                <div className='flex'>
                                    <div className='md:mr-20 w-40'> {/* Adjust the width as needed */}
                                        <div className="text-2xl font-semibold text-Hcol">₹ {record.addonPrice}</div>
                                        <div className="text-gray-700">{record.addonName}</div>
                                    </div>
                                    <div className='md:mr-20 w-40'> {/* Adjust the width as needed */}
                                        <div className="text-2xl font-semibold text-Hcol">{record.data}</div>
                                        <div className="text-gray-700">Data</div>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-center items-center">
                                        {/* <a onClick={() => navigate(`/mobile-recharge/${operatorName}/payment`)} className="relative rounded px-5 py-2.5 overflow-hidden group bg-Hcol hover:bg-gradient-to-r hover:from-Hcol hover:to-purple text-white hover:ring-2 hover:ring-offset-2 hover:ring-Hcol transition-all ease-out duration-300"> */}
                                        <a onClick={() => onPay(record, "addon")} className="relative rounded px-5 py-2.5 overflow-hidden group bg-Hcol hover:bg-gradient-to-r hover:from-Hcol hover:to-purple text-white hover:ring-2 hover:ring-offset-2 hover:ring-Hcol transition-all ease-out duration-300">
                                            <span className="relative">Apply</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                ))}
            </div>
        </div >
    );
};

const PlanDetails = () => {

    const [openTab, setOpenTab] = useState(1);

    const {mobileNumber} = useParams();

    const { operator } = useParams();

    const { accessToken, isLoggedIn, userDetails } = useSelector((state) => state.global);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
        >
            {
                isLoggedIn ? <div className='flex flex-col md:flex-row h-screen'>
                    <div className='w-1/2 bg-gray-100 flex justify-center p-3 items-center '>
                        <article className="rounded-xl bg-white w-full sm:p-6 lg:p-8 overflow-hidden ">
                            <div className="flex items-start sm:gap-8">
                                <div
                                    className="hidden sm:grid sm:size-20 sm:shrink-0 sm:place-content-center sm:rounded-full sm:border-2"
                                    aria-hidden="true"
                                >
                                    <div className="flex items-center">
                                        {
                                            operator === "Airtel" && <img src="/assets/airtel.png" className="rounded-full" />
                                        }
                                        {
                                            operator === "Jio" && <img src="/assets/jio.png" className="rounded-full" />
                                        }
                                        {
                                            operator === "Bsnl" && <img src="/assets/bsnl.png" className="rounded-full" />
                                        }
                                        {
                                            operator === "Vi" && <img src="/assets/vi.png" height={100} className="rounded-full bg-cover" />
                                        }
                                    </div>
                                </div>
                                <div>
                                    <strong
                                        className="rounded border border-purple bg-purple px-3 py-1.5 text-[10px] font-medium "
                                    >
                                        {mobileNumber}
                                    </strong>

                                    <h3 className="mt-4 text-lg font-medium sm:text-xl">
                                        <p className="font-poppins">{operator}</p>
                                    </h3>

                                    <p className="mt-1 text-sm text-gray-700  ">
                                        {operator} Prepaid | TamilNadu
                                    </p>
                                </div>
                            </div>
                        </article>
                    </div>
                    <div className="w-1/2 bg-gray-200 py-4 px-4 overflow-y-auto">
                        {/* <div className="mb-4">
                            <input type="text" placeholder="Search for a plan,eg.199" className="w-full p-2 border border-gray-300 rounded-lg" />
                        </div> */}
                        <TabsComponent openTab={openTab} setOpenTab={setOpenTab} operatorName={operator} accessToken={accessToken} />
                    </div>
                </div> : <SignIn />
            }
        </motion.div>
    );
};

export default PlanDetails;