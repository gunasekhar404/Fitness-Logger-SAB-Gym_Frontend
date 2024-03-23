import React from "react";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Spinner from "react-bootstrap/Spinner";

function Signup() {
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [gender, setgender] = useState("");
  const [user, setuser] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [isloading, setloading] = useState("Submit");
  const navigate = useNavigate();

  const createuser = async (e) => {
    console.log(gender);
    setloading(<Spinner animation="border" variant="light" />);
    e.preventDefault();
    try {
      const res = await fetch(
        "https://fitness-project-6abu.onrender.com/signup",
        {
          method: "POST",
          body: JSON.stringify({
            fname: firstname,
            lname: lastname,
            gender: gender,
            email: email,
            password: password,
          }),
          headers: { "content-Type": "application/json" },
        }
      )
        .then((res) => res.json())
        .then((data) => userdata(data.code, data.email));
    } catch (err) {
      setloading("Submit");
      setuser("Unable to fetch , try again");
    }
  };

  const userdata = (data, email) => {
    if (data === 200) {
      navigate(`/home`);
      setloading("Submit");
      sessionStorage.setItem("email", email);
    } else if (data === 405) {
      setloading("Submit");
      setuser("user already exist");
    } else {
      setloading("Submit");
      setuser("error in signup");
    }
  };

  return (
    <div className="bg-img">
      <Container fluid>
        <Row>
          <Col>
            <form onSubmit={createuser}>
              <div className="d-flex flex-column align-items-center justify-content-center mt-5 pt-5">
                <h1 className="mb-4 signuptitle ">Create Account</h1>
                <div className="d-flex align-items-center justify-content-center w-50 ">
                  <input
                    type="text"
                    placeholder="Firstname"
                    className="p-2 m-2 signupinput"
                    value={firstname}
                    onChange={(e) => setfirstname(e.target.value)}
                    required
                  />
                  <input
                    type="text"
                    placeholder="Lastname"
                    className="p-2 m-2 signupinput"
                    value={lastname}
                    onChange={(e) => setlastname(e.target.value)}
                    required
                  />
                </div>
                <div className="gender">
                  <input
                    type="radio"
                    name="gender"
                    value="Male"
                    onChange={(e) => setgender(e.target.value)}
                    required
                  />
                  <span className="whites">Male</span>
                  <input
                    type="radio"
                    name="gender"
                    value="Female"
                    onChange={(e) => setgender(e.target.value)}
                    required
                  />
                  <span className="whites">Female</span>
                  <input
                    type="radio"
                    name="gender"
                    value="Other"
                    onChange={(e) => setgender(e.target.value)}
                    required
                  />
                  <span className="whites">Other</span>
                </div>
                <input
                  type="email"
                  placeholder="Email"
                  className="p-2 m-3 w-50"
                  value={email}
                  onChange={(e) => setemail(e.target.value)}
                  required
                />
                <input
                  type="text"
                  placeholder="Password"
                  className="p-2 m-3 w-50"
                  value={password}
                  onChange={(e) => setpassword(e.target.value)}
                  required
                />
                <p className="text-align-center text-light">{user}</p>
                <button className="p-2 m-2 w-50 signupbtn" type="submit">
                  {isloading}
                </button>
                <p className="white">
                  Do you have already account <Link to="/signin">Signin</Link>
                </p>
              </div>
            </form>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
}

export default Signup;
