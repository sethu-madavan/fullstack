import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
// import AdminService from 'yourAdminServicePath'; // You need to replace 'yourAdminServicePath' with your actual import path for AdminService
import AdminService from '../../services/AdminService';
const EditPlan = ({ PlanId, accessToken }) => {
    const [tar, setTar] = useState({
        planName: "",
        planType: "",
        planData: "",
        planPrice: "",
        planDetails: "",
        planValidity: "",
        operatorName: ""
    });

    useEffect(() => {
        fetchPlan();
    }, [PlanId, accessToken]);

    const fetchPlan = async () => {
        try {
            const res = await AdminService.getPlanById(PlanId, accessToken);
            setTar(res.data);
        } catch (error) {
            console.error('Error fetching plan:', error);
        }
    }

    const eventChange = (e) => {
        const { name, value } = e.target;
        setTar(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    const eventAction = async (e) => {
        e.preventDefault();
        await eventSave();
    }

    const eventSave = async () => {
        try {
            Swal.fire({
                title: 'Adding changes.....',
                allowOutsideClick: false,
                onBeforeOpen: () => {
                    Swal.showLoading();
                }
            });

            const res = await AdminService.updatePlan(PlanId, tar, accessToken);
            
            if (res.status === 200) {
                Swal.fire({
                    icon: 'success',
                    title: 'Successfully updated the record',
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        } catch (err) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
            });
            console.log(err);
        }
    }

    return (
        <div style={{ backgroundImage: "url(/img/bottom3.svg)", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
            <div className="w-full">
                <h1 className="text-center text-2xl font-bold font-anuphan sm:text-3xl pt-5">Edit Plan</h1>
                <form onSubmit={eventAction} className="mb-0 space-y-4 rounded-lg p-4 shadow-2xl sm:p-6 lg:p-8">
                    <div className='grid grid-cols-2 gap-4'>
                        <div>
                            <label className="sr-only font-anuphan">Name</label>
                            <div className="relative">
                                <input
                                    name="planName"
                                    type="text"
                                    value={tar.planName}
                                    onChange={eventChange}
                                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm font-anuphan"
                                    placeholder="Enter Plan Name"
                                />
                            </div>
                        </div>
                        <div>
                            <label className="sr-only font-anuphan">Data</label>
                            <div className="relative">
                                <input
                                    name="planData"
                                    type="text"
                                    value={tar.planData}
                                    onChange={eventChange}
                                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm font-anuphan "
                                    placeholder="Enter the data"
                                />
                            </div>
                        </div>
                        <div>
                            <label className="sr-only font-anuphan">Price</label>
                            <div className="relative">
                                <input
                                    name="planPrice"
                                    type="text"
                                    value={tar.planPrice}
                                    onChange={eventChange}
                                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm font-anupha"
                                    placeholder="Enter the price"
                                />
                            </div>
                        </div>
                        <div>
                            <label className="sr-only font-anuphan">Details</label>
                            <div className="relative">
                                <input
                                    name="planDetails"
                                    type="text"
                                    value={tar.planDetails}
                                    onChange={eventChange}
                                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm font-anuphan"
                                    placeholder="Enter description"
                                />
                            </div>
                        </div>
                        <div>
                            <label className="sr-only font-anuphan">Validity</label>
                            <div className="relative">
                                <input
                                    name="planValidity"
                                    type="text"
                                    value={tar.planValidity}
                                    onChange={eventChange}
                                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm font-anuphan"
                                    placeholder="Enter the Validity"
                                />
                            </div>
                        </div>
                        <div>
                            <label className="sr-only font-anuphan">Operator</label>
                            <div className="relative">
                                <select
                                    name="operatorName"
                                    value={tar.operatorName}
                                    onChange={eventChange}
                                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm font-anuphan appearance-none"
                                >
                                    <option value="" disabled>Select Operator</option>
                                    <option value="Airtel">Airtel</option>
                                    <option value="Bsnl">Bsnl</option>
                                    <option value="Jio">Jio</option>
                                    <option value="Vi">Vi</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center items-center'>
                        <button
                            type="submit"
                            className="block w-1/2 text-sm font-medium rounded px-5 py-2.5 overflow-hidden group bg-purple2 hover:bg-gradient-to-r hover:from-purple2 hover:to-purple text-black-300 hover:ring-2 hover:ring-offset-2 hover:ring-purple2 transition-all ease-out duration-300"
                        >
                            Confirm
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

EditPlan.propTypes = {
    username: PropTypes.string.isRequired
}

export default EditPlan;
