import React from "react";
import PageTitle from "../Components/PageTitle";
import Diagram from "../Images/diagram.png";
import { Image } from "react-bootstrap";

function AboutPage() {
  return (
    <div>
      <PageTitle pageName="About This Site" />
      <p>
        This page serves as an online portfolio for others to look at my
        projects as well as work experiences. This is actually my first full
        stack web application with the MERN stack. I am using it as a way to
        learn how to create a web app from start to deployment.
      </p>
      <p>
        Although it may look like a static website, the information on the
        projects and work experiences pages is actually being fetched through an
        API endpoint, which I created using Express.js and Node.js, from a
        MongoDB database. You can check out the{" "}
        <a
          style={{ color: "inherit" }}
          rel="noreferrer"
          target="_blank"
          href="https://musyaffaq-portfolio-api.vercel.app/"
        >
          API endpoint here
        </a>
        .
      </p>
      <p>
        Additionally, I have made it so that I can edit those data through the
        frontend. In order to do so, I have made it so that I can be
        authenticated (i.e. log in) and then add new projects or experiences
        through a form. That API endpoint is also protected through that
        authentication.
      </p>
      <p>
        For sure there are more things that can be done to make this website
        better, but this is good enough for now! Feel free to contact me if you
        see anything wrong with it.
      </p>
      <p>Here is a diagram to help visualise how the web app works:</p>
      <Image
        style={{
          width: "100%",
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
        }}
        src={Diagram}
        rounded
      />
    </div>
  );
}

export default AboutPage;
