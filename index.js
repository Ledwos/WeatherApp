const express = require('express');
require('dotenv').config();
const path = require('path');
const app = express();
const fetch = require('node-fetch');

// app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/api/weather', (req,res) => {
    var weather;
    var test = 'sydney';
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${test}&units=metric&APPID=${process.env.W_API_KEY}`)
        .then(response => response.json())
        .then(data => {
            // console.log(data);
            res.json(data);
        })
    console.log('api path called!');
    // res.json(weather);
});

//unsplash fetch
// fetch(`https://api.unsplash.com/search/photos/?page=1&per_page=1&query=LOCATION_QUERY_HERE&client_id=${process.env.U_API_KEY}`)
//         .then(response => response.json())
//         .then(data => this.setState({imgData: data}));



// catchall handler
// make a separate 404 html?

app.get('*', (req,res) => {
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`live on port ${port}`);
