import mongoose from 'mongoose';
import 'dotenv/config';

// import express from 'express';

// const app = express();

const connectDb = async () => {
  try {
    const connect = await mongoose.connect(process.env.CONNECT_STRING);
    console.log('Database is connected!');
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

export default connectDb;
