/* todos = [{   todos is the arry of the object
  title : go to the gym,
  discription : Back + cardio day 
}]*/

export function Todos({ todos }) {//Using object destructuring:
    return <div>
        {todos.map(function (todo) {
            return <div>
                <h1>{todo.title}</h1>
                <h2>{todo.description}</h2>
                <button>{todo.completed == true ? "completed" : "~Mark as done"} </button>
            </div>
        })}
    </div>
}