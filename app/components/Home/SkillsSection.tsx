"use client";

import { useEffect, useRef } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

const SkillsSection = () => {
    const skillsRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        Aos.init({
            duration: 600,
            easing: "ease-in-out",
            once: true,
            mirror: false,
        });
    }, []);

    return (
        <section id="skills" className="skills section">
            <div className="container" data-aos="fade-up" data-aos-delay="100">
                <div className="row">
                    <div className="col-lg-6 d-flex align-items-center">
                        <Image src="/assets/img/image-2.jpg" className="img-fluid" alt="Skills" width={500} height={500} />
                    </div>

                    <div className="col-lg-6 pt-4 pt-lg-0 content">
                        <h3>Voluptatem dignissimos provident quasi corporis voluptas</h3>
                        <p className="fst-italic">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>

                        <div className="skills-content skills-animation" ref={skillsRef}>
                            {[
                                { skill: "HTML", value: 100 },
                                { skill: "CSS", value: 90 },
                                { skill: "JavaScript", value: 75 },
                                { skill: "Photoshop", value: 55 },
                            ].map(({ skill, value }) => (
                                <div className="progress" key={skill}>
                                    <span className="skill">
                                        <span>{skill}</span> <i className="val">{value}%</i>
                                    </span>
                                    <div className="progress-bar-wrap">
                                        <div
                                            className="progress-bar"
                                            role="progressbar"
                                            aria-valuenow={value}
                                            aria-valuemin={0}
                                            aria-valuemax={100}
                                        ></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;
