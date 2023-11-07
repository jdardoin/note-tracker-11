const express = require('express');
const path = require('path');


const apiroute = require('./routes/index.js');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/api', apiroute)

//app.get('/api/notes', (req, res) => ('/public/js/notes.html'));
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);

app.listen(PORT, () => {
  console.log('app listen on port 3001')
});