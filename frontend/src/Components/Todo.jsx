

export function DisplayTodos({ todos }) {
    return <div>
        {todos.map((todo => {
            return <div>
                <h1>{todo.title}</h1>
                <h2>{todo.discription}</h2>
                <h3>{todo.completed == true ? "completed" : "marsAsDone!!"}</h3>
            </div>
        }))}
    </div>
}