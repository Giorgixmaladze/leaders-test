import { useState } from "react"
import { useForm } from "../hooks/useForm"

const Signup = () =>{
    const [info,handleSubmit] = useForm()

    return(

        <>
            <h1>Registration Page</h1>
            <form onSubmit={handleSubmit}>
                <input type="email" name="email" placeholder="Enter your email" required/>
                <input type="password" name="password" placeholder="Create a new password"/>
                <button>Sign Up</button>
            </form>
        </>
    )
}

export default Signup