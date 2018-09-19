const express = require('express');

const app = express();
const port = 3011;

app.use(express.static(__dirname + '/build') );

app.listen(port, () => console.log(`listening on port ${port}!`));