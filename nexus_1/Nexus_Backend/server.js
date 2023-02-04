require('dotenv').config()
const express = require('express');
const cors = require('cors');
const mongoose=require('mongoose');

const app = express();
app.use(cors());
app.use(express.json());

const controller = require("./controller.js")

app.post('/',controller.AddBorrower)

const SERVER_DB_URI=process.env.DB_URI;
const PORT = 3000;
const bootstrap = async () => {
  try {
    await mongoose.connect(SERVER_DB_URI);
    app.listen(PORT, async () => {
      console.log("Listening at ",PORT);
    });
  } catch (error) {
    console.log(error);
  }
};

bootstrap();