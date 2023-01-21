require('dotenv').config();
const express = require('express');
const routes = require('./routes');
const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

sequelize.sync().then(() =>
{
  console.log('connected to db');
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
  }); 
});