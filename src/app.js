const express = require('express');
const { calculateSum, isEven } = require('./utils');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'Hello, CI/CD World!' });
});

app.post('/calculate', (req, res) => {
  const { numbers } = req.body;

  if (!Array.isArray(numbers)) {
    return res.status(400).json({ error: 'Numbers must be an array' });
  }

  const sum = calculateSum(numbers);
  const sumIsEven = isEven(sum);

  res.json({
    numbers,
    sum,
    isEven: sumIsEven
  });
});

app.get('/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

module.exports = app;
