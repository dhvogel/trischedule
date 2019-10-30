const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');

const indexRouter = require('./routes/index');
const workoutRouter = require('./routes/workout');
const athleteRouter = require('./routes/athlete');

const app = express();

const corsOptions = {
  origin: 'http://localhost:3000',
};

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors(corsOptions));

app.use('/', indexRouter);
app.use('/workout', workoutRouter);
app.use('/athlete', athleteRouter);

module.exports = app;