const express = require('express'),
      path = require('path'),
      app = express(),
      port = Number(process.argv[2]);

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.get('/home', (req, res) => {
  let dateString = new Date().toDateString();
  res.render('home', { date: dateString });
});

try {
  app.listen(port);
} catch(err) {
  console.log(err);
}