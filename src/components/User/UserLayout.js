// src/modules/Admin/AdminLayout.js
import React from 'react';
import { Routes, Route, Outlet, Link } from 'react-router-dom';
import UserDashboard from './UserDashboard';
import UserSettings from './UserSettings';

function UserLayout() {
  return (
    <div>
      <h2>User Panel</h2>
      <nav>
        <Link to="dashboard">User Dashboard</Link>
        <br/>
        <Link to="settings">User Settings</Link>
      </nav>
      <Outlet />
      <Routes>
        <Route path="dashboard" element={<UserDashboard />} />
        <Route path="settings" element={<UserSettings />} />
      </Routes>
    </div>
  );
}

export default UserLayout;



