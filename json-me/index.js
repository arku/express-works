const express = require('express'),
      app = express(),
      fs = require('fs'),
      port = Number(process.argv[2]),
      filename = process.argv[3];

app.get('/books', (req, res) => {
  fs.readFile(filename, (err, data) => {
    if (err) res.status(404).send('Sorry, we couldn\'t find what you were looking for');

    let jsonObj;
    try {
      jsonObj = JSON.parse(data);
      res.send(jsonObj);
    } catch(err) {
      res.status(500).end();
    }
  });
});

try {
  app.listen(port);
} catch(err) {
  console.log(err.message);
}