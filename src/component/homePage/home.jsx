import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import Navbar from "./Dnavbar";
import Carousel from "react-bootstrap/Carousel";
import Profile from "./profile";
import "aos/dist/aos.css";
import Aos from "aos";

function Main() {
  const newdate = new Date();
  let date = newdate.getDate();
  const month = newdate.toLocaleString("default", { month: "long" });
  let year = newdate.getFullYear();
  const currentdate = `${date} ${month} ${year}`;
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  });

  return (
    <Container fluid className="d-flex flex-row p-0 m-0 width">
      <div>
        <Navbar />
      </div>
      <div className="middle">
        <h1>Dashboard</h1>
        <p>{currentdate}</p>
        <Carousel activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item>
            <img
              src="https://challenge-assets.mapmyfitness.com/kjizize.jpg"
              alt=""
              className="sliderimg"
            />
            <Carousel.Caption>
              <h3>YOU VS YEAR 2024</h3>
              <p>Run or Walk 1000 km in 2024</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              src="https://media.allforsport.in/events/a2792490-a15c-11ee-b0ac-f7a25d7f3f84/1703571655675.jpeg"
              alt=""
              className="sliderimg"
            />
            <Carousel.Caption>
              <h3>Chennai Cancer Survivor Run - CCSR24</h3>
              <p>25 February • 5:00 AM to 25 February • 8:00 AM</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              src="https://indyschild.com/wp-content/uploads/2019/01/AdobeStock_108128281.jpeg"
              alt=""
              className="sliderimg"
            />
            <Carousel.Caption>
              <h3>Conduct Prenatal Yoga Classes</h3>
              <p>Weekly thrice conduct Yoga classes Online and Offline</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        <div className="d-flex flex-row align-items-center justify-content-center h-50">
          <img
            src="https://img.freepik.com/free-photo/athletic-shirtless-young-male-fitness-model-holds-dumbbell-with-light-isolated-dark-background_613910-20.jpg"
            alt=""
            className="mainimg2"
            data-aos="zoom-in-right"
          />
          <div
            className="d-flex flex-column align-items-center justify-content-center textmain "
            data-aos="zoom-in-left"
          >
            <h3>
              WHY YOU SHOULD HAVE TO <span className="orange">WORKOUT </span>?
            </h3>
            <ul className="p-2">
              <li className="p-2">Helps strengthen muscles and bones</li>
              <li className="p-2">
                Reducing the risk of cardiovascular disease
              </li>
              <li className="p-2">Helps maintain ideal body weight</li>
              <li className="p-2">
                Reducing the risk of falling and breaking bones.
              </li>
              <li className="p-2">Increase the chances of longevity</li>
            </ul>
          </div>
        </div>
        <div className="d-flex flex-row align-items-center justify-content-center">
          <div
            className="d-flex flex-column align-items-start justify-content-center p-4"
            data-aos="zoom-in-right"
          >
            <h3 className="mh3">
              TRANSFORM YOUR <span className="orange">BODY</span> AND{" "}
              <span className="orange">MIND</span>{" "}
            </h3>
            <p>
              Our experienced trainers are here to guide you on your journey to
              a healthier and stronger body
            </p>
          </div>
          <img
            src="./images/Fitness-Club-Management-_hero_img.png"
            alt=""
            className="mainimg "
            data-aos="zoom-in-left"
          />
        </div>
        <div className="mainbox ">
          <h1 className="text-light texts p-3">Benefits Of Our Classes</h1>
          <div className="d-flex flex-row align-items-center justify-content-center">
            <div className="boxs m-4" data-aos="zoom-out-up">
              <h3>
                <i className="bi bi-mortarboard-fill"></i> Expert Guidance
              </h3>
              <p>
                Our certified instructors ensure proper form and
                technique.reducing the risk of injury and maximizing results
              </p>
            </div>
            <div className="boxs m-4" data-aos="zoom-out-up">
              <h3>
                <i className="bi bi-bar-chart-line-fill"></i> Variety and
                Flexibility
              </h3>
              <p>
                With a diverse range of classes you mix and match workouts
                tokeep your fitness routine fresh and exciting
              </p>
            </div>
          </div>
          <div className="d-flex flex-row align-items-center justify-content-center">
            <div className="boxs m-4" data-aos="zoom-out-up">
              <h3>
                <i className="bi bi-people-fill"></i> Supportive Community
              </h3>
              <p>
                Join our community where you will find
                encouragement,motivation,and lasting friendship.
              </p>
            </div>
            <div className="boxs m-4" data-aos="zoom-out-up">
              <h3>
                <i className="bi bi-graph-up-arrow"></i> Adaptable for All
                Levels
              </h3>
              <p>
                Wherther you're a beginner or an experienced athlete. Our
                classes can be trailored to meet your fitness needs.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Profile />
      </div>
    </Container>
  );
}

export default Main;
