require('../db/connect');
const Menu = require('../models/Menu');

const postMenu = async (req, res) => {
  try {
    const menu = new Menu({
      date: req.body.date,
      koreanFoodCorner: req.body.koreanFoodCorner,
      hotCorner: req.body.hotCorner,
      saladCorner: req.body.saladCorner,
    });
    const filter = { date: { $eq: req.body.date } };
    const result = await Menu.findOne(filter);
    if (result !== null) {
      await Menu.deleteOne(filter);
    }
    menu
      .save()
      .then(() => {
        res.status(200).json({ success: true });
      })
      .catch((err) => {
        return res.json({ success: false, err });
      });
  } catch (err) {
    console.log(err);
  }
};

const getMenu = async (req, res) => {
  try {
    const reqDate = req.params.date;
    const data = await Menu.findOne({ date: { $eq: reqDate } });
    res.send(data);
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  postMenu,
  getMenu,
};
