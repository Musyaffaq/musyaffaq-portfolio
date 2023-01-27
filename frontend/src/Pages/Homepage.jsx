import { Container, Row, Col, Image } from "react-bootstrap";
import { TypeAnimation } from "react-type-animation";
import ProfilePic from "../Images/profile-pic.jpg";

function Homepage() {
  return (
    <Container style={{ marginTop: "2em" }}>
      <Row>
        <Col sm={6} className="mb-4">
          <div style={{ textAlign: "center", marginTop: "2em" }}>
            <Image style={{ width: "50%" }} src={ProfilePic} rounded />
          </div>
        </Col>
        <Col sm={6}>
          <TypeAnimation
            sequence={[
              "I am Musyaffaq",
              2000,
              "I am from SMU",
              2000,
              "I am a Computing & Law student",
              2000,
            ]}
            wrapper="div"
            cursor={true}
            repeat={Infinity}
            style={{ fontSize: "2em" }}
          />
          <br />
          <p className="homepage">
            Hello! I am Musyaffaq, or Mush for short. I am currently a Year 2
            Computing & Law student at the Singapore Management University.
          </p>
          <p className="homepage">
            I am currently interested in Software Development and Data Science.
          </p>
          <p className="homepage">
            In my free time, I love to watch Formula One and also{" "}
            <a
              style={{ color: "inherit" }}
              href="http://instagram.com/mush.films"
              rel="noreferrer"
              target="_blank"
            >
              take film pictures
            </a>{" "}
            with my Yashica AF-J3 film camera.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default Homepage;
