import mongoose from 'mongoose';

const connectDB = handler => async (req, res) => {
    // let cachedClient = null;
    if (mongoose.connections.readyState) {
        // Use current db connecti
        return handler(req, res);
    }

try {

    console.log(process.env.mongodburl)
    await mongoose.connect(process.env.mongodburl,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
    );
    return handler(req, res);

}
catch (e) {
    return"error occure " + e
}
  
};

export default connectDB;