import mongoose from 'mongoose';

const connectDB = handler => async (req, res) => {
    // let cachedClient = null;
    if (mongoose.connections.readyState) {
        // Use current db connecti
        return handler(req, res);
    }

try {

    await mongoose.connect('mongodb+srv://Laxman:123@cluster0.6m5dz.mongodb.net/BLOG?retryWrites=true&w=majority',
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