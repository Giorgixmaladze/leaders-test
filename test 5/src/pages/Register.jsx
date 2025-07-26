import { useNavigate } from "react-router-dom"
import useForm from "../hooks/useForm"
import { Link } from "react-router-dom"
const Register = () =>{
    const navigate = useNavigate()
    const[users,handleSubmit] = useForm(navigate)

    return(
        <div>
            <h1>Register Page</h1>

            <form onSubmit={handleSubmit}> 
                <input type="text" name="firstname" placeholder="Enter your firstname..."/>
                <input type="text" name="lastname" placeholder="Enter your lastname..." />
                <input type="email" name="email" placeholder="Enter your email..." />
                <input type="password" name="password" placeholder="Create new password..." />
                <label htmlFor="">If you are admin enter the passkey:</label>
                <input type="number" name="passkey"  id="passkey"/>
                <Link to="/login">already have an account? Log in</Link>
                <button>Register</button>
            </form>

        </div>
    )

}


export default Register