import {useEffect, useState} from "react"
import { getLocal, setLocal } from "../utils/localstorage"
import { useNavigate } from "react-router-dom"

const useForm = () =>{
    const navigate = useNavigate()
    const [info,setInfo] = useState(getLocal("users") || [])
    const [curUser,setCurUser] = useState(getLocal("curUser") || [])
    const [signed,setSigned] = useState(getLocal("signed") || [])
    useEffect(() =>{
        setLocal("users",info)
        setLocal("curUser",curUser)
    },[info,curUser])
    useEffect(() =>{
        setLocal("signed",signed)
    },[signed])
    const handleSubmit = (e) =>{
        e.preventDefault()
        const data = new FormData(e.target)
        let infoObj = {}
        for(let [key,value] of data.entries()){
            infoObj[key] = value
        }
        e.target.reset()

        if(info.some(user => user.email === infoObj.email)){
            alert("Account with this email exists")
        }else{
            setInfo(prev => [...prev,infoObj])
            setCurUser([infoObj])
            setSigned(true)
            navigate("/login")
        }
    }

    return [info,handleSubmit]
}

export {useForm}