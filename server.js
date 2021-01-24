const assert = require('assert');
const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT;
assert(port, 'missing PORT');

app.use(express.static('./dist'));

app.use(function (req, res) {
  res.sendFile(path.resolve(__dirname, 'dist/index.html'));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
