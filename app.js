if (process.env.NODE_ENV !== "production") {
  require('dotenv').config();
}
const express = require("express");

require('./src/config/database')
const myRoutes = require('./src/routes')
const port = process.env.PORT || 3000;
const bodyParser = require("body-parser");

const ChannelModel = require('./src/models/channel');






var path = require('path');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));




app.use('/', myRoutes);











app.listen(port, () => {
  console.log(`server listening at ${port}`);
});