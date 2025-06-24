const express = require('express');
const router = require('./routes');

const app = express();

app.use(router);

app.listen(5000, () => console.log('Server was started on port 5000'));
