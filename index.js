const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World');
});

const server = app.listen(3000, () => {
  console.log('Webserver started on port 3000');
});

const signals = {
  SIGHUP: 1,
  SIGINT: 2,
  SIGTERM: 15,
};

Object.keys(signals).forEach((signal) => {
  process.on(signal, () => {
    console.info(`${signal} signal received.`);
    console.log('Closing http server.');
    server.close(() => {
      console.log('Http server closed.');
      process.exit();
    });
  });
});
