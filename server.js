const express = require('express');
const mongoose = require('mongoose');


const app = express();

// Middlewares
app.use(express.json());


// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/Shopping-Cart')
    .then(() => console.log('Connected to MongoDB Successfully...'))
    .catch((err) => console.log("Error : ", err));

// Route Files
const items = require('./routes/api/items');
app.use('/api/items', items);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => { console.log(`Shopping App Backend running at http://localhost:${PORT}`); });