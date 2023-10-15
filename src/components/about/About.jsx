import React from "react";
import "./about.css";
import ME from "../../assets/me-about.jpg";
import { FaAward } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";

export const About = () => {
    return (
        <section id={"about"}>
            <h5>Get to Know</h5>
            <h2>About Me</h2>

            <div className={"container about__container"}>
                <div className={"about__me"}>
                    <div className={"about__me-image"}>
                        <img src={ME} alt={"About Image"} />
                    </div>
                </div>

                <div className={"about__content"}>
                    <div className={"about__cards"}>
                        <article className={"about__card"}>
                            <FaAward className={"about__icon"} />
                            <h5>Experience</h5>
                            <small>2+ Years</small>
                        </article>

                        <article className={"about__card"}>
                            <VscFolderLibrary className={"about__icon"} />
                            <h5>Projects</h5>
                            <small>10+ Completed</small>
                        </article>
                    </div>

                    <p>
                        Hi! I am Siya, a Computer Science and Artificial Intelligent Undergrad at IIIT Delhi. I was a SWE and STEP Intern and an
                        upcoming FTE @Google.
                        <br></br>I am an enthusiastic and chearful person. I am passionate about Machine Learning and have done numerous projects in
                        Computer Vision and NLP domains.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;
