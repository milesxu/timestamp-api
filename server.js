"use strict";
let express = require("express");
let app = express();

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
'August', 'September', 'October', 'November', 'December'];
app.get('/:timeString', (req, res) => {
    let result = {
        unix: null,
        natural: null
    };
    let msec = Number(req.params.timeString);
    let date;
    if (msec)
        date = new Date(msec * 1000);
    else
        date = new Date(req.params.timeString);
    if (date && date.getTime()){
        result.natural = `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
        result.unix = Date.parse(result.natural) / 1000;
    }
    res.json(result);
});

app.listen(process.env.PORT || 8080, () => console.log('express app is running!'));