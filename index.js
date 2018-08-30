const express = require('express');

//setup

const  app = express();
const server = app.listen(3000, function () {
   console.log('Listening...');
});

app.use(express.static('public'));