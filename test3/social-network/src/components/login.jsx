import { useEffect,useState } from "react"
import { useNavigate } from "react-router-dom"

function Login({curUs,data, condition}){
    const [users,setUsers] = data
    const [curUser,setCurUser] = curUs
    const [logged,setLogged] = condition
    const navigate = useNavigate()



    
    useEffect(()=>{
        localStorage.setItem("current-user",curUs)
        if(logged){
            navigate("/")
        }
        
    },[curUs,logged])
    function handleLogin(e){
        e.preventDefault()


        const entered ={
            email: e.target.email.value,
            password:e.target.pass.value
        }
        

        if(users.some(user => user.email == entered.email && user.password == entered.password)){
            setCurUser(entered)
            setLogged(true)
        }else{
            alert("account with this does not exist")
            
        }

    }

    return(
        <>
        <h1>Log In Page</h1>
            <form onSubmit={handleLogin}>
                <input type="email" name="email" required placeholder="Enter your email" />
                <input type="password" name="pass" required placeholder="Enter your password" />
                <button>Submit</button>
            </form>
        
        </>
    )
}


export default Login