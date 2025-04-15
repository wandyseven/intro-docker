const express = require('express');

const app = express();
const PORT = 3000;


app.get('/',(res, req) => {
    res.send('Hello world !')
});

app.listen(PORT, () => {
    console.log(`server is runninf on http://locahost:${PORT}`)
});

