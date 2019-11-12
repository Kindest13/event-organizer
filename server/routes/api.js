const events = require('../controllers/events');

module.exports = (app) => {
  app.get('/', () => console.log("get /"));
  app.post('/addEvent', () => console.log("post /addEvent"));
  app.get('/medic', () => console.log("get /medic service"));
  app.get('/security', () => console.log("get /security service"));
  app.get('/approval', () => console.log("get gov /approve service"));
};