const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        mongoose.set("strictQuery", false);
        const con = mongoose.connect(process.env.MONGO_DB_URL, {
            // useNewUrlParser: true,
            // useUnifiedTopology: true
        })
        console.log(`MongoDb successfully connected to: ${process.env.MONGO_DB_URL}`);
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
}

module.exports = connectDB