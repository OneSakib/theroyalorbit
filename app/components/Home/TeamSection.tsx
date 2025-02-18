"use client";

import { useEffect } from "react";
import Aos from "aos";
import Image from "next/image";

// Define a type for team members
interface TeamMember {
    name: string;
    role: string;
    description: string;
    imgSrc: string;
    delay: number;
}

const teamMembers: TeamMember[] = [
    {
        name: "Ankush Tyagi",
        role: "Chief Executive Officer",
        description: "Explicabo voluptatem mollitia et repellat qui dolorum quasi",
        imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStrlh16-6p2ldijcv8yGQWHKwk598Qv8JSyg&s",
        delay: 100,
    },
    {
        name: "Sarah Jhonson",
        role: "Product Manager",
        description: "Aut maiores voluptates amet et quis praesentium qui senda para",
        imgSrc: "/assets/img/team/team-2.jpg",
        delay: 200,
    },
    {
        name: "William Anderson",
        role: "CTO",
        description: "Quisquam facilis cum velit laborum corrupti fuga rerum quia",
        imgSrc: "/assets/img/team/team-3.jpg",
        delay: 300,
    },
    {
        name: "Amanda Jepson",
        role: "Accountant",
        description: "Dolorum tempora officiis odit laborum officiis et et accusamus",
        imgSrc: "/assets/img/team/team-4.jpg",
        delay: 400,
    },
];

const TeamSection = () => {
    useEffect(() => {
        Aos.init({ duration: 600, easing: "ease-in-out", once: true });
    }, []);

    return (
        <section id="team" className="team section">
            <div className="container section-title" data-aos="fade-up">
                <h2>Team</h2>
                <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
            </div>

            <div className="container">
                <div className="row gy-4">
                    {teamMembers.map(({ name, role, description, imgSrc, delay }) => (
                        <div className="col-lg-6" data-aos="fade-up" data-aos-delay={delay} key={name}>
                            <div className="team-member d-flex align-items-start">
                                <div className="pic">
                                    <Image src={imgSrc} className="img-fluid" alt={name} width={500} height={500} />
                                </div>
                                <div className="member-info">
                                    <h4>{name}</h4>
                                    <span>{role}</span>
                                    <p>{description}</p>
                                    <div className="social">
                                        <a href="#"><i className="bi bi-twitter-x"></i></a>
                                        <a href="#"><i className="bi bi-facebook"></i></a>
                                        <a href="#"><i className="bi bi-instagram"></i></a>
                                        <a href="#"><i className="bi bi-linkedin"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TeamSection;
