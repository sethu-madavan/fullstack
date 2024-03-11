import React, { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import UserLayout from './Components/Layouts/UserLayout';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import Load from './Components/Suspense';
import MainComp from './Components/admin/MainComp';

// Define a function to wrap lazy-loaded components with delay
const withDelay = (importComponent, delay) => {
  const LazyComponent = lazy(async () => {
    await new Promise(resolve => setTimeout(resolve, delay));
    return importComponent();
  });
  return props => (
    <Suspense fallback={<Load />}>
      <LazyComponent {...props} />
    </Suspense>
  );
};

// Lazy load components with delay
const LazyDash = withDelay(() => import('./Components/Home'));
const LazyProfile = withDelay(() => import('./Components/Profiles'));
const LazyViewplans = withDelay(() => import('./Components/Viewplans'));
const LazyViewDetails = withDelay(() => import('./Components/ViewDetails'));
const LazyPaymentHistory = withDelay(() => import('./Components/PaymentHistory'));

function App() {
  return (
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
        {/* <Route path="/Profile" element={<Profile />} /> */}
        <Route path="/" element={<UserLayout component={LazyDash} />} />
        <Route path="/Profile" element={<UserLayout component={LazyProfile} />} />
        <Route path="/Viewplans" element={<UserLayout component={LazyViewplans} />} />
        <Route path="/mobile-recharge/:operator/:mobileNumber" element={<UserLayout component={LazyViewDetails} />} />
        <Route path="/PaymentHistory" element={<UserLayout component={LazyPaymentHistory} />} />
        <Route path="/admin-dash" element={<MainComp />} />
      </Routes>
  );
}

export default App;
