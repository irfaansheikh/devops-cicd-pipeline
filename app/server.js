const express = require('express');
const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
  res.send("CI/CD Pipeline is working 🚀 V2");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});