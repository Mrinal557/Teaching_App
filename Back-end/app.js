// app.js
const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const authRoutes = require('./routes/AuthRoutes');
const uploadRoutes = require('./routes/UploadRoutes');

dotenv.config();

connectDB();

const app = express();
const cors = require('cors');

// const corsOptions = {
//   origin: 'http://localhost:3000', // Replace with your frontend URL
//   methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
//   credentials: true,
//   optionsSuccessStatus: 204,
// };

app.use(express.json());
app.use(cors());

app.use('/api/auth', authRoutes);
app.use('/api/upload', uploadRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
{
  console.log(`Server running on port ${PORT}`);
});
