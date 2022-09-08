const mongoose = require('mongoose')

const connectToDatabase = async () =>{
  await mongoose.connect(`mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.gbmtnno.mongodb.net/blogWebsite`,
    (error)=>{
      if(error){
        return console.log('error to connect to MongoDB: ', error);
      } else {
        return console.log('Connected Successfully!');
      }
  })
}
module.exports = connectToDatabase;
