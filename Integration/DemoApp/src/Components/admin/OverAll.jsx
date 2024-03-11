import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import AdminService from '../../services/AdminService';
import Addon from './AddOn';
import AddPlan from './AddPlan';
import EditAddon from './EditAddon';
import EditPlan from './EditPlan';

const OverAll = () => {

    const [selectedTab, setSelectedTab] = useState('plans');

    const [currentPage, setCurrentPage] = useState(1);
    const [recordsPerPage] = useState(5);
    const [records, setRecords] = useState([]);

    // Pagination logic
    const indexOfLastRecord = currentPage * recordsPerPage;
    const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
    const currentRecords = records.slice(indexOfFirstRecord, indexOfLastRecord);

    const nextPage = () => {
        setCurrentPage(currentPage + 1);
    };

    const prevPage = () => {
        setCurrentPage(currentPage - 1);
    };

    const { accessToken } = useSelector(state => state.global);

    const [showForm, setShowForm] = useState(false);

    const [showEditForm, setShowEditForm] = useState(false);

    const [showEditPlanForm, setShowEditPlanForm] = useState(false);

    const [searchTerm, setSearchTerm] = useState('');

    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = (event) => {
        const term = event.target.value.toLowerCase();
        setSearchTerm(term);
        console.log(term);

        const results = term.trim() !== '' ? currentRecords.filter(record => {
            return (
                record.planName.toLowerCase().includes(term) ||
                record.planType.toLowerCase().includes(term) ||
                record.planData.toLowerCase().includes(term) ||
                record.planDetails.toLowerCase().includes(term) ||
                (record.planPrice && record.planPrice.toString().toLowerCase().includes(term)) ||
                record.planValidity.toLowerCase().includes(term) ||
                record.operatorName.toLowerCase().includes(term)
            );
        }) : [];

        setSearchResults(results);
    };

    const [id, setId] = useState(null);

    useEffect(() => {
        if (selectedTab === "plans") {
            const fetchData = async () => {
                try {
                    const data = await fetchPlans();
                    setRecords(data);
                } catch (error) {
                    console.error('Error fetching plans:', error);
                }
            };

            fetchData();
        } else if (selectedTab === "addon") {
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
    }, [currentPage, selectedTab]);

    const handleEditButtonClick = (item) => {
        setId(item);
        setShowEditForm(true);
        setSelectedTab(null);
    };

    const handleEditPlanButtonClick = (item) => {
        setId(item);
        setShowEditPlanForm(true);
        setSelectedTab(null);
    }

    const handleTabClick = (tab) => {
        setSelectedTab(tab);
        setShowEditForm(false); // Reset edit form state
        setShowEditPlanForm(false); // Reset edit plan form state
        setShowForm(false);
    };

    const handleAddButtonClick = (tab) => {
        setSelectedTab(tab);
        setShowForm(true);
        setShowEditForm(false);
        setShowEditPlanForm(false);
    };

    const renderEditContent = () => {
        if (showEditPlanForm) {
            return <EditPlan PlanId={id} accessToken={accessToken} />;
        }
        if (showEditForm) {
            return <EditAddon AddonId={id} accessToken={accessToken} />;
        }
    }

    const fetchPlans = async () => {
        const res = await AdminService.getPlans(accessToken);
        return res.data;
    }

    const fetchAddon = async () => {
        const res = await AdminService.getAddon(accessToken);
        return res.data;
    }

    const handleDeleteButtonClick = async (id) => {
        const result = await Swal.fire({
            title: 'Are you sure to delete the item?',
            showCancelButton: true,
            confirmButtonText: 'Delete',
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            preConfirm: async () => {
                try {
                    if (selectedTab === "plans") {
                        await AdminService.deletePlanById(id, accessToken);
                        setRecords(prevRecords => prevRecords.filter(record => record.planId !== id));
                    } else {
                        await AdminService.deleteAddonById(id, accessToken);
                        setRecords(prevRecords => prevRecords.filter(record => record.addonId !== id));
                    }
                    Swal.fire({
                        icon: 'success',
                        title: 'Successfully deleted!',
                        toast: true,
                        position: 'top-end',
                        showConfirmButton: false,
                        timer: 3000 // Adjust the duration as needed
                    });
                } catch (err) {
                    console.log(err);
                    Swal.fire({
                        icon: 'error',
                        title: 'Something went wrong!',
                        toast: true,
                        position: 'top-end',
                        showConfirmButton: false,
                        timer: 3000 // Adjust the duration as needed
                    });
                }
            }
        });

        if (result.isConfirmed) {
            // Handle confirmed action if needed
        }
    };


    const renderContent = () => {
        if (showForm) {
            return (
                <>
                    {
                        selectedTab === "plans" ? <AddPlan /> : <Addon />
                    }
                </>
            );
        }

        if (selectedTab === 'plans') {
            return (
                <>
                    {
                        currentRecords.length === 0 ? <div className='h-screen'><h1 className='text-3xl   text-center pt-5'>No records found</h1></div> : (<div>
                            <table className="w-full whitespace-nowrap">
                                <thead>
                                    <tr>
                                        <th className="px-4 py-2 text-left">Name</th>
                                        <th className="px-4 py-2 text-left">Data</th>
                                        <th className="px-4 py-2 text-left">Price</th>
                                        <th className="px-4 py-2 text-left">Validity</th>
                                        <th className="px-4 py-2 text-left">Plan Type</th>
                                        <th className="px-4 py-2 text-left">Operator</th>
                                        <th className="px-4 py-2 text-left">Description</th>
                                        <th className="px-4 py-2 text-left">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        currentRecords.map((record) => {
                                            return (
                                                <>
                                                    <tr key={record.id} tabIndex="0" className="focus:outline-none h-16 rounded">
                                                        <td className="px-4 py-2">
                                                            <div className="flex items-center">
                                                                <p className="text-base font-medium leading-none text-gray-700 ">{record.planName}</p>
                                                            </div>
                                                        </td>
                                                        <td className="px-4 py-2">
                                                            <div className="flex items-center">
                                                                <p className="text-sm leading-none text-gray-600 ">{record.planData}</p>
                                                            </div>
                                                        </td>
                                                        <td className="px-4 py-2">
                                                            <div className="flex items-center">
                                                                <p className="text-sm leading-none text-gray-600 ">₹ {record.planPrice}</p>
                                                            </div>
                                                        </td>
                                                        <td className="px-4 py-2">
                                                            <div className="flex items-center">
                                                                <p className="text-sm leading-none text-gray-600 ">{record.planValidity}</p>
                                                            </div>
                                                        </td>
                                                        <td className="px-4 py-2">
                                                            {record.planType}
                                                        </td>
                                                        <td className="px-4 py-2">
                                                            {record.operatorName}
                                                        </td>
                                                        <td className="px-4 py-2 max-w-md">
                                                            <div className="flex items-center">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 256 256"><path fill="#0E273C" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m-4 48a12 12 0 1 1-12 12a12 12 0 0 1 12-12m12 112a16 16 0 0 1-16-16v-40a8 8 0 0 1 0-16a16 16 0 0 1 16 16v40a8 8 0 0 1 0 16" /></svg>
                                                            </div>
                                                        </td>
                                                        <td className="px-4 py-2">
                                                            <div className="flex items-center">
                                                                <button className="mr-2" onClick={() => handleEditPlanButtonClick(record.planId)}>
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="#0E273C" fillRule="evenodd" clipRule="evenodd"><path d="M11.3 6.2H5a2 2 0 0 0-2 2V19a2 2 0 0 0 2 2h11c1.1 0 2-1 2-2.1V11l-4 4.2c-.3.3-.7.6-1.2.7l-2.7.6c-1.7.3-3.3-1.3-3-3.1l.6-2.9c.1-.5.4-1 .7-1.3l3-3.1Z" /><path d="M19.8 4.3a2.1 2.1 0 0 0-1-1.1a2 2 0 0 0-2.2.4l-.6.6l2.9 3l.5-.6a2.1 2.1 0 0 0 .6-1.5c0-.2 0-.5-.2-.8m-2.4 4.4l-2.8-3l-4.8 5l-.1.3l-.7 3c0 .3.3.7.6.6l2.7-.6l.3-.1l4.7-5Z" /></g></svg>
                                                                </button>
                                                                <button onClick={() => handleDeleteButtonClick(record.planId)}>
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#0E273C" d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z" /></svg>
                                                                </button>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr className="h-3"></tr>
                                                </>
                                            );
                                        })
                                    }
                                </tbody>
                            </table>
                            <div className='flex justify-center'>
                                <button onClick={prevPage} disabled={currentPage === 1} className="relative rounded px-3 overflow-hidden group bg-Hcol hover:bg-gradient-to-r hover:from-Hcol hover:to-purple text-white hover:ring-2 hover:ring-offset-2 hover:ring-Hcol transition-all ease-out duration-300 mr-4">
                                    <span className="relative">Previous</span>
                                </button>
                                <button onClick={nextPage} disabled={indexOfLastRecord >= records.length} className="relative rounded px-5 py-2.5 overflow-hidden group bg-Hcol hover:bg-gradient-to-r hover:from-Hcol hover:to-purple text-white hover:ring-2 hover:ring-offset-2 hover:ring-Hcol transition-all ease-out duration-300">
                                    <span className="relative">Next</span>
                                </button>
                            </div>
                        </div>)
                    }
                </>
            );
        }
        else if (selectedTab === 'addon') {
            return (
                <>
                    {
                        currentRecords.length === 0 ? <div className='h-screen'><h1 className='text-3xl   text-center pt-5'>No records found</h1></div> : (<div>
                            <table className="w-full whitespace-nowrap">
                                <thead>
                                    <tr>
                                        <th className="px-4 py-2 text-left">Name</th>
                                        <th className="px-4 py-2 text-left">Data</th>
                                        <th className="px-4 py-2 text-left">Price</th>
                                        <th className="px-4 py-2 text-left">Operator</th>
                                        <th className="px-4 py-2 text-left">Description</th>
                                        <th className="px-4 py-2 text-left">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        currentRecords.map((record) => {
                                            return (
                                                <>
                                                    <tr key={record.id} tabIndex="0" className="focus:outline-none h-16 rounded">
                                                        <td className="px-4 py-2">
                                                            <div className="flex items-center">
                                                                <p className="text-base font-medium leading-none text-gray-700 ">{record.addonName}</p>
                                                            </div>
                                                        </td>
                                                        <td className="px-4 py-2">
                                                            <div className="flex items-center">
                                                                <p className="text-sm leading-none text-gray-600 ">{record.data}</p>
                                                            </div>
                                                        </td>
                                                        <td className="px-4 py-2">
                                                            <div className="flex items-center">
                                                                <p className="text-sm leading-none text-gray-600 ">₹ {record.addonPrice}</p>
                                                            </div>
                                                        </td>
                                                        <td className="px-4 py-2">
                                                            {record.operatorName}
                                                        </td>
                                                        <td className="px-4 py-2 max-w-md">
                                                            <div className="flex items-center">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 256 256"><path fill="#0E273C" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m-4 48a12 12 0 1 1-12 12a12 12 0 0 1 12-12m12 112a16 16 0 0 1-16-16v-40a8 8 0 0 1 0-16a16 16 0 0 1 16 16v40a8 8 0 0 1 0 16" /></svg>
                                                            </div>
                                                        </td>
                                                        <td className="px-4 py-2">
                                                            <div className="flex items-center">
                                                                <button className="mr-2" onClick={() => handleEditButtonClick(record.addonId)}>
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="#0E273C" fillRule="evenodd" clipRule="evenodd"><path d="M11.3 6.2H5a2 2 0 0 0-2 2V19a2 2 0 0 0 2 2h11c1.1 0 2-1 2-2.1V11l-4 4.2c-.3.3-.7.6-1.2.7l-2.7.6c-1.7.3-3.3-1.3-3-3.1l.6-2.9c.1-.5.4-1 .7-1.3l3-3.1Z" /><path d="M19.8 4.3a2.1 2.1 0 0 0-1-1.1a2 2 0 0 0-2.2.4l-.6.6l2.9 3l.5-.6a2.1 2.1 0 0 0 .6-1.5c0-.2 0-.5-.2-.8m-2.4 4.4l-2.8-3l-4.8 5l-.1.3l-.7 3c0 .3.3.7.6.6l2.7-.6l.3-.1l4.7-5Z" /></g></svg>
                                                                </button>
                                                                <button onClick={() => handleDeleteButtonClick(record.addonId)}>
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#0E273C" d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z" /></svg>
                                                                </button>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr className="h-3"></tr>
                                                </>
                                            );
                                        })
                                    }
                                </tbody>
                            </table>
                            <div className='flex justify-center'>
                                <button onClick={prevPage} disabled={currentPage === 1} className="relative rounded px-3 overflow-hidden group bg-Hcol hover:bg-gradient-to-r hover:from-Hcol hover:to-purple text-white hover:ring-2 hover:ring-offset-2 hover:ring-Hcol transition-all ease-out duration-300 mr-4">
                                    <span className="relative">Previous</span>
                                </button>
                                <button onClick={nextPage} disabled={indexOfLastRecord >= records.length} className="relative rounded px-5 py-2.5 overflow-hidden group bg-Hcol hover:bg-gradient-to-r hover:from-Hcol hover:to-purple text-white hover:ring-2 hover:ring-offset-2 hover:ring-Hcol transition-all ease-out duration-300">
                                    <span className="relative">Next</span>
                                </button>
                            </div>
                        </div>)
                    }
                </>
            );
        }
        return null;
    };
    return (
        <div className="w-[80vw]">
            <div className="bg-white py-4 md:py-7 px-4 md:px-8 xl:px-10 bg-inherit" style={{ backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
                {/* Tab buttons */}
                <div className="sm:flex items-center justify-between w-full">
                    <div className="flex items-center">
                        <button onClick={() => handleTabClick('plans')} className={`rounded-full focus:outline-none focus:ring-2  focus:bg-slate-50 focus:ring-slate-800 ${selectedTab === 'plans' ? 'bg-slate-100 text-slate-700' : 'text-gray-600 hover:text-slate-700 hover:bg-slate-100'} py-2 px-8 rounded-full`}>
                            <p>Plans</p>
                        </button>
                        <button onClick={() => handleTabClick('addon')} className={`rounded-full focus:outline-none focus:ring-2 focus:bg-slate-50 focus:ring-slate-800 ml-4 sm:ml-8 ${selectedTab === 'addon' ? 'bg-slate-100 text-slate-700' : 'text-gray-600 hover:text-slate-700 hover:bg-slate-100'} py-2 px-8 rounded-full`}>
                            <p>Addon</p>
                        </button>
                        {/* <div className="pl-10">
                            <input type="text" placeholder="Search for a plan, e.g. 199" className="w-full p-2 border border-gray-300 rounded-lg" />
                        </div> */}
                    </div>
                    {selectedTab === 'plans' && !showForm && (
                        <button onClick={() => handleAddButtonClick("plans")} className="focus:ring-2 focus:ring-offset-2 focus:ring-slate-600 mt-4 sm:mt-0 inline-flex items-start justify-start px-6 py-3 bg-slate-700 hover:bg-slate-600 focus:outline-none rounded">
                            <p className="text-sm font-medium leading-none text-white">Add</p>
                        </button>
                    )}
                    {selectedTab === 'addon' && !showForm && (
                        <button onClick={() => handleAddButtonClick("addon")} className="focus:ring-2 focus:ring-offset-2 focus:ring-slate-600 mt-4 sm:mt-0 inline-flex items-start justify-start px-6 py-3 bg-slate-700 hover:bg-slate-600 focus:outline-none rounded">
                            <p className="text-sm font-medium leading-none text-white">Add</p>
                        </button>
                    )}
                </div>
                <div className="mt-7 overflow-x-auto">
                    {renderContent()}
                    {renderEditContent()}
                </div>
            </div>
        </div>
    );
};

export default OverAll;