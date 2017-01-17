const express = require('express'),
      app = express(),
      port = Number(process.argv[2]);

app.get('/search', (req, res) => {
  res.send(req.query);
});

try {
  app.listen(port);
} catch(err) {
  console.log(err.message);
}