const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const port = 3000;

const register = require('./controllers/register-controller');
const auth = require('./controllers/auth-controller');

app.post('/register', register);
app.get('/consultar', auth);


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

//module.exports = router;