const express = require('express');
const cors = require('cors');
require('dotenv').config();

const { pool, testConnection } = require('./config/database');
const { errorHandler, notFoundHandler } = require('./middleware/errorHandler');
const { createDefaultAdmin } = require('./utils/createDefaultAdmin');

// Import routes
const contactRoutes = require('./routes/contact');
const adminRoutes = require('./routes/admin');
const authRoutes = require('./routes/auth');

// Check for essential environment variables on startup
if (!process.env.JWT_SECRET) {
  console.error("FATAL ERROR: JWT_SECRET is not defined in environment variables.");
  process.exit(1);
}

const app = express();
const PORT = process.env.PORT || 5000;

// --- Middleware Setup ---
app.use(cors());
app.use(express.json());

// --- Routes ---
app.use('/api/contact', contactRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/auth', authRoutes);

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// --- Error Handling ---
app.use(notFoundHandler);
app.use(errorHandler);

// --- Server Startup ---
const startServer = async () => {
  try {
    // Test database connection
    await testConnection();
    console.log('Database connection successful');
    
    // Create default admin user
    await createDefaultAdmin();
    
    // Start the server
    app.listen(PORT, () => {
      console.log(` Server running on port ${PORT}`);
      console.log(`Health check: http://localhost:${PORT}/api/health`);
    });
  } catch (error) {
    console.error(' Failed to connect to the database or start server:', error);
    process.exit(1);
  }
};

startServer();
