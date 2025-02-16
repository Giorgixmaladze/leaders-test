import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
function Signup({ curUs, data, condition }) {
    const [curUser, setCurUser] = curUs
    const [signed, setSigned] = condition
    const [users, setUsers] = data

    const navigate = useNavigate()


    useEffect(() => {
        localStorage.setItem("current-user", JSON.stringify(curUser))
        localStorage.setItem("users", JSON.stringify(users))
        if(signed){
            navigate('/login')
        }
    }, [curUser,signed])


    function handleSumbit(e) {
        e.preventDefault()
        const entered = {
            email: e.target.email.value,
            password: e.target.pass.value
        }

        if (users.some(user => user.email == entered.email)) {
            alert("This email already exists!")
        } else {
            setCurUser([entered])
            setUsers(prev => [...prev, entered])
            setSigned(true)
        }
    }


    return (
        <>
        <h1>Signup Page</h1>
            <form onSubmit={handleSumbit}>
                <input type="email" name="email" required placeholder="Enter the email" />
                <input type="password" name="pass" required placeholder="Enter the password" />
                <button>Submit</button>
            </form>
        </>
    )
}

export default Signup