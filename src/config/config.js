const mongoose = require('mongoose');
require('dotenv').config();

const MONGODB_URI = process.env.MONGODB_URI;
console.log(MONGODB_URI);

const connectionParams = {
  useNewUrlParser: true,
  useUnifiedTopology: true
};

module.exports.connectDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI, connectionParams);
    console.log('Connected to the database');
  } catch (error) {
    console.error(`Error connecting to the database. \n${error}`);
  }
};
