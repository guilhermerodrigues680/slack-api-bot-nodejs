const express = require('express');
const bodyParser = require('body-parser');

const slackAction = require('./slack-action');
const log = require('./logger').logger;

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/health', (req, res) => {
  res.send({ message: "Serviço em execução!" });
});

app.post('/slack/action-endpoint', (req, res) => {
  log.child({ reqBody: req.body }).debug('POST /slack/action-endpoint');
  res.send(slackAction.handleAction(req.body));
});

app.listen(port, () => {
  log.info(`App listening at http://localhost:${port}`);
});