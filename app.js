const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
require('./models/User');
require('./models/Collection');
require('./services/passport');

const authRouter = require('./routes/auth');
const apiRouter = require('./routes/api');
const searchRouter = require('./routes/search');

mongoose.connect(keys.mongoURI);

const app = express();

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(express.static(path.join(__dirname, 'client/build')));

//route handlers

app.use('/auth', authRouter);
app.use('/api', apiRouter);
app.use('/req/', searchRouter);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});


module.exports = app;
