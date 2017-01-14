const express = require('express'),
      app = express(),
      port = Number(process.argv[2]);

app.get('/home', (req, res) => res.send('Hello World!'));

try {
  app.listen(port);
} catch(err) {
  console.log(err.message);
}