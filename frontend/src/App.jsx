import { useEffect, useState } from 'react'
import axios, { Axios } from 'axios'


import { CreateTodo } from './Components/Components'
import { DisplayTodos } from './Components/Todo'
function App() {
  const [Todos, setTodos] = useState([]); //initial state is an EmpTY Arrey!!

  useEffect(() => {

    try {
      async function fetchedTodos() {
        const response = await axios.get("http://localhost:4000/getTodos")
        setTodos(response.data.getTodos);
      }
    }catch(err){
      console.log("Error!!,Pleses Try again after SomeTimes",err);
      alert("Server Is Not responding!!")
    };
  }, [])// This will Renderd only One Time!!


  return (
    <>
      <CreateTodo />
      <DisplayTodos todos={Todos} />
    </>
  )
}

export default App;


