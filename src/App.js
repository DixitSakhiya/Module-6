// src/App.js
import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const AdminLayout = React.lazy(() => import('./components/Admin/AdminLayout'));
const UserLayout = React.lazy(() => import('./components/User/UserLayout'));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/admin/*" element={<AdminLayout />} />
          <Route path="/user/*" element={<UserLayout />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
