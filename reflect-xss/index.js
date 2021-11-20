const express = require('express');
const fs = require('fs');
const app = express();

app.use(express.json());

const buildFilePath = path => `${__dirname}${path}`;

app.get('/search', (req, res) => {
  const q = req.query.q;
  const data = fs.readFileSync(buildFilePath('/index.html'));
  let dataString = data.toString();

  const s = `找不到产品: ${q}`;
  dataString = dataString.replace('<!-- SEARCH -->', s);
  res.send(dataString);
});

app.get('/js', (_, res) => res.sendFile(buildFilePath('/main.js')));

app.get('/xss.js', (_, res) => res.sendFile(buildFilePath('/xss.js')));

app.get('/', (_, res) => {
  const data = fs.readFileSync(buildFilePath('/index.html'));
  const dataString = data.toString();
  res.send(dataString);
});

app.listen(8080);

console.log('Listen to 8080');
