const cors = require("cors");
const express = require("express");
const expressip = require('express-ip');

const app = express();
app.use(expressip().getIpInfoMiddleware);

app.use(cors({ origin: true }))

app.get("*", (request, response) => {
  const ip = request.ipInfo; 
  return response.send(ip);
})

exports.locate = app
