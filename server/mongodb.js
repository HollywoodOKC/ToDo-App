const mongoose = require("mongoose");

const connectdb = () => {
    mongoose.connect("")
    .then(() => {console.log(`Database Connected, Receiving Data`)})
    .catch(console.error);
}
module.exports = connectdb;