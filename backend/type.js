const express = require('express')
const zod = require('zod')


const createTodo = zod.object({
    title: zod.string(),
    description: zod.string()
})

const updateTodo = zod.object({
    id: zod.string(),
})

module.exports = {
    createTodo : createTodo,
    updateTodo : updateTodo
}
// In summary, this code exports two functions (createTodo and updateTodo) so they can be used in other parts of the project. 