const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.json({ message: 'Hello from Demo App', status: 'running' });
});

app.get('/health', (req, res) => {
  res.json({ healthy: true, uptime: process.uptime() });
});

app.use((req, res) => {
  res.status(404).json({ error: 'Not found' });
});

module.exports = app;
