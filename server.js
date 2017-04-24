"use strict";
let express = require("express");
let app = express();

app.get('/', (req, res) => {
    res.send("Hello world!");
});

app.listen(8080, () => console.log('express app is running!'));