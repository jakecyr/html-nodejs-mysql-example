const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const env = require('./config');

const routes = require('./routes/index');

const app = express();

app
    .use(morgan('dev'))
    .use(express.static('public'))
    .use(bodyParser.urlencoded({ extended: false }))
    .use(bodyParser.json())
    .use('/api', routes)
    .listen(env.port, () => console.log(`Server listening on port ${env.port}`));
