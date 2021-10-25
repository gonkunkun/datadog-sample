'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// APM Settings
const tracer = require("dd-trace").init({})

const app = express();
app.get("/", (req, res) => {
  res.send("Datadog APM Test")
})

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
