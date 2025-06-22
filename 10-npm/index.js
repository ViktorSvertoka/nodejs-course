const express = require('express');
const app = express();

app.get('/', function (req, res) {
    res.send('Hello from Express!!!!');
});

app.listen(3000);
