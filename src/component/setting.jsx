import React, { useState ,useEffect } from "react";
import { Container } from "react-bootstrap";
import Navbar from "./homePage/Dnavbar";
import { Getalldata } from "./Task/helper";
import Spinner from 'react-bootstrap/Spinner';

function Setting(){
    const [data,setdata]=useState()
    const[isloading,setloading]=useState("Update Info")
    const [firstname,setfirstname]=useState("")
    const [lastname,setlastname] = useState("")
    const [height,setheight]=useState("")
    const [weight ,setweight]=useState('')
    const [age,setage]=useState('')
   
    useEffect(()=>{
        Getalldata().then((data)=>{
        setfirstname(data[0].fname),
        setlastname(data[0].lname),
        setweight(data[0].weight),
        setheight(data[0].height),
        setage(data[0].age)})
    },[])

    const email= sessionStorage.getItem("email")

    const handlesetting = async (e)=>{
        e.preventDefault()
        setloading(<Spinner animation="border" variant="light" />)
        try {
            
            console.log(email)
            
            const res = await fetch(`https://fitness-project-6abu.onrender.com/update/${email}`, {
              method: "POST",
              body: JSON.stringify({ 
                fname:firstname,
                lname:lastname,
                height:height,
                weight:weight,
                age:age,
              
            }),
              headers: { "content-Type": "application/json" },
            })
              .then((res) => res.json())
              .then((data) => userinfo(data.code));
          } catch (err) {
            console.log(err)
            setloading("Submit")
            setdata("Unable to fetch , try again",err);
          }
        };
      
        const userinfo = (data) => {
          if (data === 205) {
            setloading("Submit")
            setdata("User Info Update Successfully 👍")
            
          } else {
            setloading("Submit")
            setdata("Error in update data");
          }
    }

  
return(
  <Container fluid className="p-0 m-0 ">
  <div> 
  <Navbar/>
  </div >
 
  <div className="middle d-flex flex-column align-items-center justify-content-center">
  <h1 >Profile Setting</h1>
  <form onSubmit={handlesetting} className="d-flex flex-column align-items-starte justify-content-center sform">
  <div className="d-flex flex-row align-items-starte justify-content-center">
    <div>
  <p>Firstname</p>
  <input type="text" value={firstname} onChange={(e)=>setfirstname(e.target.value)} className="p-2 "/>
  </div>
  <div>
  <p>Lastname</p>
  <input type="text" value={lastname} onChange={(e)=>setlastname(e.target.value)} className="p-2"/>
  </div>
  </div>
  <p>Height</p>
  <input type="number" value={height} onChange={(e)=>setheight(e.target.value)} className="p-2"/>
  <p>Weight</p>
  <input type="number" value={weight} onChange={(e)=>setweight(e.target.value)} className="p-2"/>
  <p>Age</p>
  <input type="number" value={age} onChange={(e)=>setage(e.target.value)} className="p-2"/>
  <p className="text-align-center text-danger">{data}</p>
  <button type="submit" className="p-2 sbtn">{isloading}</button>
  </form>
  </div>
</Container>
)
}

export default Setting