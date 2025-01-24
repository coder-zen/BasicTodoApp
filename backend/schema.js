//Here Wriiting the Schema for the incoming Data for Creating the Todos and updating the Todos !!

const zod = require('zod');

const createTodo = zod.object({
    title: zod.string(),
    discription: zod.string()
})



const updateTodo = zod.object({
    _id: zod.string()
})

module.exports = {
    createTodo,
    updateTodo
}
