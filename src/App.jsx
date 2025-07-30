import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Register from './pages/Register';
import UserDashboard from './pages/UserDashboard';
import AdminDashboard from './pages/AdminDashboard';
import Doctors from './pages/Doctors';
import BookAppointment from './pages/BookAppointment';
import MyAppointments from './pages/MyAppointments';
import NotFound from './pages/NotFound';
import MainLayout from './layouts/MainLayout';
import ProtectedRoute from './components/ProtectedRoute';
import Services from './pages/Services';


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="doctors" element={<Doctors />} />
        <Route path="book" element={<BookAppointment />} />
        <Route path="appointments" element={<MyAppointments />} />
        <Route path="services" element={<Services />} />

        {/* Protected Routes */}
        <Route path="user-dashboard" element={<ProtectedRoute><UserDashboard /></ProtectedRoute>} />
        <Route path="admin-dashboard" element={<ProtectedRoute admin={true}><AdminDashboard /></ProtectedRoute>} />

        {/* 404 Page */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
