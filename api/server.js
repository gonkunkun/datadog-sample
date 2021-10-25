'use strict';

const express = require('express');
const winstonLog = require("./logger.js")

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// APM Settings
const tracer = require("dd-trace").init({
  logInjection: true,
})

// success
const app = express();
app.get("/success", (req, res) => {
  winstonLog.logger.log("info", "/success logger test!")
  res.send("Datadog APM Test Success")
})

// error
app.get("/error", (req, res) => {
  winstonLog.logger.log("error", "/error logger test!")
  res.status(500).send("Datadog APM Test Error")
})

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
