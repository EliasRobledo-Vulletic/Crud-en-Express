const  mongoose = require("mongoose");



const userSchema = new mongoose.Schema({
    _id: String,
    name: String,
    email: String,
    dni: String
},
{versionKey: false});
module.exports = mongoose.model('users',userSchema);
//const User = mongoose.model('Users',userSchema);

