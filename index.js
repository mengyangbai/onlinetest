var express = require('express')
var consign = require('consign')

const PORT = 3000;
const app = express();


consign()
    .include("libs/config.js")
    .then("db.js")
    .then("libs/middlewares.js")
    .then("routes")
    .then("libs/boot.js")
    .into(app);