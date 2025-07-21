import React, { useState, useEffect } from 'react';
import { Eye, Search, Filter, Download, Trash2, CheckCircle, Clock, AlertCircle, XCircle, LogOut, Sun, Moon } from 'lucide-react';
import Animation from './components/AnimatedParticles.jsx'; // Assuming this is the particle component

const AdminDashboard = () => {
  // --- THEME STATE LOGIC ---
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme || 'light';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };
  // --- END THEME STATE LOGIC ---

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginData, setLoginData] = useState({ username: '', password: '' });
  const [loginError, setLoginError] = useState('');
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  
  const [requests, setRequests] = useState([]);
  const [stats, setStats] = useState({});
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const API_BASE = 'http://localhost:3000/api';
  const getToken = () => localStorage.getItem('adminToken');

  const apiCall = async (endpoint, options = {}, requireAuth = true) => {
    const token = getToken();
    const config = {
      headers: { 'Content-Type': 'application/json' },
      ...options,
    };
    if (requireAuth && token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    const response = await fetch(`${API_BASE}${endpoint}`, config);
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.error || 'API request failed');
    }
    return data;
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoggingIn(true);
    setLoginError('');
    try {
      const response = await apiCall('/auth/login', {
        method: 'POST',
        body: JSON.stringify(loginData),
      }, false);
      localStorage.setItem('adminToken', response.token);
      localStorage.setItem('adminUser', JSON.stringify(response.admin));
      setIsLoggedIn(true);
      fetchDashboardData();
    } catch (error) {
      setLoginError(error.message);
    } finally {
      setIsLoggingIn(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    localStorage.removeItem('adminUser');
    setIsLoggedIn(false);
    setRequests([]);
    setStats({});
  };

  const fetchDashboardData = async () => {
    if (!getToken()) {
        setIsLoggedIn(false);
        return;
    }
    setLoading(true);
    try {
      const [requestsData, statsData] = await Promise.all([
        apiCall(`/admin/requests?page=${currentPage}&limit=10&status=${statusFilter}&search=${searchTerm}`),
        apiCall('/admin/stats')
      ]);
      setRequests(requestsData.requests);
      setTotalPages(requestsData.pagination.totalPages);
      setStats(statsData);
    } catch (error) {
      console.error('Failed to fetch data:', error);
      if (error.message.includes('unauthorized') || error.message.includes('token')) {
        handleLogout();
      }
    } finally {
      setLoading(false);
    }
  };

  const updateStatus = async (id, status) => {
    try {
      await apiCall(`/admin/requests/${id}/status`, {
        method: 'PATCH',
        body: JSON.stringify({ status }),
      });
      fetchDashboardData();
    } catch (error) {
      console.error('Failed to update status:', error);
    }
  };

  const deleteRequest = async (id) => {
    if (!window.confirm('Are you sure you want to delete this request?')) return;
    try {
      await apiCall(`/admin/requests/${id}`, { method: 'DELETE' });
      fetchDashboardData();
      setShowModal(false);
    } catch (error) {
      console.error('Failed to delete request:', error);
    }
  };

  const viewRequest = async (id) => {
    try {
      const request = await apiCall(`/admin/requests/${id}`);
      setSelectedRequest(request);
      setShowModal(true);
    } catch (error) {
      console.error('Failed to fetch request details:', error);
    }
  };

  useEffect(() => {
    if (getToken()) {
      setIsLoggedIn(true);
      fetchDashboardData();
    }
  }, []);

  useEffect(() => {
    if (isLoggedIn) {
      fetchDashboardData();
    }
  }, [currentPage, statusFilter, searchTerm, isLoggedIn]);

  const statusConfig = {
    new: { color: 'bg-blue-500/20 text-blue-400 border-blue-500/30', icon: <AlertCircle size={14} />, label: 'New' },
    in_progress: { color: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30', icon: <Clock size={14} />, label: 'In Progress' },
    contacted: { color: 'bg-purple-500/20 text-purple-400 border-purple-500/30', icon: <Eye size={14} />, label: 'Contacted' },
    completed: { color: 'bg-green-500/20 text-green-400 border-green-500/30', icon: <CheckCircle size={14} />, label: 'Completed' },
    cancelled: { color: 'bg-red-500/20 text-red-400 border-red-500/30', icon: <XCircle size={14} />, label: 'Cancelled' }
  };

  const formatDate = (dateString) => new Date(dateString).toLocaleString('en-IN', { dateStyle: 'medium', timeStyle: 'short' });

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-black flex items-center justify-center p-4 transition-colors duration-300">
        <Animation theme={theme} />
        <div className="relative z-10 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg rounded-2xl p-8 w-full max-w-md border border-gray-200 dark:border-gray-800 shadow-2xl">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-black text-gray-900 dark:text-white mb-2">
              <span>FEET</span>
              <span className="text-orange-500"> INFRA</span>
            </h1>
            <p className="text-gray-500 dark:text-gray-400">Admin Dashboard Login</p>
          </div>
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-2">Username</label>
              <input type="text" value={loginData.username} onChange={(e) => setLoginData({ ...loginData, username: e.target.value })} className="w-full px-4 py-3 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:border-orange-500 focus:outline-none text-gray-800 dark:text-white" placeholder="Enter username" required />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-2">Password</label>
              <input type="password" value={loginData.password} onChange={(e) => setLoginData({ ...loginData, password: e.target.value })} className="w-full px-4 py-3 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:border-orange-500 focus:outline-none text-gray-800 dark:text-white" placeholder="Enter password" required />
            </div>
            {loginError && <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-3 text-red-600 dark:text-red-400 text-sm">{loginError}</div>}
            <button type="submit" disabled={isLoggingIn} className="w-full bg-orange-500 hover:bg-orange-600 disabled:bg-gray-400 text-white font-bold py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105">{isLoggingIn ? 'Logging in...' : 'Login'}</button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black text-gray-900 dark:text-white transition-colors duration-300">
      <Animation theme={theme} />
      <header className="sticky top-0 z-40 bg-white/80 dark:bg-black/80 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800 p-4">
        <div className="flex justify-between items-center max-w-screen-xl mx-auto">
          <h1 className="text-2xl font-bold">
            <span className="text-gray-900 dark:text-white">FEET</span>
            <span className="text-orange-500"> INFRA</span>
            <span className="text-gray-400 text-lg ml-2 font-normal">Admin</span>
          </h1>
          <div className="flex items-center gap-4">
            <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800">
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>
            <button onClick={handleLogout} className="flex items-center gap-2 bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg text-white transition-colors duration-300">
              <LogOut size={16} /> Logout
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-screen-xl mx-auto p-6 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {[
            { title: 'Total Requests', value: stats.totalRequests || 0, icon: <Eye size={24} />, color: 'blue' },
            { title: 'New Requests', value: stats.newRequests || 0, icon: <AlertCircle size={24} />, color: 'yellow' },
            { title: 'In Progress', value: stats.inProgressRequests || 0, icon: <Clock size={24} />, color: 'purple' },
            { title: 'Completed', value: stats.completedRequests || 0, icon: <CheckCircle size={24} />, color: 'green' },
          ].map(stat => (
            <div key={stat.title} className={`bg-white dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 rounded-xl p-6 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300`}>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">{stat.title}</p>
                  <p className={`text-4xl font-bold text-${stat.color}-500`}>{stat.value}</p>
                </div>
                <div className={`bg-${stat.color}-500/10 p-4 rounded-full`}>
                  {React.cloneElement(stat.icon, { className: `text-${stat.color}-500` })}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 rounded-xl p-6 mb-6 shadow-lg">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input type="text" placeholder="Search by name, email, or company..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="w-full pl-12 pr-4 py-3 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:border-orange-500 focus:outline-none" />
            </div>
            <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)} className="px-4 py-3 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:border-orange-500 focus:outline-none">
              <option value="all">All Statuses</option>
              {Object.entries(statusConfig).map(([key, { label }]) => <option key={key} value={key}>{label}</option>)}
            </select>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden shadow-lg">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 dark:bg-gray-800/50">
                <tr>
                  {['Name', 'Contact', 'Service', 'Status', 'Date', 'Actions'].map(h => <th key={h} className="text-left p-4 text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">{h}</th>)}
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr><td colSpan="6" className="text-center p-8 text-gray-500">Loading...</td></tr>
                ) : requests.length === 0 ? (
                  <tr><td colSpan="6" className="text-center p-8 text-gray-500">No requests found.</td></tr>
                ) : (
                  requests.map((request) => (
                    <tr key={request.id} className="border-t border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors duration-200">
                      <td className="p-4 align-top"><p className="font-medium">{request.name}</p><p className="text-sm text-gray-500">{request.company || 'N/A'}</p></td>
                      <td className="p-4 align-top"><p className="text-sm">{request.email}</p><p className="text-sm text-gray-500">{request.phone}</p></td>
                      <td className="p-4 align-top"><span className="inline-block bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded text-sm">{request.service}</span></td>
                      <td className="p-4 align-top">
                        <select value={request.status} onChange={(e) => updateStatus(request.id, e.target.value)} className={`px-2 py-1 rounded text-sm border-none focus:outline-none bg-transparent ${statusConfig[request.status]?.color.split(' ')[0]}`}>
                          {Object.entries(statusConfig).map(([key, { label }]) => <option key={key} value={key} className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white">{label}</option>)}
                        </select>
                      </td>
                      <td className="p-4 align-top text-sm text-gray-500">{formatDate(request.created_at)}</td>
                      <td className="p-4 align-top">
                        <div className="flex gap-2">
                          <button onClick={() => viewRequest(request.id)} className="bg-blue-500/10 hover:bg-blue-500/20 text-blue-500 p-2 rounded-lg transition-colors duration-300" title="View Details"><Eye size={16} /></button>
                          <button onClick={() => deleteRequest(request.id)} className="bg-red-500/10 hover:bg-red-500/20 text-red-500 p-2 rounded-lg transition-colors duration-300" title="Delete Request"><Trash2 size={16} /></button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-4 p-4 border-t border-gray-200 dark:border-gray-800">
              <button onClick={() => setCurrentPage(p => Math.max(1, p - 1))} disabled={currentPage === 1} className="px-4 py-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 disabled:opacity-50 rounded transition-colors duration-300">Previous</button>
              <span className="text-sm text-gray-500">Page {currentPage} of {totalPages}</span>
              <button onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))} disabled={currentPage === totalPages} className="px-4 py-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 disabled:opacity-50 rounded transition-colors duration-300">Next</button>
            </div>
          )}
        </div>
      </main>

      {showModal && selectedRequest && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white dark:bg-gray-900 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-gray-200 dark:border-gray-800">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6 pb-4 border-b border-gray-200 dark:border-gray-800">
                <h2 className="text-2xl font-bold">Request Details</h2>
                <button onClick={() => setShowModal(false)} className="text-gray-400 hover:text-orange-500 transition-colors duration-300"><XCircle size={24} /></button>
              </div>
              <div className="space-y-6">
                {[
                  { label: 'Name', value: selectedRequest.name }, { label: 'Email', value: selectedRequest.email },
                  { label: 'Phone', value: selectedRequest.phone }, { label: 'Company', value: selectedRequest.company || 'N/A' },
                  { label: 'Service', value: selectedRequest.service }, { label: 'Budget', value: selectedRequest.budget || 'N/A' },
                  { label: 'Timeline', value: selectedRequest.timeline || 'N/A' },
                ].map(item => (
                  <div key={item.label}>
                    <label className="block text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">{item.label}</label>
                    <p className="text-lg bg-gray-100 dark:bg-gray-800 p-3 rounded-lg">{item.value}</p>
                  </div>
                ))}
                <div>
                  <label className="block text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Status</label>
                  <p className={`inline-flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium border ${statusConfig[selectedRequest.status]?.color || 'bg-gray-500'}`}>{statusConfig[selectedRequest.status]?.icon}{statusConfig[selectedRequest.status]?.label}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Project Details</label>
                  <div className="text-base bg-gray-100 dark:bg-gray-800 p-3 rounded-lg whitespace-pre-wrap h-32 overflow-y-auto">{selectedRequest.message}</div>
                </div>
                <div className="flex justify-end items-center pt-6 border-t border-gray-200 dark:border-gray-800 gap-4">
                  <button onClick={() => setShowModal(false)} className="px-4 py-2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 rounded-lg transition-colors duration-300">Close</button>
                  <button onClick={() => deleteRequest(selectedRequest.id)} className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-colors duration-300">Delete</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
