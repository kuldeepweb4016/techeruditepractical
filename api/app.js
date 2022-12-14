const express = require("express");
const app = express();
app.use(express.json());
const dotenv = require('dotenv');
const connectDB = require('./server/connection');
const routes = require('./routes/routes');

dotenv.config({ path: "config.env" });

connectDB();




app.use('/api',routes)
app.listen(5000, () => {
    console.log(`Listening to port on 5000`);
})