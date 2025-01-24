import { useState } from "react";
import { axios } from "axios"


export function CreateTodo() {
    const [title, setTitle] = useState("")
    const [discription, setDiscription] = useState("")

    async function handleSubmit() {
        e.preventDefault(); // Stops navigation 
        if (!title || !discription) {
            alert("Plese fill the Title and discription");
            return;
        }

        try {

            const response = await axios.posr("http://localhost:4000/todos", {
                //Here the second argument is  always the request body in the poast request
                title,
                discription,
            }, {
                headers: { "content-type ": "application/json" }
            })

            console.log("Todo is createdSucess fully", response.data);
            alert("Todo is created sucessFully")
        } catch (err) {
            console.log("Error while posting the Todos", err);
            alert("Error Occured");

        }
    }

    return <div>
        <form onSubmit={handleSubmit}>
            <input type="text" name="" id="" placeholder="Enter the title of your Todos plese" onClick={(e) => {
                setTitle(e.target.value);
            }} />

            <br />
            <br />

            <input type="text" name="" id="" placeholder="Enter the Discription" onClick={(e) => {
                setDiscription(e.target.value);
            }} />

        </form>

    </div >
}
