const express = require('express');
const app = express();
const cors = require('cors')
const { createTodo, updateTodo } = require("./type")//Here create todo and update todo is exported from the types.js file which is used for the input validation:)
const { todo } = require("./db")




app.use(express.json())//parsing the json body request into the machine level language:)
app.use(cors())


app.post("/todos", async function (req, res) {
    const createPayload = req.body
    const parsedPayLoad = createTodo.safeParse(createPayload)
    if (!parsedPayLoad.success) {
        return res.status(411).json({
            msg: "you send the wrongInput"
        })
    }
    //put into the mongODB
    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    })

    res.json({
        msg: "todo is creaated"
    })


})

app.get("/todos", async (req, res) => {
    const todos = await todo.find({});//this returns the promise and find({})function returns the all the todo

    res.json({
        todos
    })

})

app.put("/completed", async (req, res) => {//it us used for update the data 
    const updatePayLoad = req.body
    const parsedUpdatePayLoad = updateTodo.safeParse(updatePayLoad)
    if (!parsedUpdatePayLoad.success) {
        return res.status(411).json({
            msg: "invalid input"
        })
    }

    await todo.update({
        _id: req.body.id
    }, {
        completed: true //first it is false after the update it become true
    })//Done mein samgh gaya mandeep:)


    return res.json({
        msg: "Todo ~marked as the completed"
    })



})
const port = 5000;
app.listen(port, () => {
    console.log(`server is listning on the port number${port}`)
})
//Here Backend is the mostly Done  Here:)
