const axios = require('axios');

const log = require('./logger').logger;

const slackApiInstance = axios.create({
  baseURL: 'https://slack.com/api',
  headers: { 'Authorization': 'Bearer xoxb-1440055844933-1553474135474-KIVFB0qL4l629BLWIAW5fcWE' }
});

module.exports.handleAction = (body) => {
  const { type } = body;

  if (type === 'url_verification') {
    const { challenge } = body;
    return challenge;
  }

  slackApiInstance.post('/chat.postMessage', {
    "text": "Hello <@U01D148CESW>! Knock, knock.",
    "channel": "C01D148CX8S"
  })
  .then((res) => log.child({ response: res.data }).debug('OK'))
  .catch((err) => log.child({ error: err }).debug('ERRO'))

  return null;
}