const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');

const athleteRouter = require('./routes/athlete');
const indexRouter = require('./routes/index');
const signupRouter = require('./routes/signup');
const workoutRouter = require('./routes/workout');


const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

app.use('/', indexRouter);
app.use('/athlete', athleteRouter);
app.use('/signup', signupRouter);
app.use('/workout', workoutRouter);


module.exports = app;
