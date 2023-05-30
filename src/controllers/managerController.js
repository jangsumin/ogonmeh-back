require('../db/connect');
const Menu = require('../models/Menu');

const registerMenu = (req, res) => {
  try {
    const menu = new Menu({
      date: req.body.date,
      koreanFoodCorner: req.body.koreanFoodCorner,
      hotCorner: req.body.hotCorner,
      saladCorner: req.body.saladCorner,
    });
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
    const data = await Menu.find({ date: { $eq: reqDate } });
    res.send(data);
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  registerMenu,
  getMenu,
};
