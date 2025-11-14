const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');


app.use(bodyParser.json());



app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.post('/data', (req, res) => {
    res.json({
        message: 'Data received successfully',
        data: req.body
    });
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});             