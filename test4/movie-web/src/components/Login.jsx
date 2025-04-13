import { useNavigate } from "react-router-dom"
import { login } from "../utils/Login"

const Login = () =>{
    const navigate = useNavigate()

    return(
        <>
            <h1>Login Page</h1>
            <form onSubmit={(e) => login(e,navigate)}>
                <input type="email" name="email" placeholder="Enter your email" required/>
                <input type="password" name="password" placeholder="Enter your password"/>
                <button>Login</button>
            </form>
        </>
    )
}

export default Login