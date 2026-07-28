const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const contactRoutes = require('./routes/contact.route');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS so the React frontend (running on port 5173) can communicate with this backend
app.use(cors());
// Parse incoming JSON requests (req.body)
app.use(express.json());

// Base route for contact form submissions
app.use('/api/contact', contactRoutes);

// A simple health-check route to verify the server is running
app.get('/', (req, res) => {
  res.send('NECYL Backend API is running smoothly.');
});

app.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});