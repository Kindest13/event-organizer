const events = require('../controllers/events');

module.exports = (app) => {
  app.get('/', (req, res) => res.send('hello'));
  app.post('/addEvent', () => console.log("get /addEvent"));
};