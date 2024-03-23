import React from "react";
import { useState } from "react";
import Navbar from "./homePage/Dnavbar";

function Exercies(){
    const [error,seterror]=useState("")
    const [hide,sethide]=useState(false)
    const[showdata,setshowdata]=useState(false)
    const [data,setdata]=useState()
    const [count,setcount]=useState(10)
    const[bodypart,setbodypart]=useState("")
    

    const url = `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodypart}?limit=${count}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'f11661cedamsh2c3cb81ecc58066p1876a0jsn69f52ff25a99',
            'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
        },
        contentType: 'application/json'
    };

    const handlefood= async (e)=>{
        e.preventDefault();
        setcount(count+10)
        try {
            const response = await fetch(url, options);
            const result = await response.json();
            setdatas(result);
            sethide(true)
            setshowdata(true)
        } catch (error) {
            console.log(error)
            alert("please enter the example body part")
        }}

        const setdatas =(data)=>{
            if(data.statusCode==400){
                console.log("error")
                seterror("sorry unable to load data. please enter example Body part")
            }else{
                setdata(data)
                seterror("")
            }
          }

       
       

return( 
    <div>
        <Navbar/>
        <div className="maincontent">
            <h1 className="">Full Body Exercises</h1>
            <div>
                <h3 className="mt-5">Split Workout</h3>
                <p>Split training is an effective way to program strength and muscle-building workouts, especially when lifting weights.You can also divide your training and focus on different body parts or movements on different days.</p>
                <p>Example : (back, cardio, chest, lower arms, lower legs, neck, shoulders, upper arms, upper legs, waist)</p>
            </div>
        <form onSubmit={handlefood} className="bodypartform">
        <input
        type="text"
        placeholder="Enter body part"
        className="bodtpartinput"
        value={bodypart}
        required
        onChange={(e) => setbodypart(e.target.value)}
      />
        <button type="submit" className="bodtpartbtn"><i className="bi bi-search"></i></button>
        </form>
        <p className="text-danger p-5 texts">{error}</p>
       {hide ?<h1 className="text-center p-5">Showing Results</h1> : <span></span> }
        <div className="cards">         
        {data?.map((value,idx)=>( 
            <div className="card" key={idx}>
                <div className="thefront">
                <img src={value.gifUrl} alt="" className="cardimg"/>
                <h2 className="text">{value.name}</h2>
                <h6>Equipment use :</h6>
                <p className="text">{value.equipment}</p>
                <h6>secondaryMuscles : </h6>
                <p className="text">{value.secondaryMuscles[0]} , <span>{value.secondaryMuscles[1]}</span></p>
                </div>
                <div className="theback">
                    <h4>Instruction</h4>
                <p>1,{value.instructions[0]}</p>
                <p>2,{value.instructions[1]}</p>
                <p>3,{value.instructions[2]}</p>
                <p>4,{value.instructions[3]}</p>
                <p>5,{value.instructions[4]}</p>
                </div>
            </div>
           
        ))}
        </div>
        <div className="d-flex flex-column align-items-center justify-content-center">
        { hide ? <button onClick={handlefood} className="showmorebtn">Show More <i class="bi bi-arrow-down-short"></i></button> : <span></span>}
        </div>
        </div>
    </div>

)}

export default Exercies
