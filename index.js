const express = require('express');

const app = express();

const logger = require('morgan');

const bodyParser = require('body-parser');

const indexRouter = require('./routes/index');

const apiRouter = require('./routes/api');

const path = require('path');

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, authorization');
  next();
});

app.use((err, req, res, next) => {
  if (err.stack) console.error(err.stack);

  return res.status(500).send('Internal error');
  next();
});

app.use(logger('dev'));

app.use(bodyParser.json());

app.use(
  bodyParser.urlencoded({
    extended: false,
  }),
);

app.use(express.static(path.join(__dirname, './public')));

app.use('/api', apiRouter);

app.listen(3000, () => console.log('app listening on port 3000!'));
