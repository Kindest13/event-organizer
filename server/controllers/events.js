const fs = require('fs');
const path = require('path');

module.exports = {
  getEvents: (req, res) => {
    let events;
    fs.readFile(path.resolve(__dirname, '../events.json'), (err, data) => {
      if (err) throw err;
      events = JSON.parse(data);
      console.log(events);
    });
    return res.status(200).json({
      events
    });
  },

  postEvent: (req, res) => {
    let data = JSON.stringify(req.body.event);

    fs.writeFile(path.resolve(__dirname, '../../events.json'), data, (err) => {
        if (err) throw err;
        console.log('Data written to file');
        return res.status(201).json('Event has been added');
    });
  }
};