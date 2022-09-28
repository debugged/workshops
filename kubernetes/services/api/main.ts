import express from 'express';
import cors from 'cors';

const app = express()
const port = 3000

app.use(cors())

app.get('/', (req, res) => {
  res.send({title: "Kubernetes workshop from API", time: new Date().toISOString()})
})

const server = app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})

process.on('SIGTERM', () => {
  console.log('SIGTERM signal received: closing HTTP server')
  server.close(() => {
    console.log('HTTP server closed');
  })
})