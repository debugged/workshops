import express from 'express';

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

const server = app.listen(port, () => {
  console.log(`App listening on port ${port}`)
});

const shutdown = () => {
  console.info('SIGTERM signal received.');
  console.log('Closing http server.');
  server.close(() => {
    console.log('Http server closed.');
    process.exit(0);
  });
}

// Gracefully shut down http server
process.on('SIGTERM', () => {
  shutdown();
});
// Shutdown on ctrl+c
process.on('SIGINT', () => {
  shutdown();
});