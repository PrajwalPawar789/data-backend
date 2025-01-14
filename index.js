// index.js
const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5032;

// Increase the payload size limit to 50MB for JSON and URL-encoded bodies
app.use(express.json({ limit: '100mb' }));
app.use(express.urlencoded({ limit: '100mb', extended: true }));

app.use(cookieParser());
app.use(cors({
  origin: ['http://192.168.1.36:3032', 'http://localhost:3030'],
  credentials: true
}));

const Router = require('./routes');

app.use('/api/v1', Router);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
