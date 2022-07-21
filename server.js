require('dotenv').config();
const express = require('express');
require('./config/db')
const cors = require('cors');
const path = require('path');

const app = express();

// Middlewares
app.use(express.json());
app.use(cors());


// Route Files
const items = require('./routes/api/items');
app.use('/api/items',items);


// Serve Static assets if in production
if (process.env.NODE_ENV === 'production') {
    // Set Static Folder
    app.use(express.static('client/build'));

    app.get('*',(req,res) => {
        res.sendFile(path.resolve(__dirname,'client','build','index.html'));
    });
}


const PORT = process.env.PORT || 5000;
app.listen(PORT,() => { console.log(`Shopping App Backend running at http://localhost:${PORT}`); });