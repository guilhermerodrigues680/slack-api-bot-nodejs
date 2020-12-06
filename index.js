const express = require('express');
const bodyParser = require('body-parser');

const app = express()
const port = 3000

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/health', (req, res) => {
  res.send({ message: "Serviço em execução!" })
});

app.post('/slack/action-endpoint', (req, res) => {
  console.log('POST /slack/action-endpoint -> ', req.body)
  res.send(req.body['challenge'])
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

console.log(); // repl.it