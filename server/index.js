const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const fileupload = require("express-fileupload");
const router = require('./router');
require('dotenv').config();
const PORT = process.env.PORT || 3000;
const MONGOOSE_URI = process.env.MONGOOSE_URI || 'mongodb://127.0.0.1:27017/basic-file-server';

const app = express();

app.use(cors());
app.use(fileupload());
app.use(express.json());
app.use(router);

(async function bootstrap () {
  try {
    await mongoose.connect(MONGOOSE_URI);
    console.log('Connected to DB');
    app.listen(PORT, () => console.log(`Server is listening on port ${PORT}.`))
  } catch (error) {
    console.log(error);
  }
})();