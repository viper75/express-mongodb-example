const express = require("express");
const mongoose = require("mongoose");
const PostController = require('./routes/PostController');
require('dotenv/config');

const app = express();

const PORT = process.env.PORT || 3000;

mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Connected to mongodb!");
  }
);

//Initializing express default BodyParser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Set the controller for /posts
app.use('/posts', PostController);

app.listen(PORT);
