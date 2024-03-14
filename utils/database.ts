import mongoose from 'mongoose';

let isConnected = false;

// handle connection ti the db using mongoose an MongoDB URI
export const connectToDB = async () => {
    mongoose.set('strictQuery', true);
    if (isConnected) {
        console.log("mongodb is already connected");
        return
    }
    try {
        await mongoose.connect(process.env.MONGODB_URI || '', {
            dbName: "my_excuses",
        })
        isConnected = true;
    } catch (error) {
        console.log(error);

    }
}