

export async function Getalldata(){
    const email = sessionStorage.getItem("email")
    const res = await fetch(`https://fitness-project-6abu.onrender.com/reset/${email}`,{method : "GET"} )
    const data = await res.json()
    return data
}

export async function Getalltask(){
    const email = sessionStorage.getItem("email")
    const res = await fetch(`https://fitness-project-6abu.onrender.com/task/${email}`,{method : "GET"})
    const data = await res.json()
    return data
}

