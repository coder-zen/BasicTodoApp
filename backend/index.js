const { createTodo, updateTodo } = require("./schema")
const { Todos } = require("./db");
const zod = require('zod')
const express = require('express');

const app = express();//Intitilize the express in the App
app.use(express.json())//This the Global midlleWare to pass the data foemat into the express.json!!
const cors = require('cors');
app.use(cors());
//Here Writing the Routes For the Crating the Todos and getting the Todos and Updating the Todos!!


app.post("/todos", async function (req, res) {
    const createPayLoad = req.body
    const parsedPayLoad = createTodo.safeParse(createPayLoad);// Sahio hein mandeep
    if (!parsedPayLoad.success) {
        return res.status(400).json({
            msg: "Invalid Todo format/try again.."
        })
    }

    await Todos.create(createPayLoad);

    res.json({
        msg: "Todo is created Rockstar"
    })
})
//The Above Rote is for the Post the Data on the MongoDb

//Now writting the Get REQUEST to get the Todos on the screen!!

app.get("/getTodos", async function (req, res) {
    const getTodos = await Todos.find(); // this is the syntax for getting all the Todos!!
    res.json({
        getTodos,
    })
})

//Get route is also working mandeep 

//Now writting the put Routw for

app.put("/updateTodos", async (req, res) => {
    const updatePayload = req.body;
    const parseUpdatePayload = updateTodo.safeParse(updatePayload);
    if (!parseUpdatePayload.success) {
        return res.status(400).json({ msg: "invalid inputs" });
    }

    const existingTodos = Todos.findById(req.body._id);
    if (!existingTodos) {
        return res.json({
            msg: "Todos not found in the DataBases!!"
        })
    }


    await Todos.updateOne({
        _id: req.body._id,
        title: req.body.title,
        discription: req.body.discription
    })

    res.json({
        msg: "Todos is updated!!"
    })
})

app.listen(4000);

//Here backend is Complete Mandee[!! Hip Hip horrey But i have to  learn the React You know nA from mY self only]