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
        One feature I would like to work on next is to add authentication (i.e.
        log in and log out) so that I would be able to edit the projects and
        work experiences pages through the frontend.{" "}
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
