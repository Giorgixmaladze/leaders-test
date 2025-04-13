import { getLocal, setLocal } from "./localstorage"

const login = (e, navigate) => {
    e.preventDefault()
    const data = new FormData(e.target)
    const users = getLocal("users") || []
    let info = {}
    let logged = getLocal("logged") || false
    for (let [key, value] of data.entries()) {
        info[key] = value
    }

    if (users.some(user => user.email === info.email && user.password === info.password)) {
        setLocal("curUser", info)
        logged = true
        setLocal("logged", logged)
        navigate("/")
    } else {
        alert("incorrect password or email!")
        logged = false
        setLocal("logged", logged)

    }
    return users
}


export { login }