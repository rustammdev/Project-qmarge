import mongoose from 'mongoose';
// import express from 'express';

// const app = express();

const connectDb = async () => {
  try {
    const connect = await mongoose.connect(
      'mongodb+srv://rustammnuriddinov:admin@qmarge-backedn.mqv3he9.mongodb.net/test?retryWrites=true&w=majority&appName=qmarge-backedn'
    );
    console.log('Database is connected!');    
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

export default connectDb;
