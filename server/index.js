const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const PORT = process.env.PORT || 3033;
const route = require("./routes/router");
const app = express();
const connectDB = require('./config/db');
require('dotenv').config();



connectDB()
app.use(express.json());
app.use(express.urlencoded());
app.use(route);
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
