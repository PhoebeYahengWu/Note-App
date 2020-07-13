const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const noteSchema = new Schema({
    id: {
        type: String
    },
    title: {
        type: String,
        required: "Enter title for Note"
    },
    text: {
        type: String
    }
})

const Note = mongoose.model("Note", noteSchema) 

module.exports = Note;