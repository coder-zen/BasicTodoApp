//Here Writting the scemas For my Project kto connect with MongoDb

const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://mzendeep:krbh%402003@mande21.u65g4iz.mongodb.net/");

const TodoSchema = new mongoose.Schema({
    title: "string",
    discription: "string",
    commpleted: "boolean"
})

const Todos = mongoose.model("todos",TodoSchema);
//Pass the todos With the TodoSchem and store in the Name Beyond the Todo!!

module.exports = {
     Todos
}

/*What Happens:

A new Mongoose model called Todos is created.
This model represents the "todos" collection in MongoDB.
The schema TodoSchema is applied to ensure documents in the "todos" collection follow the defined structure (e.g., specific fields, types, validation rules).
How It's Used:

You can now use the Todos model to interact with the "todos" collection, such as performing CRUD operations:
javascript
Copy
Edit
// Creating a new document
const newTodo = new Todos({ title: "Learn Mongoose", completed: false });
await newTodo.save();

// Reading documents
const todosList = await Todos.find();*/