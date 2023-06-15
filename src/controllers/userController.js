require('../db/connect');
const Visitor = require('../models/Visitor');

const getCount = async (req, res) => {
  try {
    const data = await Visitor.findOne();
    res.send(data);
  } catch (err) {
    console.log(err);
  }
};

const updateCount = async (req, res) => {
  try {
    const visitor = await Visitor.findOne();
    const filter = {};
    const update = {
      $set: {
        count: visitor.count + 1,
      },
    };
    await Visitor.updateOne(filter, update);
    const data = await Visitor.findOne();
    res.send(data);
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  getCount,
  updateCount,
};
