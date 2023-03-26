import { Col, Container, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assests/imgs/header-img.svg";
import myPhoto from "../assests/imgs/me.jpg";
import "animate.css";
import TrackVisibility from "react-on-screen";
export const Banner = () => {
  const toRotate = [
    "Web Developer",
    "FrontEnd Developer",
    "React JS Developer",
  ];
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;
  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);
    return () => {
      clearInterval(ticker);
    };
  }, [text]);
  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);
    setText(updatedText);
    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }
    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <span className="tagline">Welcome to my portifolio</span>
                  <h1 className="">
                    {"Hi I`m "}
                    <span className="wrap">{text}</span>
                  </h1>
                  <p>
                    Hello, I am a young man who always strives to find ways to
                    challenge myself and develop my skills.
                  </p>
                  <button className="" onClick={() => console.log("connect")}>
                    Let`s connect
                    <ArrowRightCircle />
                  </button>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt="Header img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};