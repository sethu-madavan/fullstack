import { useFormik } from 'formik';
import { useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import PlanSchema from '../../Schema/PlanSchema';
import AdminService from '../../services/AdminService';

const AddPlan = ({ userName }) => {

    const initialData = {
        planName: "",
        planType: "",
        planData: "",
        planPrice: "",
        planDetails: "",
        planValidity: "",
        operatorName: ""
    }
    const { accessToken } = useSelector(state => state.global);

    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: initialData,
        validationSchema: PlanSchema,
        onSubmit: (values, action) => {
            console.log(values);
            eventAction();
            action.resetForm();
        },
    });

    const eventAction = async () => {
        try {
            const res = await AdminService.addPlan(values, accessToken);
            console.log(res);
            setTimeout(() => {
                if (res.status === 200) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Successfully Plan added',
                        showConfirmButton: false,
                        timer: 1500 // Set the timer for the alert to automatically close after 1.5 seconds
                    });
                }
            }, 2000);
        }
        catch (err) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
            });
            console.log(err);
        }
    }

    return (
        <div className="">
            <div className="w-full">
                <form onSubmit={handleSubmit} className="mb-0 space-y-4 rounded-lg p-4 shadow-2xl sm:p-6 lg:p-8">
                    <div className='grid grid-cols-2 gap-4'>
                        <div>
                            <label className="sr-only font-anuphan">Name</label>
                            <div className="relative">
                                <input
                                    name="planName"
                                    type="text"
                                    value={values.planName}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm font-anuphan"
                                    placeholder="Enter Plan Name"
                                />
                                {errors.planName && touched.planName && <div className="text-red-600 text-xs">{errors.planName}</div>}
                            </div>
                        </div>
                        <div>
                            <label className="sr-only font-anuphan">Data</label>
                            <div className="relative">
                                <input
                                    name="planData"
                                    type="text"
                                    value={values.planData}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm font-anuphan "
                                    placeholder="Enter the data"
                                />
                                {errors.planData && touched.planData && <div className="text-red-600 text-xs">{errors.planData}</div>}
                            </div>
                        </div>
                        <div>
                            <label className="sr-only font-anuphan">Price</label>
                            <div className="relative">
                                <input
                                    name="planPrice"
                                    type="text"
                                    value={values.planPrice}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm font-anuphan "
                                    placeholder="Enter the price"
                                />
                                {errors.planPrice && touched.planPrice && <div className="text-red-600 text-xs">{errors.planPrice}</div>}
                            </div>
                        </div>
                        <div>
                            <label className="sr-only font-anuphan">Details</label>
                            <div className="relative">
                                <input
                                    name="planDetails"
                                    type="text"
                                    value={values.planDetails}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm font-anuphan "
                                    placeholder="Enter description"
                                />

                                {errors.planDetails && touched.planDetails && <div className="text-red-600 text-xs">{errors.planDetails}</div>}
                            </div>
                        </div>
                        <div>
                            <label className="sr-only font-anuphan">Validity</label>
                            <div className="relative">
                                <input
                                    name="planValidity"
                                    type="text"
                                    value={values.planValidity}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm font-anuphan "
                                    placeholder="Enter the Validity"
                                />

                                {errors.planValidity && touched.planValidity && <div className="text-red-600 text-xs">{errors.planValidity}</div>}
                            </div>
                        </div>
                        <div>
                            <label className="sr-only font-anuphan">Operator</label>
                            <div className="relative">
                                <select
                                    name="operatorName"
                                    value={values.operatorName}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm font-anuphan appearance-none"
                                >
                                    <option value="" disabled>Select Operator</option>
                                    <option value="Airtel">Airtel</option>
                                    <option value="Bsnl">Bsnl</option>
                                    <option value="Jio">Jio</option>
                                    <option value="Vi">Vi</option>
                                </select>
                                {errors.operatorName && touched.operatorName && <div className="text-red-600 text-xs">{errors.operatorName}</div>}
                            </div>
                        </div>
                        <div>
                            <label className="sr-only font-anuphan">Plan Type</label>
                            <div className="relative">
                                <input
                                    name="planType"
                                    type="text"
                                    value={values.planType}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm font-anuphan "
                                    placeholder="Enter the plan Type"
                                />
                                {errors.planType && touched.planType && <div className="text-red-600 text-xs">{errors.planType}</div>}
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center items-center'>
                        <button
                            type="submit"
                            className="block w-1/2 text-sm font-medium rounded px-5 py-2.5 overflow-hidden group bg-purple2 hover:bg-gradient-to-r hover:from-purple2 hover:to-purple text-slate-600 hover:ring-2 hover:ring-offset-2 hover:ring-purple2 transition-all ease-out duration-300"
                        >
                            Add Plan
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}


export default AddPlan