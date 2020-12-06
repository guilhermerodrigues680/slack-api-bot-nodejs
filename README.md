# Repl.it

Configuring the run button

https://docs.repl.it/repls/dot-replit

.replit
```toml
language = "nodejs"
run = "npm start"
```

POST /slack/action-endpoint ->
```json
{
  "token": "emIm7OmIcKtTHvrlbakEVIP3",
  "challenge": "cSVmPUlz7FjoqpyIcyWRLbd2vyVtnJsoHCEPjQOopS2k2Ei5Ala2",
  "type": "url_verification"
}
```

```json
{
  "token": "emIm7OmIcKtTHvrlbakEVIP3",
  "team_id": "T01CY1MQUTF",
  "api_app_id": "A01GF832LQ4",
  "event": {
    "client_msg_id": "a2abcd14-4c58-4bb2-83e9-01cad2742c04",
    "type": "app_mention",
    "text": "<@U01G9DY3ZDY> a",
    "user": "U01D148CESW",
    "ts": "1607289970.001100",
    "team": "T01CY1MQUTF",
    "blocks": [[ Object ]],
    "channel": "C01D148CX8S",
    "event_ts": "1607289970.001100"
  },
  "type": "event_callback",
  "event_id": "Ev01GN40EQNM",
  "event_time": 1607289970,
  "authorizations": [
    {
      "enterprise_id": null,
      "team_id": "T01CY1MQUTF",
      "user_id": "U01G9DY3ZDY",
      "is_bot": true,
      "is_enterprise_install": false
    }
  ],
  "is_ext_shared_channel": false,
  "event_context": "1-app_mention-T01CY1MQUTF-C01D148CX8S"
}
```