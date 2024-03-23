import React, { useState , useEffect } from "react";
import Addtask from "./addtask";
import { Getalltask } from "./helper";
import Navbar from "../homePage/Dnavbar";


function Task(){
const [task,settask]=useState()

useEffect(()=>{
    Getalltask().then((data)=>{settask(data)})
})
console.log(task)

const handledelete = async (id)=>{
    const email = sessionStorage.getItem("email")
    const res= await fetch(`https://fitness-project-6abu.onrender.com/task/del/${email}/${id}`,{method:"DELETE",
    headers:{"content-type":"application/json"}})
    const data =await res.json()
    console.log(data)
}
return(
    <>
    <Navbar/>
    <div className="main d-flex flex-column align-items-center justify-content-center">
    <h1 className="mt-4  text-light">Add TASK</h1>
       <Addtask/>
        {task?.map((val,idx)=>(
            <div className="taskcard w-50 m-3  " key={idx}>
                <h2>{val.title}</h2>
                <hr/>
                <p>{val.message}</p>
                <div  className=" d-flex flex-column align-items-end justify-content-center">
                <button value={val.id} onClick={(e)=>handledelete(e.target.value) } className="taskcardbtn">delete</button>
                </div>
            </div>
        ))}
    </div>
    </>
)}

export default Task