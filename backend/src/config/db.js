import mongoose from 'mongoose';
const URI = 'mongodb://127.0.0.1:27017/ContactsRecord';
const ConnectDB = async () => {
    try {
        await mongoose.connect(URI);
        console.log('Connected to MongoDB');
    }
    catch (error) {
        console.log('Error connecting to MongoDB:', error);
    }
};  
export default ConnectDB;