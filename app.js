const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const morgan = require('morgan');
const helmet = require('helmet');

// Middleware
app.use(helmet());
app.use(bodyParser.json());
app.use(morgan('combined'));

// Sample route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
