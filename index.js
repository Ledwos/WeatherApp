const express = require('express');
require('dotenv').config();
const path = require('path');
const cors = require('cors');
const app = express();
const fetch = require('node-fetch');

app.use(cors());
app.use(express.static(path.join(__dirname, 'ws-client/build')));

// TRY CATCH FOR API CALLS

app.get('/api/weather/:location', (req,res) => {
    var weather;
    var location = req.params.location;
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&APPID=${process.env.W_API_KEY}`)
        .then(response => response.json())
        .then(data => res.json(data));
    // console.log(`weather api called! location: ${location}`);
});

// catchall handler
// make a separate 404 html?

app.get('*', (req,res) => {
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`live on port ${port}`);
