const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/api');
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/api/greeting', (req, res) => {
});

routes(app);

app.listen(8080, () => console.log('Express server is running on localhost:8080'));
