import { useEffect, useState } from "react"
import { getLocal, setLocal } from "../utils/localstorage"

const useForm = (navigate) => {
    const [users, setUsers] = useState(getLocal("users") || [])
    const [currUser, setCurrUser] = useState(getLocal("currUser") || {})
    const [signed,setSigned] = useState(false)
    

    useEffect(() =>{
        signed && navigate('/login')
    },[signed])
   

    const handleSubmit = (e) => {
        e.preventDefault()
        let info = {}

        const form = new FormData(e.target)

        for (let [key, value] of form.entries()) {
            info[key] = value
        }

        if(info.passkey !== "1234" || info.passkey === ""){
            info["role"] = "viewer"
            alert("Admin passkey is incorrect, user is registered as viewer role")
        }else{
            info["role"] = "admin"
        }



        if (users.some(user => user.email === info.email)) {
            alert("User with this email is already exists")
        } else {
            setUsers(prev => [...prev, info])
            setCurrUser(info)
            setSigned(true)
        }

    }

    setLocal("users", users)
    setLocal("currUser", currUser)
    return [users, handleSubmit]

}

export default useForm