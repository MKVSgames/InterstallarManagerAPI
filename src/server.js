const express = require('express');
const app = express();
const wordsRoute = require('./routes/game/words/words-route');

wordsRoute(app);

const port = process.env.PORT || 5000;
app.listen(port);