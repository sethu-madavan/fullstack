import { useFormik } from 'formik';
import { useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import AddOnSchema from '../../Schema/AddOnSchema';
import AdminService from '../../services/AdminService';

const Addon = ({ userName }) => {

    const { accessToken } = useSelector(state => state.global);

    const initialData = {
        addonName: "",
        data: "",
        addonPrice: "",
        addonDetails: "",
        OperatorName: ""
    }

    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: initialData,
        validationSchema: AddOnSchema,
        onSubmit: async (values, action) => {
            eventAction();
        },
    });

    const eventAction = async () => {
        try {
            // Swal.fire({
            //     title: 'Creating new Addon...',
            //     allowOutsideClick: false,
            //     onBeforeOpen: () => {
            //         Swal.showLoading();
            //     }
            // });

            const res = await AdminService.addAddon(values, accessToken);
            console.log(res);
            if (res.status === 200) {
                Swal.fire({
                    icon: 'success',
                    title: 'Successfully Addon added',
                    showConfirmButton: false,
                    timer: 1500
                });
            }
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
        <div className="w-full">
            <div className="">
                <form onSubmit={handleSubmit} className="mb-0 space-y-4 rounded-lg p-4 shadow-2xl sm:p-6 lg:p-8">
                    <div className='grid grid-cols-2 gap-4'>
                        <div>
                            <label className="sr-only font-anuphan">Name</label>
                            <div className="relative">
                                <input
                                    name="addonName"
                                    type="text"
                                    value={values.addonName}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm font-anuphan "
                                    placeholder="Enter Add on Name"
                                />
                                {errors.addonName && touched.addonName && <div className="text-red-600 text-xs">{errors.addonName}</div>}
                            </div>
                        </div>
                        <div>
                            <label className="sr-only font-anuphan">Data</label>
                            <div className="relative">
                                <input
                                    name="data"
                                    type="text"
                                    value={values.data}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm font-anuphan "
                                    placeholder="Enter the data"
                                />
                                {errors.data && touched.data && <div className="text-red-600 text-xs">{errors.data}</div>}
                            </div>
                        </div>
                        <div>
                            <label className="sr-only font-anuphan">Price</label>
                            <div className="relative">
                                <input
                                    name="addonPrice"
                                    type="text"
                                    value={values.addonPrice}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm font-anuphan "
                                    placeholder="Enter the price"
                                />
                                {errors.addonPrice && touched.addonPrice && <div className="text-red-600 text-xs">{errors.addonPrice}</div>}
                            </div>
                        </div>
                        <div>
                            <label className="sr-only font-anuphan">Details</label>
                            <div className="relative">
                                <input
                                    name="addonDetails"
                                    type="text"
                                    value={values.addonDetails}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm font-anuphan "
                                    placeholder="Enter description"
                                />
                                {errors.addonDetails && touched.addonDetails && <div className="text-red-600 text-xs">{errors.addonDetails}</div>}
                            </div>
                        </div>
                        <div>
                            <label className="sr-only font-anuphan">Operator</label>
                            <div className="relative">
                                <select
                                    name="OperatorName"
                                    value={values.OperatorName}
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
                                {errors.OperatorName && touched.OperatorName && <div className="text-red-600 text-xs">{errors.OperatorName}</div>}
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center items-center'>
                        <button
                            type="submit"
                            className="block w-1/2 text-sm font-medium rounded px-5 py-2.5 overflow-hidden group bg-Hcol hover:bg-gradient-to-r hover:from-Hcol hover:to-purple text-slate-500 hover:ring-2 hover:ring-offset-2 hover:ring-Hcol transition-all ease-out duration-300"
                        >
                            Add Addon
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}


export default Addon;
