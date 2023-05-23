const mongoose = require('mongoose');

const { Schema } = mongoose;

const menuSchema = new Schema(
  {
    // date는 unique, 필수
    date: {
      type: String,
      maxlength: 8,
      unique: true,
      require: true,
    },
    korean_food_corner: {
      type: [String],
      maxlength: 8,
    },
    hot_corner: {
      type: [String],
      maxlength: 4,
    },
    salad_corner: {
      type: [String],
      maxlength: 4,
    },
  },
  { collection: 'ogonmeh-menu' }
);

const Menu = mongoose.model('Menu', menuSchema);

module.exports = Menu;
