require('../db/connect');
const Menu = require('../models/Menu');

const registerMenu = (req, res) => {
  try {
    // dummy data
    const menu = new Menu({
      date: '20230523',
      korean_food_corner: ['오곡밥', '김치찌개'],
      hot_corner: ['제육볶음', '닭볶음탕', '쭈꾸미볶음'],
      salad_corner: ['시리얼', '바나나 쉐이크'],
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

module.exports = {
  registerMenu,
};
