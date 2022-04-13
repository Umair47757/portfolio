import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import black_bear from "../../Assets/Projects/black_bear.png";
import E_com from "../../Assets/Projects/e_commerce.png";
import todo from "../../Assets/Projects/todo.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={black_bear}
              isBlog={false}
              title="Black Bear"
              description="Its a Mern stack project which also support HTML CSS and multiple other liabraries.Black Bear works with clients to identify, procure and execute new energy projects. We are vendor agnostic, equipped with a proprietary online platform, and guided by decades of experience."
              link="https://blackbearenergy.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={E_com}
              isBlog={false}
              title="E Commerce Store"
              description="My personal E Commerce Store build with MERN and Sass which takes the content from makdown files and renders it using React. For backend I have use Node Express and Mongo.It also support cart feature where you can add items and checkout these any time you need to.
              
              Developing..."
              link="https://github.com/anaspucit2015/e_commerce"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todo}
              isBlog={false}
              title="Task Tracker"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              link="https://github.com/soumyajit4419/Editor.io"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
