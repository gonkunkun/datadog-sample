const { createLogger, format, transports } = require("winston")

const httpTransportOptions = {
  host: "http-intake.logs.datadoghq.com",
  path: "/api/v2/logs?dd-api-key="+process.env.DD_API_KEY+"&ddsource=nodejs&service=api",
  ssl: true,
}


const logger = createLogger({
  level: "info",
  exitOnError: false,
  format: format.json(),
  transports: [
    new transports.Http(httpTransportOptions),
  ],
})

exports.logger = logger