import React, { useState } from "react";


function Addtask(){
    const [title,settitle]=useState("")
    const [message,setmessage]=useState("")
    const handleaddtask = async(e)=>{
        e.preventDefault()
        try {
            const email = sessionStorage.getItem("email")
            const res = await fetch(`https://fitness-project-6abu.onrender.com/task/${email}`, {
              method: "POST",
              body: JSON.stringify({ 
                title:title,
                message:message}),
              headers: { "content-Type": "application/json" },
            })
              .then((res) => res.json())
              .then((data) => userdata(data.code));
          } catch (err) {
            setuser("Unable to fetch , try again");
          }
        };
        const userdata=(data)=>{
          if(data==200){
            settitle("")
            setmessage("")
          }else{alart("message cannot upload")}
        }
    
return(
    <div className="addtask d-flex flex-row align-items-center justify-content-center mb-5 ">
      
        <form onSubmit={handleaddtask} className="d-flex flex-row align-items-center justify-content-center taskform">
        <img src="https://previews.123rf.com/images/simmmax/simmmax2005/simmmax200500552/147811410-effective-time-management-people-completed-business-plan-team-rejoices-task-done-vector-illustration.jpg" alt="" className="taskimg2" />
          <div className="d-flex flex-column align-items-center justify-content-center">
            <input type="text" placeholder="Title" value={title} onChange={(e)=>settitle(e.target.value)} className="taskinput" />
            <textarea cols="30" rows="5" placeholder="Message" value={message} onChange={(e)=>setmessage(e.target.value)} className="tasktext"></textarea>
            <button type="submit" className="taskbtn">Submit</button>
            </div>
        </form>
    </div>
)
}

export default Addtask