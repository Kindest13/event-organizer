const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const routes = require('./routes/api');
const app = express();
const events = require('./controllers/events');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.get('/', events.getEvents);
// routes(app);

app.listen(8080, () => {
  console.log('server is running on 8080');
});
