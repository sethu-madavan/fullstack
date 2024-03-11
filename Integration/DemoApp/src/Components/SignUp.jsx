// import { useNavigate } from "react-router-dom";
// export default function SignUp() {
//   const nav = useNavigate();
//   return (
//     <div className="flex justify-center mt-[10%]">
//       <div class="flex flex-col max-w-md px-4 py-8 bg-white rounded-lg shadow  sm:px-6 md:px-8 lg:px-10">
//         <div className="flex justify-center mb-3" >
//           <img src="/Images/mobile.png" width={50}></img>
//         </div>
//         <div class="self-center mb-2 text-xl font-light text-gray-800 sm:text-2xl">
//           Create a new account
//         </div>
//         <span class="justify-center text-sm text-center text-gray-500 flex-items-center">
//           Already have an account ?
//           <a href="/" target="_blank" class="text-sm text-blue-500 underline hover:text-blue-700">
//             Log In
//           </a>
//         </span>
//         <div class="p-6 mt-8">
//           <form action="#">
//             <div class="flex gap-4 mb-2">
//               <div class=" relative ">
//                 <input type="text" id="create-account-first-name" class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" name="First name" placeholder="First name" />
//               </div>
//               <div class=" relative ">
//                 <input type="text" id="create-account-last-name" class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" name="Last name" placeholder="Last name" />
//               </div>
//             </div>
//             <div class="flex flex-col mb-2">
//               <div class=" relative ">
//                 <input type="text" id="create-account-pseudo" class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" name="pseudo" placeholder="username" />
//               </div>
//             </div>
//             <div class="flex flex-col mb-2">
//               <div class=" relative ">
//                 <input type="text" id="create-account-email" class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="password" />
//               </div>
//             </div>
//             <div class="flex flex-col mb-2">
//               <div class=" relative ">
//                 <input type="text" id="create-account-email" class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="confirm password" />
//               </div>
//             </div>
//             <div class="flex w-full my-4">
//               <button onClick={() => nav("/")} type="submit" class="py-2 px-4  bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
//                 Sign In
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }
import { useFormik } from 'formik';
// import { FaCheck } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";
// import { toast } from 'sonner';
import Swal from 'sweetalert2';
import { signUpSchema } from '../Schema';
import Authentication from '../services/auth/Authentication';
// import Authentication from '../services/auth/Authentication';

