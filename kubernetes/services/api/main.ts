import express from 'express';

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send({title: "Kubernetes workshop from API", time: new Date().toISOString()})
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})