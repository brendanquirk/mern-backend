const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

//Middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);

app.use(bodyParser.json());

//Database Config
const db = require('./config/keys').mongoURI;

//Connect to mongodb
mongoose.connect(
  db,
  { useNewUrlParser: true }
)
.then(() => {
  console.log("mongodb connected");
})
.catch(err => console.log(err));

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log('server running on port', port);
})
