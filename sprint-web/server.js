var express = require('express');
var app = express();

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    if(process.argv.includes("delayresponse")) {
        setTimeout(function(){
            next();
        }, 2000);
    } else {
        next();
    }
});

app.get('/tickets/urgent', function (req, res) {
    res.json({
        min: 0,
        max: 24,
        value: Math.floor(Math.random() * 5)
    })
});

app.get('/tickets/progression', function (req, res) {
    let labels = ["Opened Tickets", "Closed Tickets"];
    let colors = ["#e74c3c", "#27ae60"];
    let values = [];

    labels.forEach((label, index) => {
        let data = [];
        for(let i = 0; i < 7; i++) {
            data.push(Math.floor(Math.random() * 10) + i);
        }

        values.push({
            label,
            data,
            color: colors[index]
        });
    });

    res.json(values);
});

app.get('/tickets/*', function (req, res) {
    res.json({
        value: Math.floor(Math.random() * 10) + 1
    })
});

app.get('/stats/top', function (req, res) {
    res.json([
        {
            label: "Sasanth",
            value: Math.floor(Math.random() * 5) + 26
        },
        {
            label: "Sai",
            value: Math.floor(Math.random() * 5) + 13
        },
        {
            label: "Ravi",
            value: Math.floor(Math.random() * 5) + 18
        },
        {
            label: "Vivek",
            value: Math.floor(Math.random() * 5) + 19
        },
        {
            label: "Rich",
            value: Math.floor(Math.random() * 5) + 4
        },
        {
            label: "Scott",
            value: Math.floor(Math.random() * 5) + 12
        },
        {
            label: "Jason",
            value: Math.floor(Math.random() * 5) + 18
        },
        {
            label: "Bill",
            value: Math.floor(Math.random() * 5) + 7
        }
    ]);    
});

app.get('/stats/*', function (req, res) {
    res.json({
        min: 0,
        max: 100,
        value: Math.floor(Math.random() * 25) + 50
    });
});

app.listen(3001, function () {
    console.log('Data being served from http://localhost:3001');
});