const Counter = require("./../models/counterModel.js");

const counterController = {
  // retrieve the counter and send it in the response
  read: (req, res) => {
    console.log('inside read');
    Counter.findOne({ name: 'counto' }, (err, counter) => {
      res.send(counter);
    });
  },

  // increase the counter by 1
  update: (req, res) => {
    console.log('inside update');
    Counter.update({ name: "counto" }, { $inc: { count: 1 } });
  },

  // create a new 'counto' counter
  create: (req, res) => {
    console.log('inside create');
    Counter.create({
      name: "counto",
      count: 0
    });
  },

  // delete all documents from collection
  delete: (req, res) => {
    console.log('inside delete');
    Counter.remove({});
  }
};

module.exports = counterController;
