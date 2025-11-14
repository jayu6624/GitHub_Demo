const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.post('/data', (req, res) => {
    const receivedData = req.body;
    res.json({
        message: 'Data received successfully',
        data: receivedData
    });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});