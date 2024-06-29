// src/modules/Admin/AdminLayout.js
import React from 'react';
import { Routes, Route, Outlet, Link } from 'react-router-dom';
import AdminDashboard from './AdminDashboard';
import AdminSettings from './AdminSettings';

function AdminLayout() {
   
  return (
    <div>
      <h2>Admin Panel</h2>
      <nav>
        <Link to="dashboard">Dashboard</Link>
        <br/>
        <Link to="settings">Settings</Link>
      </nav>
      <Outlet />
      <Routes>
        <Route path="dashboard" element={<AdminDashboard />} />
        <Route path="settings" element={<AdminSettings />} />
      </Routes>
    </div>
  );
}

export default AdminLayout;



