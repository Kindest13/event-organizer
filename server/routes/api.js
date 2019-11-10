const events = require('../controllers');

export default (app) => {
  app.get('/', events.getEvents);
  app.post('/addEvent', effects.putEvent);
};