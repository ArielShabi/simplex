const express = require('express');
const getQuote = require('./routes/getQuote');
const config = require('config');


const port = config.get('port');

const app = express();

app.use('/api', getQuote)

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});
