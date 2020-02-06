const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const http = require('http');

const port = process.env.PORT || 3000;
const dirProject = '/dist/smetaproject';
const app = express();

app.use(express.static(__dirname + dirProject));
app.use(bodyParser.json());
app.use(cors());

app.get('/*', (req, res) => res.sendFile(path.join(__dirname)));

app.post('/btn-state', (req, res) => {
  console.log(JSON.stringify(req.body));
});

const server = http.createServer(app);

server.listen(port, () => {
  console.log(`Server is running http://localhost:${port}`)
});
