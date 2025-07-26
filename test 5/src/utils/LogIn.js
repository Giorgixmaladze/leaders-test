import { useState } from "react"
import { getLocal, setLocal } from "./localstorage"

const LoginForm = (e,navigate) =>{
    e.preventDefault()
    const users = getLocal("users") 
    let logged = false

    let info = {}

    const form = new FormData(e.target)

    for(let[key,value] of form.entries()){
        info[key] = value
    }

    if(users.some(user => (user.email === info.email) && (user.password === info.password) )){
        logged = true
    }
    
    if(logged){
        navigate("/")
    }

    setLocal("logged",logged)


}


export {LoginForm}