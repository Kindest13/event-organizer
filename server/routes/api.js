const events = require('../controllers/events');

module.exports = (app) => {
  app.get('/', () => console.log("get /"));
  app.post('/addEvent', () => console.log("post /addEvent"));
};