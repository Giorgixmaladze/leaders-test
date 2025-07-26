const setLocal = (name,value) =>{
    localStorage.setItem(name,JSON.stringify(value))
}


const getLocal = (name) =>{
    return JSON.parse(localStorage.getItem(name))

}


export {setLocal,getLocal}