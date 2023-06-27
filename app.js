const express = require('express');
const tasks = require('./src/api/tasks.js')
const app = express ();
const port = 3001;  
const cors = require('cors');
const bodyParser = require('body-parser');

const corsOpts = {
  origin: 'http://localhost:3000',
  methods: [
    'GET',
    'POST',
    'PUT',
    'PATCH',
    'DELETE'
  ],

  allowedHeaders: [
    'Content-Type',
  ],

};
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
app.use(cors(corsOpts));
app.use('/', tasks);



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

module.exports = {app};