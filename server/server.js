const express = require('express');
const app = express();
const path = require('path');

const counterController = require('./controllers/counterController.js');

const PORT = 3000;

app.use(express.static(path.join(__dirname, '..', 'build')));

app.get('/', (req, res) => res.sendFile(path.join(__dirname, '..', 'build/index.html')));

app.get('/counter', counterController.read);
app.put('/counter', counterController.update);
app.post('/counter', counterController.create);
app.delete('/counter', counterController.delete);

app.listen(PORT, console.log('listening on...', PORT));
