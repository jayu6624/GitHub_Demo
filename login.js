const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

// Middleware
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(helmet());
app.use(cors());
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100 // limit each IP to 100 requests per windowMs
});
app.use(limiter);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Sample route
app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    if (username === 'admin' && password === 'password') {
        res.status(200).send({ message: 'Login successful' });
    } else {
        res.status(401).send({ message: 'Invalid credentials' });
    }   
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});


// Export the app for testing purposes
module.exports = app;