export default function SignUp() {

  const nav = useNavigate();
  const initialState = {
    "userName": "",
    "email": "",
    "mobileNumber": "",
    "userPassword": "",
    "confirmPassword": "",
    "location": "",
    "operatorName": ""
  };


  const { values, errors, handleBlur, handleChange, handleSubmit, touched } =
    useFormik({
      initialValues: initialState,
      validationSchema: signUpSchema,
      onSubmit: (values, action) => {
        console.log(values);
        eventRegister(values);
        action.resetForm();
      },
    });

  const eventRegister = async (values) => {
    try {
      const data = {
        userName: values.userName,
        email: values.email,
        userPassword: values.userPassword,
        mobileNumber: values.mobileNumber,
        location: values.location,
      }
      console.log(values);
      const res = await Authentication.register(data);
      console.log(res);

      setTimeout(() => {
        Swal.fire({
          icon: 'success',
          title: 'Successfully Registered!',
          showConfirmButton: false,
          timer: 1500 // Adjust the duration as needed
        })
        setTimeout(() => {
          navigate('/Login');
        }, 2000);
      }, 2000);
    }
    catch (err) {
      console.log(err);
      setTimeout(() => {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Email or Username already Exists!',
        })
      }, 4000);
    }
  }

  return (
    <div>
      <div class="min-h-screen bg-purple-400 flex justify-center items-center">
        <div class="absolute w-60 h-60 rounded-xl bg-purple-300 -top-5 -left-16 z-0 transform rotate-45 hidden md:block"></div>
        <div class="absolute w-48 h-48 rounded-xl bg-purple-300 -bottom-[-2rem] right-[20px] transform rotate-12 hidden md:block"></div>
        <form onSubmit={handleSubmit} class="py-12 px-12 bg-white rounded-2xl shadow-xl z-20">
          <div className="flex justify-center mb-1 mt-auto" >
            <img src="/Images/mobile.png" width={35}></img>
          </div>
          <div>
            <h1 onClick={() => nav('/Login')} class="text-3xl font-bold text-center mb-4 cursor-pointer">Create An Account</h1>
            <p class="w-80 text-center text-sm mb-8 font-semibold text-gray-700 tracking-wide cursor-pointer">Create an account to Power up your phone with just a tap</p>
          </div>
          <div class="space-y-4">
            <input id="userName" type="text"
              name="userName"
              value={values.userName}
              onChange={handleChange}
              placeholder='Enter the username'
              onBlur={handleBlur} class="block text-sm py-3 px-4 rounded-lg w-full border outline-purple-500" />
            {errors.userName && touched.userName && <div className="text-red-600 text-xs">{errors.userName}</div>}

            <input id="email"
              type="email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email} placeholder="Email Address" class="block text-sm py-3 px-4 rounded-lg w-full border outline-purple-500" />
            {errors.email && touched.email && <div className="text-red-600 text-xs">{errors.email}</div>}

            <input id="mobileNumber"
              type="text"
              name="mobileNumber"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.mobileNumber} placeholder="Mobile Number" class="block text-sm py-3 px-4 rounded-lg w-full border outline-purple-500" />
            {errors.mobileNumber && touched.mobileNumber && <div className="text-red-600 text-xs">{errors.mobileNumber}</div>}

            <input id="password"
              type="password"
              name="userPassword"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.userPassword} placeholder="Password" class="block text-sm py-3 px-4 rounded-lg w-full border outline-purple-500" />
            {errors.userPassword && touched.userPassword && <div className="text-red-600 text-xs">{errors.userPassword}</div>}

            <input id="confirmpassword"
              type="password"
              name="confirmPassword"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.confirmPassword} placeholder="Confirm Password" class="block text-sm py-3 px-4 rounded-lg w-full border outline-purple-500" />
            {errors.confirmPassword && touched.confirmPassword && <div className="text-red-600 text-xs">{errors.confirmPassword}</div>}

            <input id="location"

              type="text"
              name="location"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.location} placeholder="Location" class="block text-sm py-3 px-4 rounded-lg w-full border outline-purple-500" />
            {errors.location && touched.location && <div className="text-red-600 text-xs">{errors.location}</div>}

            <div className="relative">
              <select
                name="operatorName"
                value={values.operatorName}
                onChange={handleChange}
                onBlur={handleBlur}
                className="block text-sm py-3 px-4 rounded-lg w-full border outline-purple-500"
              >
                <option value="" disabled>Select Operator</option>
                <option value="Airtel">Airtel</option>
                <option value="Bsnl">Bsnl</option>
                <option value="Jio">Jio</option>
                <option value="Vi">Vi</option>
              </select>
              <span className="absolute inset-y-0 end-0 grid place-content-center px-4 mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16"><g fill="#9ca3af"><path d="M5 4.5a.5.5 0 0 1 .5-.5h2v2H5zM8.5 6V4h2a.5.5 0 0 1 .5.5V6zM5 7h6v2H5zm3.5 3H11v1.5a.5.5 0 0 1-.5.5h-2zm-1 0v2h-2a.5.5 0 0 1-.5-.5V10z" /><path d="M3.5 0A1.5 1.5 0 0 0 2 1.5v13A1.5 1.5 0 0 0 3.5 16h9a1.5 1.5 0 0 0 1.5-1.5V3.414a1.5 1.5 0 0 0-.44-1.06L11.647.439A1.5 1.5 0 0 0 10.586 0zm2 3h5A1.5 1.5 0 0 1 12 4.5v7a1.5 1.5 0 0 1-1.5 1.5h-5A1.5 1.5 0 0 1 4 11.5v-7A1.5 1.5 0 0 1 5.5 3" /></g></svg>
              </span>
              {errors.operatorName && touched.operatorName && <div className="text-red-600 text-xs">{errors.operatorName}</div>}
            </div>
          </div>
          <div class="text-center mt-6">
            <button type='submit' class="w-full py-2 text-xl text-white bg-purple-400 rounded-lg hover:bg-purple-500 transition-all">Create Account</button>
            <p class="mt-4 text-sm">Already Have An Account? <span onClick={() => nav('/Login')} class="underline  cursor-pointer"> Sign In</span></p>
          </div>
        </form>
        <div class="w-40 h-40 absolute bg-purple-300 rounded-full top-0 right-12 hidden md:block"></div>
        <div class="w-20 h-40 absolute bg-purple-300 rounded-full bottom-20 left-10 transform rotate-45 hidden md:block"></div>
      </div>
    </div>
  );
}