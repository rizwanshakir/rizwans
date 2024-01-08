import mongoose from 'mongoose';

const connectDataBase = async () => {
  try {
    // MongoDB connection string from environment variable
    const mongoUrl = process.env.MONGO_URL || 'mongodb://127.0.0.1:27017/CollegeMIS';

    // Connect to MongoDB
    const con = await mongoose.connect(mongoUrl, {
   
    });

    console.log(`MongoDB Database connected. Host: ${con.connection.host}`);
  } catch (err) {
    console.error('Error connecting to MongoDB:', err.message);
    process.exit(1);
  }
};

export default connectDataBase;
