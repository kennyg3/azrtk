const port = process.env.PORT || 3000;
const express = require('express');
const app = express();
const path = require('path');
const indexRouter = require('../routes/index');

app.set('view engine', 'pug');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', indexRouter);

app.listen(port, () => console.log(`Listening on port ${port}...`));
