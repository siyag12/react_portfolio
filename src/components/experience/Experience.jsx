import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";

export const Experience = () => {
    return (
        <section id={"experience"}>
            <h5>What Skills I Have</h5>
            <h2>My Experience</h2>

            <div className={"container experience__container"}>
                <div className={"experience__expertise"}>
                    <h3>Expertise Area</h3>
                    <div className={"experience__content"}>
                        <article className={"experience__details"}>
                            <BsPatchCheckFill className={"experience__details-icon"} />
                            <div>
                                <h4>Machine Learning</h4>
                                <small className={"text-light"}>Experienced</small>
                            </div>
                        </article>

                        <article className={"experience__details"}>
                            <BsPatchCheckFill className={"experience__details-icon"} />
                            <div>
                                <h4>Deep Learning</h4>
                                <small className={"text-light"}>Experienced</small>
                            </div>
                        </article>

                        <article className={"experience__details"}>
                            <BsPatchCheckFill className={"experience__details-icon"} />
                            <div>
                                <h4>Generative AI</h4>
                                <small className={"text-light"}>Intermediate</small>
                            </div>
                        </article>

                        <article className={"experience__details"}>
                            <BsPatchCheckFill className={"experience__details-icon"} />
                            <div>
                                <h4>Data Science</h4>
                                <small className={"text-light"}>Experienced</small>
                            </div>
                        </article>

                        <article className={"experience__details"}>
                            <BsPatchCheckFill className={"experience__details-icon"} />
                            <div>
                                <h4>OOPs</h4>
                                <small className={"text-light"}>Experienced</small>
                            </div>
                        </article>

                        <article className={"experience__details"}>
                            <BsPatchCheckFill className={"experience__details-icon"} />
                            <div>
                                <h4> DSA</h4>
                                <small className={"text-light"}>Intermediate</small>
                            </div>
                        </article>

                        <article className={"experience__details"}>
                            <BsPatchCheckFill className={"experience__details-icon"} />
                            <div>
                                <h4>DBMS</h4>
                                <small className={"text-light"}>Intermediate</small>
                            </div>
                        </article>
                    </div>
                </div>

                {/*END OF EXPERTISE AREA*/}

                <div className={"experience__tools"}>
                    <h3>Tools and Technologies</h3>
                    <div className={"experience__content"}>
                        <article className={"experience__details"}>
                            <BsPatchCheckFill className={"experience__details-icon"} />
                            <div>
                                <h4>PyTorch</h4>
                                <small className={"text-light"}>Experienced</small>
                            </div>
                        </article>

                        <article className={"experience__details"}>
                            <BsPatchCheckFill className={"experience__details-icon"} />
                            <div>
                                <h4>Keras & Tensorflow</h4>
                                <small className={"text-light"}>Experienced</small>
                            </div>
                        </article>

                        <article className={"experience__details"}>
                            <BsPatchCheckFill className={"experience__details-icon"} />
                            <div>
                                <h4>Numpy & Pandas</h4>
                                <small className={"text-light"}>Experienced</small>
                            </div>
                        </article>

                        <article className={"experience__details"}>
                            <BsPatchCheckFill className={"experience__details-icon"} />
                            <div>
                                <h4>Scikit-Learn</h4>
                                <small className={"text-light"}>Experienced</small>
                            </div>
                        </article>

                        <article className={"experience__details"}>
                            <BsPatchCheckFill className={"experience__details-icon"} />
                            <div>
                                <h4>NLTK</h4>
                                <small className={"text-light"}>Intermediate</small>
                            </div>
                        </article>

                        <article className={"experience__details"}>
                            <BsPatchCheckFill className={"experience__details-icon"} />
                            <div>
                                <h4>OpenCV</h4>
                                <small className={"text-light"}>Intermediate</small>
                            </div>
                        </article>

                        <article className={"experience__details"}>
                            <BsPatchCheckFill className={"experience__details-icon"} />
                            <div>
                                <h4>HuggingFace</h4>
                                <small className={"text-light"}>Intermediate</small>
                            </div>
                        </article>

                        <article className={"experience__details"}>
                            <BsPatchCheckFill className={"experience__details-icon"} />
                            <div>
                                <h4>Git & Github</h4>
                                <small className={"text-light"}>Intermediate</small>
                            </div>
                        </article>
                    </div>
                </div>

                {/*END OF TOOLS AND TECHNOLOGIES*/}
            </div>
        </section>
    );
};

export default Experience;
