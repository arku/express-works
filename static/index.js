const express = require('express'),
      app = express(),
      path = require('path'),
      port = Number(process.argv[2]); // explicit coercion

let staticPath = process.argv[3] || path.join(__dirname, 'public');
app.use(express.static(staticPath));

try {
  app.listen(port);
} catch(err) {
  console.log(err);
}