const express = require('express');

const PORT = 4000;

const app = express();
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(PORT, () => {
  console.log(`The server is listening at ${PORT}`);
});
