import { useState } from "react";
import { Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Spinner from "react-bootstrap/Spinner";

function Signin() {
  const [isloading, setloading] = useState("Submit");
  const [codedata, setcodedata] = useState("");
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    setloading(<Spinner animation="border" variant="light" />);
    e.preventDefault();
    try {
      const res = await fetch(
        "https://fitness-project-6abu.onrender.com/signin",
        {
          method: "POST",
          body: JSON.stringify({ email: email, password: password }),
          headers: { "content-Type": "application/json" },
        }
      )
        .then((res) => res.json())
        .then((data) => allfunction(data.code));
    } catch (err) {
      setloading("submit");
      setcodedata("Unable to fetch , try again");
      return err;
    }
  };

  const allfunction = (data) => {
    if (data === 200) {
      setloading("submit");
      sessionStorage.setItem("email", email);
      navigate(`/home`);
      setcodedata("user found");
    } else if (data === 404) {
      setloading("submit");
      setcodedata("Password Incorrect");
    } else {
      setloading("submit");
      setcodedata("User not found");
    }
  };

  return (
    <div className="bg-img">
      <Container fluid>
        <Row>
          <Col className="top">
            <form onSubmit={handleSubmit}>
              <div className="d-flex flex-column align-items-center justify-content-center mt-5 ">
                <h1 className=" signuptitle ">WELCOME BACK !</h1>
                <input
                  type="text"
                  placeholder="Email"
                  className="p-2 m-3 w-50 inp"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Password"
                  className="p-2 m-3 w-50 inp"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <p className="text-light">{codedata}</p>
                <button className="p-2 m-2 w-50 signupbtn inp " type="submit">
                  {isloading}
                </button>
                <div className="d-flex flex-row align-items-center justify-content-start w-50">
                  <p>
                    <Link to="/forget" className="p">
                      Forget Password
                    </Link>
                  </p>
                  <p className="white">
                    New User <Link to="/signup">SignUp?</Link>
                  </p>
                </div>
              </div>
            </form>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
}

export default Signin;
