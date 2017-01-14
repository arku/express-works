const express = require('express'),
      app = express(),
      path = require('path'),
      bodyParser = require('body-parser'),
      port = Number(process.argv[2]);

app.use(bodyParser.urlencoded({ extended: false })); // parse request body
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => res.render('index'));
app.post('/form', (req, res) => {
  res.send(reverse(req.body.str));
});

// The following function will be hoisted
function reverse(string) {
  let reversedString = '';
  for (let index = string.length - 1; index >=0; index--)
    reversedString += string[index];
  return reversedString;
}

try {
  app.listen(port);
} catch(err) {
  console.log(err.message);
}