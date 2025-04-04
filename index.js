const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello, Node.js with Express!');
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
