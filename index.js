const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.get('/*', (req, res) => res.send('hello world'));

app.listen(3000, () => console.log('app no listening on localhost:3000'));
