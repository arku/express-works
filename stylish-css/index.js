const express = require('express'),
      app = express(),
      path = require('path'),
      stylus = require('stylus'),
      port = Number(process.argv[2]);

let publicPath = path.join(__dirname, 'public');

app.use(stylus.middleware(publicPath));
app.use(express.static(publicPath));

try {
  app.listen(port);
} catch(err) {
  console.log(err.message);
}