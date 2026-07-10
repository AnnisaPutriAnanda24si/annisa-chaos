// src/App.jsx
import React from 'react';
import { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet, Navigate } from 'react-router-dom';
import Loading from './components/Loading';
import Patient from './pages/admin/Patient';
import Treatment from './pages/admin/Treatment';
import Doctor from './pages/admin/Doctor';
import Membership from './pages/admin/Membership';

// Layouts
const MainLayout = React.lazy(() => import('./layouts/MainLayouts'));
const AuthLayout = React.lazy(() => import('./layouts/AuthLayouts'));
const MainLayout_member = React.lazy(() => import('./layouts/MainLayouts_member'));
const AuthLayouts_admin = React.lazy(() => import('./layouts/AuthLayouts_admin'));
const MainLayouts_admin = React.lazy(() => import('./layouts/MainLayouts_admin'));

// Pages
// ==========================================
// ADMIN PAGES
// ==========================================
const Login_admin = React.lazy(() => import('./pages/auth/Login_admin'));
const Register_admin = React.lazy(() => import('./pages/auth/Register_admin'));
const Forgot_admin = React.lazy(() => import('./pages/auth/Forgot_admin'));
const Home_admin = React.lazy(() => import('./pages/admin/Home_admin'));
const Users = React.lazy(() => import('./pages/admin/Users'));
const ScheduleAdmin = React.lazy(() => import('./pages/admin/Schedule'));
const BookingAdmin = React.lazy(() => import('./pages/admin/Booking'));

// ==========================================
// GUEST PAGES
// ==========================================
const LandingPage = React.lazy(() => import('./pages/guest/LandingPage'));
const Home = React.lazy(() => import('./pages/Home'));
const Contact = React.lazy(() => import('./pages/Contact'));
const About = React.lazy(() => import('./pages/About'));
const Login = React.lazy(() => import('./pages/auth/Login'));
const Register = React.lazy(() => import('./pages/auth/Register'));

// ==========================================
// MEMBER PAGES
// ==========================================
const Home_member = React.lazy(() => import('./pages/member/Home'));
const Booking = React.lazy(() => import('./pages/member/Booking'));
const CheckoutPage = React.lazy(() => import('./pages/member/Checkout'));
const Schedule = React.lazy(() => import('./pages/member/Schedule'));
const DetailDoctor = React.lazy(() => import('./pages/member/DetailDoctor'));
const Profile = React.lazy(() => import('./pages/member/Profile'));

//Components
const NotFound = React.lazy(() => import('./components/NotFound'))

// Helper untuk mengecek apakah session token Supabase ada di LocalStorage
const isAuthenticated = () => {
  // const supabaseTokenKey = Object.keys(localStorage).find(key => key.startsWith('sb-') && key.endsWith('-auth-token'));
  // return !!localStorage.getItem(supabaseTokenKey);
  return !!localStorage.getItem("user_session");
};

// 1. Rute Khusus User yang BELUM Login (Login, Register, dll)
// const GuestRoute = () => {
//   return isAuthenticated() ? <Navigate to="/landingPage" replace /> : <Outlet />;
// };

// 2. Rute Khusus User yang SUDAH Login (Dashboard Member & Admin)
const ProtectedRoute = () => {
  return isAuthenticated() ? <Outlet /> : <Navigate to="/" replace />;
};

export default function App() {
  return (
    <Router>
      <Suspense fallback={<Loading/>}>
      <Routes>


        <Route element={<ProtectedRoute />}>

                <Route element={<MainLayouts_admin />}>
          <Route path="/home_admin" element={<Home_admin />} />
           <Route path="/patients_admin" element={<Patient/>} />
            <Route path="/users_admin" element={<Users />} />
            <Route path="/treatment_admin" element={<Treatment/>} />
            <Route path="/doctor_admin" element={<Doctor/>} />
            <Route path="/schedule_admin" element={<ScheduleAdmin/>} />
            <Route path="/booking_admin" element={<BookingAdmin/>} />
            <Route path="/membership_admin" element={<Membership/>} />
        </Route>

        <Route element={<MainLayout_member/>}>
        <Route path="/profile" element={<Profile/>} />
          <Route path="/home_member" element={<Home_member/>} />
          <Route path="/booking" element={<Booking/>} />
           <Route path="/checkout" element={<CheckoutPage/>} />
             <Route path="/schedule" element={<Schedule/>} />
          <Route path="/doctor/:id" element={<DetailDoctor/>} />
        </Route>
        
        </Route>

        {/* <Route element={<AuthLayouts_admin/>}>
          <Route path="/login_admin" element={<Login_admin/>} />
          <Route path="/register_admin" element={<Register_admin />} />
          <Route path="/forgot_admin" element={<Forgot_admin />} />
        </Route> */}
{/* 
        <Route element={<GuestRoute />}> */}

        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>

        <Route path="/" element={<LandingPage />} />
        
        {/* </Route> */}



        <Route element={<MainLayout />}>
          {/* <Route path="/" element={<Home />} /> */}
          {/* <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About/>} /> */}
        </Route>

        <Route path="*" element={<NotFound />} />

      </Routes>
      
      </Suspense>
    </Router>
  );
}