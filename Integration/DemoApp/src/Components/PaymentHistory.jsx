import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import CustomerService from '../services/CustomerService';

const PaymentHistory = () => {
    const { userDetails, accessToken } = useSelector(state => state.global);
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 4;

    const fetchPayment = async () => {
        try {
            const res = await CustomerService.getPayments(userDetails.userName, accessToken);
            const payment = res.data;
            console.log(payment);
            setData(payment)
        } catch (error) {
            console.error("Error fetching recharges:", error);
        }
    };

    useEffect(() => {
        fetchPayment();
    }, [currentPage]);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentPayment = data.slice(indexOfFirstItem, indexOfLastItem);

    const nextPage = () => {
        setCurrentPage(currentPage + 1);
    };

    const prevPage = () => {
        setCurrentPage(currentPage - 1);
    };

    useEffect(() => {
        fetchPayment();
    }, []);

    const eventShowAddon = (addon) => {
        Swal.fire({
            html: `
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-xl font-semibold mb-4">${addon.addonName}</h2>
                <p className="text-gray-700 mb-2"><span className="font-semibold">Price:</span> $${addon.addonPrice}</p>
                <p className="text-gray-700 mb-2"><span className="font-semibold">Validity:</span> ${addon.addonValidity}</p>
                <p className="text-gray-700 mb-2"><span className="font-semibold">Data:</span> ${addon.data}</p>
                <p className="text-gray-700 mb-2"><span className="font-semibold">Operator:</span> ${addon.operatorName}</p>
                <p className="text-gray-700 mb-2"><span className="font-semibold">Details:</span> ${addon.addonDetails}</p>
              </div>
            `,
            showCloseButton: true,
            showConfirmButton: false,
        });
    }

    const eventShowPlan = (plan) => {
        Swal.fire({
            html: `
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-semibold mb-4">${plan.planName}</h2>
              <p className="text-gray-700 mb-2"><span className="font-semibold">Price:</span> $${plan.planPrice}</p>
              <p className="text-gray-700 mb-2"><span className="font-semibold">Validity:</span> ${plan.planValidity}</p>
              <p className="text-gray-700 mb-2"><span className="font-semibold">Data:</span> ${plan.planData}</p>
              <p className="text-gray-700 mb-2"><span className="font-semibold">Operator:</span> ${plan.operatorName}</p>
              <p className="text-gray-700 mb-2"><span className="font-semibold">Details:</span> ${plan.planDetails}</p>
            </div>
          `,
            showCloseButton: true,
        });
    }

    return (
        <section className="py-1 bg-blueGray-50 h-screen font-anuphan">
            <div className="w-full h-screen xl:w-8/12  xl:mb-0 px-4 mx-auto mt-20">
                <div className="overflow-x-auto">
                    <div className="inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg">
                        <table className="min-w-full">
                            <thead>
                                <tr>
                                    <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                        Mode of Payment
                                    </th>
                                    <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                        Price
                                    </th>
                                    <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                        Date
                                    </th>
                                    <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                        Status
                                    </th>
                                    <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                        Operator
                                    </th>
                                    <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                        Details
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {currentPayment.map((payment) => (
                                    <tr key={payment.rechargeId}>
                                        <td className="px-6 py-4 whitespace-no-wrap">
                                            <div className="text-sm leading-5 text-gray-900">{payment.modeOfPayment}</div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-no-wrap">
                                            <div className="text-sm leading-5 text-gray-900">₹{payment.totalAmount}</div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-no-wrap">
                                            <div className="text-sm leading-5 text-gray-900">{payment.paymentDate}</div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-no-wrap">
                                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                                {payment.status}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-no-wrap">
                                            <div className="text-sm leading-5 text-gray-900">{payment.recharge && payment.recharge.plan.operatorName}</div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-900">
                                            <div className="flex justify-evenly">
                                                {
                                                    payment.recharge.plan && <div className='flex justify-center items-center'>
                                                        <button
                                                            onClick={() => eventShowPlan(payment.recharge.plan)}
                                                            className="block text-sm font-medium rounded px-5 py-2.5 overflow-hidden group bg-Hcol hover:bg-gradient-to-r hover:from-Hcol hover:to-purple text-white hover:ring-2 hover:ring-offset-2 hover:ring-Hcol transition-all ease-out duration-300"
                                                        >
                                                            Plan
                                                        </button>
                                                    </div>
                                                }
                                                {
                                                    payment.recharge.addon && <button
                                                        onClick={() => eventShowAddon(payment.recharge.addon)}
                                                        className="block text-sm font-medium rounded px-5 py-2.5 overflow-hidden group bg-Hcol hover:bg-gradient-to-r hover:from-Hcol hover:to-purple text-white hover:ring-2 hover:ring-offset-2 hover:ring-Hcol transition-all ease-out duration-300"
                                                    >
                                                        Addon
                                                    </button>
                                                }
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
                            <div className="flex-1 flex justify-between sm:hidden">
                                <button onClick={prevPage} disabled={currentPage === 1}
                                    className="bg-white border border-gray-300 rounded-md py-2 px-4 inline-flex items-center text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-800 transition ease-in-out duration-150">
                                    Prev
                                </button>
                                <button onClick={nextPage} disabled={indexOfLastItem >= data.length}
                                    className="bg-white border border-gray-300 rounded-md py-2 px-4 inline-flex items-center text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-800 transition ease-in-out duration-150">
                                    Next
                                </button>
                            </div>
                            <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                                <div>
                                    <p className="text-sm leading-5 text-gray-700">
                                        Showing {indexOfFirstItem + 1} to {Math.min(indexOfLastItem, data.length)} of {data.length} entries
                                    </p>
                                </div>
                                <div>
                                    <nav className="relative z-0 inline-flex shadow-sm">
                                        <button onClick={prevPage} disabled={currentPage === 1}
                                            className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-400 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-500 transition ease-in-out duration-150">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16"><path fill="grey" fill-rule="evenodd" d="M14 8a.75.75 0 0 1-.75.75H4.56l3.22 3.22a.75.75 0 1 1-1.06 1.06l-4.5-4.5a.75.75 0 0 1 0-1.06l4.5-4.5a.75.75 0 0 1 1.06 1.06L4.56 7.25h8.69A.75.75 0 0 1 14 8" clip-rule="evenodd" /></svg>
                                        </button>
                                        <button onClick={nextPage} disabled={indexOfLastItem >= data.length}
                                            className="-ml-px relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-400 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-500 transition ease-in-out duration-150">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="grey" d="M4.5 11h11.586l-4.5-4.5L13 5.086L19.914 12L13 18.914L11.586 17.5l4.5-4.5H4.5z" /></svg>
                                        </button>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PaymentHistory;
