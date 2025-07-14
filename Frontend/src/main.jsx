import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ConstructionHomepage from './Home.jsx';
import AboutUsPage from './Aboutus.jsx';
import ProjectsPage from './Projects.jsx';
import ContactPage from './contact.jsx';
import AdminDashboard from './Admin.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ConstructionHomepage />} />
        <Route path="/home" element={<ConstructionHomepage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
