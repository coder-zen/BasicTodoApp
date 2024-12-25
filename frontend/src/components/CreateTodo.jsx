import { useState } from "react"

export function CreateTodo() {
    const [todos, setTodos] = useState([]);
    const [title, setTitle] = useState("")//Intially the title is empty
    const [description, setDescription] = useState("")
    return <div>
        <input style={{
            padding: 10,
            margin: 10,
            width: 350
        }} type="text" placeholder="title" onChange={function (element) {
            const value = element.target.value;
            setTitle(element.target.value)
        }} /><br />


        <input style={{
            padding: 10,
            margin: 10,
            width: 350
        }} type="text" placeholder="description" onChange={function (e) {
            const value = e.target.value;
            setDescription(e.target.value)
        }} /><br />


        <button style={{
            padding: 10,
            margin: 10,
            width: 350
        }} onClick={() => {

            fetch("http://localhost:5000/todos", {
                method: "POST",
                body: JSON.stringify({
                    title: title,
                    description: description
                }),
                headers: {
                    "content-Type": "application/json"
                }
            }).then(
                async function (res) {
                    const json = await res.json();
                    setTodos(json.todos)
                }
            )

        }}>Add a ToDo</button>
    </div>
}/*Yes, the createTodo function is syntactically correct. However, as mentioned earlier, for custom components in React, the component name should start with a capital letter by convention. So, you should rename the function to CreateTodo. Here's the corrected code:*/