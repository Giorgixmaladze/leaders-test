import { useContext, useEffect } from "react"
import { AuthContext } from "../context/context"
import { Link } from "react-router-dom"
import { getLocal, setLocal } from "../utils/localstorage"
import { useNavigate } from "react-router-dom"
const Management = () => {


    const { students, addStudent, currUser } = useContext(AuthContext)
    const navigate = useNavigate()
    let logged = getLocal("logged")
    const logOut = () => {
        logged = false
        navigate("/register")
    }
    useEffect(() =>{
        setLocal(logged)
    },[logged])

    return (
        <div>
            <h1>Welcome to management page</h1>
            <button onClick={logOut}>Log out</button>
            { currUser.role &&(

                  <form onSubmit={addStudent} >
                <input type="text" name="studentName" placeholder="Enter the student's name..." />
                <input type="text" name="studentLastName" placeholder="Enter the student's lastname..." />
                <input type="text" name="github" placeholder="Enter the student's github link..." />
                <input type="text" name="parentFacebook" placeholder="Enter the parent's facebook link..." />
                <input type="text" name="studentsFacebook" placeholder="Enter the student's facebook link..." />
                <button>Add</button>
            </form>)
            }
          

            <div>
                <table border={1}>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Lastname</th>
                            <th>Github link</th>
                            <th>Parent's Fb Link</th>
                            <th>Student's Fb Link</th>
                        </tr>


                        {
                            students.map((student, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{student.studentName}
                                            {currUser.role === "admin" && <button>Edit</button>}
                                        </td>
                                        <td>{student.studentLastName}</td>
                                        <td><Link to={student.github}>{student.github}</Link></td>
                                        <td><Link to={student.parentFacebook}>{student.parentFacebook}</Link></td>
                                        <td><Link to={student.studentsFacebook}>{student.studentsFacebook}</Link></td>
                                    </tr>
                                )
                            })
                        }

                    </thead>
                </table>
            </div>


        </div>
    )
}

export default Management