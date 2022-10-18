const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');

const indexRouter = require('./routes/index');
const userRouter = require('./routes/user');



const app = express();

app.use(
    cors()
);

// view engine setup
/*
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
*/


app.use((req, res, next) => {
    req.rawBody = '';
    req.on('data', (chunk) => {
        req.rawBody += chunk;
    });
    next();
});



app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/api', indexRouter);
app.use('/api/user', userRouter);

app.use(express.static(path.join(__dirname, '../../build')));

app.get("*", (req, res) => {
    res.sendFile(
        path.join(__dirname, "../../build/index.html")
    );
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
    // render the error page
    console.log(err.message);
    res.status(err.status || 500);
    res.json({error: err.message});

});

module.exports = app;
