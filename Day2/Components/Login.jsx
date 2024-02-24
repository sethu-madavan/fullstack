// export default function LoginPage() {
//   return (
//     <>
//       <div classNameNameName="flex h-screen flex-1 flex-col justify-center px-6 py-12 lg:px-8">
//         <div classNameNameName="sm:mx-auto sm:w-full sm:max-w-sm">
//           <img
//             classNameNameName="mx-auto h-10 w-auto"
//             src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
//             alt="Your Company"
//           />
//           <h2 classNameNameName="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
//             Sign in to your account
//           </h2>
//         </div>

//         <div classNameNameName="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
//           <form classNameNameName="space-y-6" action="#" method="POST">
//             <div>
//               <label htmlFor="email" classNameNameName="block text-sm font-medium leading-6 text-gray-900">
//                 Email address
//               </label>
//               <div classNameNameName="mt-2">
//                 <input
//                   id="email"
//                   name="email"
//                   type="email"
//                   autoComplete="email"
//                   required
//                   classNameNameName="block w-full rounded-md border-2 py-1.5 text-gray-900 bg-gray-50 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                 />
//               </div>
//             </div>

//             <div>
//               <div classNameNameName="flex items-center justify-between">
//                 <label htmlFor="password" classNameNameName="block text-sm font-medium leading-6 text-gray-900">
//                   Password
//                 </label>
//                 <div classNameNameName="text-sm">
//                   <a href="#" classNameNameName="font-semibold text-indigo-600 hover:text-indigo-500">
//                     Forgot password?
//                   </a>
//                 </div>
//               </div>
//               <div classNameNameName="mt-2">
//                 <input
//                   id="password"
//                   name="password"
//                   type="password"
//                   autoComplete="current-password"
//                   required
//                   classNameNameName="block w-full rounded-md border-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset bg-gray-50 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                 />
//               </div>
//             </div>

//             <div>
//               <button
//                 type="submit"
//                 classNameNameName="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//               >
//                 Sign in
//               </button>
//             </div>
//           </form>

//           <p classNameNameName="mt-10 text-center text-sm text-gray-500">
//             Not a member?{' '}
//             <a href="#" classNameNameName="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
//               Start a 14 day free trial
//             </a>
//           </p>
//         </div>
//       </div>
//     </>
//   )
// }
import React from "react";
import { useNavigate } from "react-router-dom";
export default function Login() {
  const nav = useNavigate();
  return (
    <div className="flex justify-center mt-[10%]">
      <div className="flex flex-col w-full max-w-md px-4 py-8 bg-white rounded-lg shadow sm:px-6 md:px-8 lg:px-10">
        <div className="flex justify-center mb-3" >
          <img src="/Images/mobile.png" width={50}></img>
        </div>
        <div className="self-center mb-6 text-xl font-light text-gray-600 sm:text-2xl ">
          Login To Your Account
        </div>
        <div className="mt-8">
          <form action="#" autoComplete="off">
            <div className="flex flex-col mb-2">
              <div className="flex relative ">
                <span className="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                  <svg width="15" height="15" fill="currentColor" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1792 710v794q0 66-47 113t-113 47h-1472q-66 0-113-47t-47-113v-794q44 49 101 87 362 246 497 345 57 42 92.5 65.5t94.5 48 110 24.5h2q51 0 110-24.5t94.5-48 92.5-65.5q170-123 498-345 57-39 100-87zm0-294q0 79-49 151t-122 123q-376 261-468 325-10 7-42.5 30.5t-54 38-52 32.5-57.5 27-50 9h-2q-23 0-50-9t-57.5-27-52-32.5-54-38-42.5-30.5q-91-64-262-182.5t-205-142.5q-62-42-117-115.5t-55-136.5q0-78 41.5-130t118.5-52h1472q65 0 112.5 47t47.5 113z">
                    </path>
                  </svg>
                </span>
                <input type="text" id="sign-in-email" className=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Your email" />
              </div>
            </div>
            <div className="flex flex-col mb-6">
              <div className="flex relative ">
                <span className="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                  <svg width="15" height="15" fill="currentColor" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1376 768q40 0 68 28t28 68v576q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-576q0-40 28-68t68-28h32v-320q0-185 131.5-316.5t316.5-131.5 316.5 131.5 131.5 316.5q0 26-19 45t-45 19h-64q-26 0-45-19t-19-45q0-106-75-181t-181-75-181 75-75 181v320h736z">
                    </path>
                  </svg>
                </span>
                <input type="password" id="sign-in-email" className=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Your password" />
              </div>
            </div>
            <div className="flex items-center mb-6 -mt-4">
              <div className="flex ml-auto">
                <a href="#" className="inline-flex text-xs font-thin text-gray-500 sm:text-sm hover:text-gray-700 ">
                  Forgot Your Password?
                </a>
              </div>
            </div>
            <div className="flex w-full">
              <button type="submit" className="py-2 px-4  bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                Login
              </button>
            </div>
          </form>
        </div>
        <div className="flex items-center justify-center mt-6">
          <a onClick={() => nav('/SignUp')} target="_blank" className="inline-flex items-center text-xs font-thin text-center text-gray-500 hover:text-gray-700" style={{cursor:'pointer'}}>
            <span className="ml-2">
              You don&#x27;t have an account?
            </span>
          </a>
        </div>
      </div>
    </div>

  );

}
