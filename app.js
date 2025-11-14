const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const morgan = require('morgan');


// Middleware
app.use(bodyParser.json());
app.use(morgan('dev'));

// Sample route

app.get('/', (req, res) => {
    res.send('Hello World!');       
});
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
}
);

module.exports = app;