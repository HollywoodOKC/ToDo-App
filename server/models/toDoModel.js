const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const toDoSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    complete: {
        type: Boolean,
        default: false,
    }
})

const toDo = mongoose.model("toDo", toDoSchema);

module.exports = toDo;