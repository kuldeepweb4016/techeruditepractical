const mongoose = require('mongoose');


const customerSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    role: String
})


const customerData = mongoose.model("customer", customerSchema);
module.exports = customerData;