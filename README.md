# ExpressWorks

This repository hosts my solutions for the [NodeSchool](https://nodeschool.io)'s workshop [ExpressWorks](https://github.com/azat-co/expressworks)

## Solutions

1. ### Hello World

  Create an Express.js app that outputs "Hello World!" when somebody goes to `/home`.

  The port number will be provided to you by expressworks as the first argument of
  the application, i.e., `process.argv[2]`.

  [Solution](hello-world/)
  
2. Static

  This exercise is about serving static assets like HTML files.
  There are many ways to do it, but we want you to apply static middleware to serve the file index.html.

  Please don't use ANY routes like app.get. ONLY static.

  Your solution must listen on the port number supplied by process.argv[2].

  The index.html file is provided and usable via the path supplied by
  process.argv[3]. However, you can use your own file with this content (beware of whitespace):
  ```
  <html>
    <head>
      <title>expressworks</title>
      <link rel="stylesheet" type="text/css" href="/main.css"/>
    </head>
    <body>
      <p>I am red!</p>
    </body>
  </html>
  ```

  [Solution](static/)
