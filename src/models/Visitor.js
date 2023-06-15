const mongoose = require('mongoose');

const { Schema } = mongoose;

const visitorSchema = new Schema(
  {
    count: {
      type: Number,
      require: true,
    },
  },
  { collection: 'ogonmeh-visitor' }
);

const Visitor = mongoose.model('Visitor', visitorSchema);

module.exports = Visitor;
