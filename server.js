const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');


const app = express();

// Middlewares
app.use(express.json());
app.use(cors());

// DB Config
const db = require('./config/keys').mongoURI;

// MongoDB Connection
mongoose.connect(db)
    .then(() => console.log('Connected to MongoDB Successfully...'))
    .catch((err) => console.log("Error : ",err));

// Route Files
const items = require('./routes/api/items');
app.use('/api/items',items);


const PORT = process.env.PORT || 5000;
app.listen(PORT,() => { console.log(`Shopping App Backend running at http://localhost:${PORT}`); });