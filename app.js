const express = require('express');
const characters = require('./src/api/characters.js')
const app = express ();
const port = 3000;  

app.use('/', characters);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

module.exports = {app};