const mongoose = require("mongoose");
const colors = require("colors");

const connectDB = async () => {

  const URL = `mongodb+srv://shivani080202:shivani080202@cluster0.us0ifvw.mongodb.net/?retryWrites=true&w=majority`;
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(
      `Connected To Mongodb Database ${mongoose.connection.host}`.bgGreen.white
    );
  } catch (error) {
    console.log(`Mognodb Database Error ${error}`.bgRed.white);
  }
};

module.exports = connectDB;