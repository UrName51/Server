
const express = require('express');
const next = require('next');
const path = require('path');

const dev = process.env.NODE_ENV !== 'production';
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();

nextApp.prepare().then(() => {
  const app = express();

  app.use(express.static(path.join(__dirname, 'public')));

  app.get('*', (req, res) => {
    return handle(req, res);
  });

  app.listen(3000, () => {
    console.log('App is running on port 3000');
  });
}).catch(err => console.log(err));