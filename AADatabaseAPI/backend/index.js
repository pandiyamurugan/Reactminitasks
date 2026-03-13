const express = require('express');
const connectDB = require('./config/db');
const postRoutes = require('./routes/postRoutes');

const app = express();

app.use(express.json());

connectDB();

app.use('/', postRoutes);

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});