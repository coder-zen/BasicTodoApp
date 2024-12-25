import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import { CreateTodo } from './components/CreateTodo' // Ensure correct import
import { Todos } from './components/Todo'

//Now initialzzing the State variable:
function App() {

  const [todos, setTodos] = useState([]);//Inital state is empty
  const addTodo = (newTodo) => {
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };
  // Now conneting the frontend with the backend 

  fetch("http://localhost:5000/todos")
    .then(
      async function (res) {
        const json = await res.json();
        setTodos(json.todos)

      }
    )

  return (
    <div>
      <CreateTodo />
      <Todos todos={todos} />
    </div>
  )
}

export default App
// npm run 
// The issue in your code is that you are using a custom React component (createTodo) in a way that is syntactically incorrect. In JSX, custom components should be capitalized, as React treats lowercase tag names like HTML elements (e.g., div, span). Since createTodo is a custom component, it should be renamed to CreateTodo.