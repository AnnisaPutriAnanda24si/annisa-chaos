// src/App.jsx
import React from 'react';
import { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Loading from './components/Loading';
// Lazy Imports untuk Layouts
const MainLayout = React.lazy(() => import('./layouts/MainLayouts'));
const AuthLayout = React.lazy(() => import('./layouts/AuthLayouts'));

// Lazy Imports untuk Pages
const Home = React.lazy(() => import('./pages/Home'));
const Login = React.lazy(() => import('./pages/auth/Login'));
const Register = React.lazy(() => import('./pages/auth/Register'));

export default function App() {
  return (
    <Router>
      <Suspense fallback={<Loading/>}>
      <Routes>

        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
        </Route>

        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>

      </Routes>
      </Suspense>
    </Router>
  );
}