const mongoose = require('mongoose');

const { Schema } = mongoose;

const menuSchema = new Schema(
  {
    // date는 unique, 필수
    date: {
      type: String,
      maxlength: 6,
      // unique: true,
      require: true,
    },
    koreanFoodCorner: {
      type: [String],
      maxlength: 8,
    },
    hotCorner: {
      type: [String],
      maxlength: 4,
    },
    saladCorner: {
      type: [String],
      maxlength: 4,
    },
  },
  { collection: 'ogonmeh-menu' }
);

const Menu = mongoose.model('Menu', menuSchema);

module.exports = Menu;
