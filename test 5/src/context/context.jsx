import { createContext, useEffect, useState } from "react"
import { getLocal, setLocal } from "../utils/localstorage"
import { useNavigate } from "react-router-dom"

export const AuthContext = createContext()


const AuthProvider = ({ children }) => {
    const [students, setStudents] = useState(getLocal("students") || [])
    const currUser = getLocal("currUser")
    const logged = getLocal("logged")
    

    useEffect(() => {
        setLocal("students", students)
    }, [students])
    const addStudent = (e) => {
        e.preventDefault()
        const info = {}
        const form = new FormData(e.target)
        for (let [key, value] of form.entries()) {
            info[key] = value
        }

        if (students.some(student => (student.studentName === info.studentName) && (student.studentLastName=== info.studentLastName))) {
            alert("Student is already added!")
        } else {
            info["id"] = Date.now()
            setStudents(prev => [...prev, info])
        }


    }





    return (
        <AuthContext.Provider value={{ students, addStudent,currUser,logged }}>
            {children}
        </AuthContext.Provider>
    )

}


export default AuthProvider