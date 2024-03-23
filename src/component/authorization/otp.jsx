import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Spinner from "react-bootstrap/Spinner";

function Otp() {
  const [isloading, setloading] = useState("Enter OTP");
  const [OTP, setotp] = useState("");
  const [message, setmessage] = useState("");
  const navigate = useNavigate();

  const handleotp = async (e) => {
    setloading(<Spinner animation="border" variant="light" />);
    e.preventDefault();
    try {
      const res = await fetch(
        "https://fitness-project-6abu.onrender.com/reset/otp",
        {
          method: "POST",
          body: JSON.stringify({ OTP: OTP }),
          headers: { "content-Type": "application/json" },
        }
      )
        .then((res) => res.json())
        .then((data) => userotp(data.code));
    } catch (err) {
      setloading("Enter OTP");
      setmessage("Unable to fetch , try again");
      console.log(err);
    }
  };
  const userotp = (code) => {
    if (code === 405) {
      setloading("Enter OTP");
      setmessage("OTP unmatch");
    } else {
      setloading("Enter OTP");
      navigate(`password/${OTP}`);
      setmessage("OTP match");
    }
  };

  return (
    <div className="forgetimg">
      <Container fluid>
        <Row>
          <Col></Col>
          <Col className="top">
            <form onSubmit={handleotp}>
              <div className="d-flex flex-column align-items-center justify-content-center">
                <h2 className="white">Enter Your OTP </h2>
                <input
                  type="text"
                  placeholder="Enter your OTP"
                  className="p-2 w-50 m-3 inp"
                  value={OTP}
                  onChange={(e) => setotp(e.target.value)}
                  required
                  maxLength={6}
                />
                <p className="text-light">{message}</p>
                <button type="submit" className="p-2 w-50 m-3 signupbtn inp">
                  {isloading}
                </button>
              </div>
            </form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default Otp;
