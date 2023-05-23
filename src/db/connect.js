require('dotenv').config();
const mongoose = require('mongoose');

const connect = async () => {
  mongoose
    .connect(process.env.MONGO_DB_URL)
    .then(() => console.log('MongoDB connected'))
    .catch((error) => {
      console.log(error);
    });
};

connect();

module.exports = connect;
