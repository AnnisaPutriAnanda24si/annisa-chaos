// src/App.jsx
import React from 'react';
import { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Loading from './components/Loading';
import AuthLayouts_admin from './layouts/AuthLayouts_admin';
import Login_admin from './pages/auth/Login_admin';
import Register_admin from './pages/auth/Register_admin';
import Forgot_admin from './pages/auth/Forgot_admin';
import Home_admin from './pages/Home_admin';
import MainLayouts_admin from './layouts/MainLayouts_admin';
// Lazy Imports untuk Layouts
const MainLayout = React.lazy(() => import('./layouts/MainLayouts'));
const AuthLayout = React.lazy(() => import('./layouts/AuthLayouts'));

// Lazy Imports untuk Pages
const Home = React.lazy(() => import('./pages/Home'));
const Contact = React.lazy(() => import('./pages/Contact'));
const About = React.lazy(() => import('./pages/About'));
const Login = React.lazy(() => import('./pages/auth/Login'));
const Register = React.lazy(() => import('./pages/auth/Register'));

//Components
const NotFound = React.lazy(() => import('./components/NotFound'))

export default function App() {
  return (
    <Router>
      <Suspense fallback={<Loading/>}>
      <Routes>

        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About/>} />
        </Route>

        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>

        <Route element={<MainLayouts_admin />}>
          <Route path="/home_admin" element={<Home_admin />} />
        </Route>

        <Route element={<AuthLayouts_admin/>}>
          <Route path="/login_admin" element={<Login_admin/>} />
          <Route path="/register_admin" element={<Register_admin />} />
          <Route path="/forgot_admin" element={<Forgot_admin />} />
        </Route>

        <Route path="*" element={<NotFound />} />

      </Routes>
      
      </Suspense>
    </Router>
  );
}