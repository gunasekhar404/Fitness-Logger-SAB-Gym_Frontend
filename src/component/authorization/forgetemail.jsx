import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Spinner from "react-bootstrap/Spinner";

function Forgetemail() {
  const [isloading, setloading] = useState("SUBMIT");
  const [emails, setemail] = useState("");
  const [message, setmessage] = useState("");
  const navigate = useNavigate();

  const handelemail = async (e) => {
    setloading(<Spinner animation="border" variant="light" />);
    e.preventDefault();
    try {
      const res = await fetch(
        "https://fitness-project-6abu.onrender.com/reset",
        {
          method: "POST",
          body: JSON.stringify({ email: emails }),
          headers: { "content-Type": "application/json" },
        }
      )
        .then((res) => res.json())
        .then((data) => useremail(data.code));
    } catch (err) {
      setmessage("Unable to fetch , try again");
      setloading("SUBMIT");
      console.log(err);
    }
  };
  const useremail = (code) => {
    if (code === 401) {
      setmessage("Unable to Sent OTP please try again");
    } else if (code === 402) {
      setloading("SUBMIT");
      setmessage("user not found");
    } else if (code === 503) {
      setloading("SUBMIT");
      setmessage(code, "Somthing is wrong");
    } else {
      setloading("SUBMIT");
      navigate("/otp");
      setmessage("email sent successfully");
    }
  };

  return (
    <div className="forgetimg">
      <Container fluid>
        <Row>
          <Col></Col>
          <Col className="top">
            <form onSubmit={handelemail}>
              <div className="d-flex flex-column align-items-center justify-content-center">
                <h2 className="white">Enter Your Email </h2>
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="p-2 w-50 m-3 inp"
                  value={emails}
                  onChange={(e) => setemail(e.target.value)}
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
export default Forgetemail;
