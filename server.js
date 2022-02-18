const express = require('express');
const mongoose = require('mongoose');


const app = express();

// Middlewares
app.use(express.json());


// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/Shopping-Cart')
    .then(() => console.log('Connected to MongoDB Successfully...'))
    .catch((err) => console.log("Error : ", err));

// Home Page Route (Backend Testing)
app.get('/', (req, res) => {
    res.status(200).json({message: "App running successfully"})
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => { console.log(`Shopping App Backend running at http://localhost:${PORT}`); });