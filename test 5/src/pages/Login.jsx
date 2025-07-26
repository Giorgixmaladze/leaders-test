import { useNavigate } from "react-router-dom"
import useForm from "../hooks/useForm"
import { LoginForm } from "../utils/LogIn"
import { Link } from "react-router-dom"
const Login = () => {
    const navigate = useNavigate()

    return(
        <div>
            <h1>Log in page</h1>

            <form onSubmit={(e) => LoginForm(e,navigate)}>
                <input type="email" name="email" placeholder="Enter the registered email..." />
                <input type="password" name="password" placeholder="Enter the registered password..." />
                <Link to="/register">Don't have an acoount? Register</Link>
                <button>Log in</button>
            </form>
        </div>
    )
}

export default Login