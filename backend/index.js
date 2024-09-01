const express = require('express');
const connectDB = require('./config/db');
const app = express();
require('dotenv').config();

connectDB();

app.use(express.json());

app.listen(process.env.PORT || 5000, () =>
  console.log(`Server running on port ${process.env.PORT || 5000}`)
);
