const express = require('express');
const fs = require('fs');
const app = express();

const products = ['苹果'];
app.use(express.json());

const buildFilePath = path => `${__dirname}${path}`;

app.get('/js', (_, res) => res.sendFile(buildFilePath('/main.js')));

app.get('/', (_, res) => {
  const data = fs.readFileSync(buildFilePath('/index.html'));
  let dataString = data.toString();

  const s = products.map(item => `<li>${item}</li>`).join('');
  dataString = dataString.replace('<!-- LIST -->', s);
  res.send(dataString);
});

app.get('/products', (_, res) => res.send(products));

app.post('/products', (req, res) => {
  products.push(req.body.name);
  res.send({ success: true });
});

app.listen(3333);

console.log('Listen to 3333');
