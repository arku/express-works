const express = require('express'),
      app = express(),
      crypto =  require('crypto'),
      port = Number(process.argv[2]);


function computeSHA(id) {
  return crypto
    .createHash('sha1')
    .update(new Date().toDateString() + id)
    .digest('hex');
}

app.put('/message/:id', (req, res) => {
  let sha = computeSHA(req.params.id);
  res.send(sha);
});

try {
  app.listen(port);
} catch(err) {
  console.log(err.message);
}
