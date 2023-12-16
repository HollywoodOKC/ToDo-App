const mongoose = require("mongoose");

const connectdb = () => {
    mongoose.connect("mongodb+srv://tlane11:Oklahoma198621@todolist0.npxwfph.mongodb.net/?retryWrites=true&w=majority")
    .then(() => {console.log(`Database Connected, Receiving Data`)})
    .catch(console.error);
}
module.exports = connectdb;