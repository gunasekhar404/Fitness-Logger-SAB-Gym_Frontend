import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navbar from "../homePage/Dnavbar";
function Calculator() {
  const [error,seterror]=useState("")
  const [age, setage] = useState("");
  const [weight, setweight] = useState("");
  const [height, setheight] = useState("");
  const [data, setdata] = useState("");
  const [hide, sethide] = useState(false);

  const url = `https://fitness-calculator.p.rapidapi.com/bmi?age=${age}&weight=${weight}&height=${height}`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "f11661cedamsh2c3cb81ecc58066p1876a0jsn69f52ff25a99",
      "X-RapidAPI-Host": "fitness-calculator.p.rapidapi.com",
    },
    contentType: "application/json",
  };

  const handlebmi = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      setdatas(result.data);
      sethide(true);
    } catch (error) {
      console.log(error);
    }
  };

  const setdatas =(data)=>{
    if(data==undefined){
        console.log("error")
        seterror("sorry unable to load data.please enter valid data😞")
    }else{
       setdata(data)
        seterror("")
    }
  }


  console.log(data);
  return (
    <Container fluid className="p-0">
      <Navbar />
      <Row className="d-flex flex-row align-items-center justify-content-center calculator">
        <Col className="d-flex flex-column align-items-start  p-5 text-light margin maincontent">
          <h1 className="">BMI Calculator</h1>
          <p>
            Body Mass Index (BMI) is a medical tool that uses your height and
            weight to estimate your body fat.
          </p>
        </Col>
        <Col className="d-flex flex-column align-items-center justify-content-center">
          <form
            onSubmit={handlebmi}
            className="d-flex flex-column align-items-center justify-content-center"
          >
            <input
              type="number"
              placeholder="Age"
              value={age}
              onChange={(e) => setage(e.target.value)}
              required
              className="Cinput"
            />
            <input
              type="number"
              placeholder="Weight(kg) between (40 kg to 160 kg)"
              value={weight}
              onChange={(e) => setweight(e.target.value)}
              required
              className="Cinput"
            />
            <input
              type="number"
              placeholder="Height(cm) between (130 cm to 230 cm)"
              value={height}
              onChange={(e) => setheight(e.target.value)}
              required
              className="Cinput"
            />
            <button type="submit" className="cbtn">
              Calculate
            </button>
            <p className="text-light p-5 texts">{error}</p>
          </form>
          {hide ? (
            <div className="result text-light">
              <h4 className="orange">Result :</h4>
              <p>
                BMI : <span className="text-success"> {data.bmi}</span>{" "}
              </p>
              <p>
                You are : <span className="text-success"> {data.health}</span>
              </p>
              <p>
                healthy bmi range :{" "}
                <span className="text-success"> {data.healthy_bmi_range}</span>
              </p>
            </div>
          ) : (
            <span></span>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default Calculator;
