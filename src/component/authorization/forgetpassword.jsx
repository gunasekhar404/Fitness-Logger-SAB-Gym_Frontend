import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Spinner from "react-bootstrap/Spinner";

function Password() {
  const [isloading, setloading] = useState("SUBMIT");
  const [enable, setenable] = useState(false);
  const [cpassword, setcpassword] = useState("");
  const [npassword, setnpassword] = useState("");
  const [message, setmessage] = useState("");
  const { OTP } = useParams();

  const handlepass = async (e) => {
    e.preventDefault();
    setloading(<Spinner animation="border" variant="light" />);
    console.log(OTP);
    try {
      const res = await fetch(
        `https://fitness-project-6abu.onrender.com/reset/password/${OTP}`,
        {
          method: "POST",
          body: JSON.stringify({ npassword: npassword, cpassword: cpassword }),
          headers: { "content-Type": "application/json" },
        }
      )
        .then((res) => res.json())
        .then((data) => userpass(data.code));
    } catch (err) {
      setmessage("Unable to fetch, try again");
      setloading("SUBMIT");
      console.log(err);
    }
  };
  const userpass = (code) => {
    if (code === 406) {
      setloading("SUBMIT");
      setmessage("Password is not match");
    } else if (code === 405) {
      setloading("SUBMIT");
      setmessage("Unknown error please try again");
    } else {
      setloading("SUBMIT");
      setenable(true);
      setmessage("password is reset sucessfully👍");
    }
  };

  return (
    <div className="forgetimg">
      <Container fluid>
        <Row>
          <Col></Col>
          <Col className="top">
            <form onSubmit={handlepass}>
              <div className="d-flex flex-column align-items-center justify-content-center">
                <h2 className="white">Create New Password </h2>
                <input
                  type="text"
                  placeholder="New Password"
                  className="p-2 w-50 m-3 inp"
                  value={npassword}
                  onChange={(e) => setnpassword(e.target.value)}
                  required
                />
                <input
                  type="password"
                  placeholder="Conform Password"
                  className="p-2 w-50 m-3 inp"
                  value={cpassword}
                  onChange={(e) => setcpassword(e.target.value)}
                  required
                />
                <p className="text-light">{message}</p>
                <button type="submit" className="p-2 w-50 m-3 signupbtn inp">
                  {isloading}
                </button>
                <p className="white">
                  Do you want to Login <Link to="/signin">Log In?</Link>
                </p>
              </div>
            </form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default Password;
