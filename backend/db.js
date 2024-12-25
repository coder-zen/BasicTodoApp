//This is for the mongodb Database;
const mongoose = require('mongoose')
// const { string, boolean } = require('zod')
mongoose.connect("mongodb+srv://mzendeep:krbh%402003@mande21.u65g4iz.mongodb.net/")

    const todoSchema = mongoose.Schema([{
        title: String,
        description: String,
        completed: Boolean
    }])

const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo//Which is used for parsing the toDo
}


