const express = require('express');

const app = express();
const PORT = 3000;


app.get('/',(req, res) => {
    res.send('Good girl !')
});

app.listen(PORT, () => {
    console.log(`server is running on http://locahost:${PORT}`)
});

