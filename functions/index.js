const functions = require("firebase-functions");
const express = require('express');
const bodyParser = require('body-parser');
const { userRouter } = require('./users.js');
const cors = require('cors')

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.get('/', (_req, res) => {
    res.send('Task');
})

userRouter(app);

exports.app = functions.https.onRequest(app);