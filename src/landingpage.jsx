import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

function Home() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [message, setmessage] = useState("");
  const [user, setuser] = useState("");
  const [Loading, setloading] = useState("submit");

  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  });

  const handlemessage = async (e) => {
    e.preventDefault();
    setloading("Loading...");
    console.log(name, email);
    try {
      const res = await fetch(
        "https://fitness-project-6abu.onrender.com/user",
        {
          method: "POST",
          body: JSON.stringify({ name: name, email: email, message: message }),
          headers: { "content-Type": "application/json" },
        }
      )
        .then((res) => res.json())
        .then((data) => userdata(data.code));
    } catch (err) {
      setloading("Submit");
      setuser("Unable to fetch , try again");
    }
  };
  const userdata = (data) => {
    if (data === 201) {
      setloading("Submit");
      setuser("Email Sent Sucessfully👍");
    } else {
      setloading("Submit");
      setuser("error in Sent Message!");
    }
  };

  return (
    <Container fluid className="p-0">
      <div className="heading home">
        <h1 className="homeh1" data-aos="fade-up">
          BUILD YOUR BODY STRONG
        </h1>
        <h1 className="homeh1" data-aos="fade-up">
          AND FIT
        </h1>
        <h5 className="" data-aos="fade-up">
          Achive your health & fitness goals at any stage
        </h5>
        <p className="homebtn" type="button" data-aos="fade-up">
          {" "}
          <Link to="/signup" className="text-light text-decoration-none">
            Get Started <i className="bi bi-arrow-right"></i>
          </Link>{" "}
        </p>
        <div className="d-flex flex-row align-items-center justify-content-center">
          <div className="p-3 d-flex flex-column align-items-center justify-content-center">
            <h2 className="orange">100+</h2>
            <h6>Expert Trainers</h6>
          </div>
          <div className="p-3 d-flex flex-column align-items-center justify-content-center">
            <h2 className="orange">800+</h2>
            <h6>Member Join</h6>
          </div>
          <div className="p-3 d-flex flex-column align-items-center justify-content-center">
            <h2 className="orange">50+</h2>
            <h6>Fitness Program</h6>
          </div>
        </div>
      </div>
      <div className="aboutus">
        <h1 className="abouttitile">
          <i className="bi bi-person-fill"></i> About{" "}
          <span className="orange">Us</span>{" "}
        </h1>
        <Row>
          <Col className="d-flex flex-column align-items-center justify-content-center">
            <img
              src="./images/depositphotos_179480930-stock-photo-handsome-power-athletic-man-on.jpg"
              alt=""
              className="aboutimg"
              data-aos="fade-right"
            />
          </Col>
          <Col className="d-flex flex-column align-items-start justify-content-center me-5">
            <h1 className="p-3">
              WE PROVIDE TRAINING AND BEST FITNESS MOTIVATIONS
            </h1>
            <h3 className="p-2">
              <i className="bi bi-rocket-takeoff-fill orange">
                Cutting-Edge Equipment
              </i>
            </h3>
            <p>
              Our gym is equipped with the latest and most advanced fitness
              equipment to ensure you have the tools you need for an effective
              workout.
            </p>
            <h3 className="p-2">
              <i className="bi bi-rocket-takeoff-fill orange">
                {" "}
                Professional Trainers
              </i>
            </h3>
            <p>
              Our certified trainers are passionate about helping you achieve
              your fitness goals. they provide expert guidance and support
              tailored to your unique needs.
            </p>
            <h3 className="p-2">
              <i className="bi bi-rocket-takeoff-fill orange">
                {" "}
                Variety of Classes
              </i>
            </h3>
            <p>
              Whether you prefer high-intensity workouts,Yoga,or group
              classes,we offer a diverse range of fitness programs to keep you
              engaged and motivated.
            </p>
            <h3 className="p-2">
              <i className="bi bi-rocket-takeoff-fill orange">
                {" "}
                Clean and Safe Environment
              </i>
            </h3>
            <p>
              Your health and safety are our top priorities. Our gym is kept
              spotless and we adhere to strict cleanliness and sanitation
              standards.
            </p>
          </Col>
        </Row>
      </div>

      <div className="service">
        <h1 className="servicetitle">Our Service</h1>
        <Row>
          <Col className="d-flex flex-column align-items-center justify-content-center">
            <img
              src="./images/14-Best-Dumbbell-Workouts-and-Exercises-For-a-Full-Body-Workout.jpg"
              alt=""
              className="serviceimg"
              data-aos="fade-up-right"
            />
          </Col>
          <Col className="d-flex flex-column align-items-center justify-content-center">
            <h1 data-aos="fade-left">FITNESS TRAINING</h1>
          </Col>
        </Row>
        <Row>
          <Col className="d-flex flex-column align-items-center justify-content-center">
            <h1 data-aos="fade-right">YOGA TRAINING</h1>
          </Col>
          <Col className="d-flex flex-column align-items-center justify-content-center">
            <img
              src="./images/nj-yoga-studios-1.jpg"
              alt=""
              className="serviceimg"
              data-aos="fade-up-left"
            />
          </Col>
        </Row>
        <Row>
          <Col className="d-flex flex-column align-items-center justify-content-center">
            <img
              src="./images/Shutterstock_1505303738-1.jpg"
              alt=""
              className="serviceimg"
              data-aos="fade-up-right"
            />
          </Col>
          <Col className="d-flex flex-column align-items-center justify-content-center">
            <h1 data-aos="fade-left">NUTRITION DIET PLAN </h1>
          </Col>
        </Row>
        <Row>
          <Col className="d-flex flex-column align-items-center justify-content-center">
            <h1 data-aos="fade-right">WEIGHT LIFTING</h1>
          </Col>
          <Col className="d-flex flex-column align-items-center justify-content-center m-4">
            <img
              src="./images/not-getting-stronger.jpg"
              alt=""
              className="serviceimg"
              data-aos="fade-up-left"
            />
          </Col>
        </Row>
      </div>
      <div className="contact">
        <Row>
          <form onSubmit={handlemessage}>
            <Col className="d-flex flex-column align-items-center justify-content-center ">
              <h1 className="m-4">
                <i className="bi bi-headset orange"></i> Get In Touch
              </h1>
              <input
                type="text"
                className="p-2  m-3 contactinput"
                placeholder="Name"
                value={name}
                onChange={(e) => setname(e.target.value)}
                required
              />
              <input
                type="email"
                className="p-2  m-3 contactinput"
                placeholder="Email"
                value={email}
                onChange={(e) => setemail(e.target.value)}
                required
              />
              <textarea
                name=""
                id=""
                cols="30"
                rows="4"
                className="p-2  m-3 contactinput"
                placeholder="Message"
                value={message}
                onChange={(e) => setmessage(e.target.value)}
                required
              ></textarea>
              <p>{user}</p>
              <button className=" contactbtn p-2  m-3" type="submit">
                Sumit <i className="bi bi-send-fill"></i>
              </button>
            </Col>
          </form>
        </Row>
      </div>

      <div className="footer">
        <Row>
          <Col className="d-flex flex-column align-items-center justify-content-center">
            <h4>SAB Gym</h4>
            <p>thanks for visiting our web site</p>
          </Col>
          <Col className="d-flex flex-column align-items-center justify-content-center">
            <h4>Contact us</h4>
            <p>
              <i className="bi bi-envelope-fill"></i> sabgym1432@gmail.com
            </p>
            <p>
              <i className="bi bi-telephone-fill"></i> 96x xxx xxxx
            </p>
          </Col>
          <Col>
            <h4 className="texts">Follow us</h4>
            <div className="d-flex flex-row align-items-center justify-content-center">
              <p className="bottombtn1">
                <i className="bi bi-youtube icons"></i>
              </p>
              <p className="bottombtn1">
                <i className="bi bi-facebook icons"></i>
              </p>
              <p className="bottombtn1">
                <i className="bi bi-instagram icons"></i>
              </p>
            </div>
          </Col>
          <hr />
          <p className="texts">
            <i className="bi bi-c-circle"></i>Copyright Bharath
          </p>
        </Row>
      </div>
    </Container>
  );
}

export default Home;
