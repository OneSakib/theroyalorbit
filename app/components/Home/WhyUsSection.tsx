"use client";

import { useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

const WhyUsSection = () => {
    const faqRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        // Initialize AOS
        AOS.init({
            duration: 600,
            easing: "ease-in-out",
            once: true,
            mirror: false,
        });

        // FAQ Toggle Functionality
        const faqItems = faqRef.current?.querySelectorAll<HTMLElement>(".faq-item h3, .faq-item .faq-toggle");

        const handleClick = (event: Event) => {
            const target = event.currentTarget as HTMLElement;
            target.parentElement?.classList.toggle("faq-active");
        };

        faqItems?.forEach((faqItem) => faqItem.addEventListener("click", handleClick));

        return () => {
            faqItems?.forEach((faqItem) => faqItem.removeEventListener("click", handleClick));
        };
    }, []);

    return (
        <section id="why-us" className="section why-us light-background" data-builder="section">
            <div className="container-fluid" ref={faqRef}>
                <div className="row gy-4">
                    {/* Content Section */}
                    <div className="col-lg-7 d-flex flex-column justify-content-center order-2 order-lg-1">
                        <div className="content px-xl-5" data-aos="fade-up" data-aos-delay="100">
                            <h3>
                                <span>Eum ipsam laborum deleniti </span>
                                <strong>velit pariatur architecto aut nihil</strong>
                            </h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit
                            </p>
                        </div>

                        {/* FAQ Section */}
                        <div className="faq-container px-xl-5" data-aos="fade-up" data-aos-delay="200">
                            {[
                                {
                                    number: "01",
                                    question: "Non consectetur a erat nam at lectus urna duis?",
                                    answer: "Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida.",
                                },
                                {
                                    number: "02",
                                    question: "Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque?",
                                    answer: "Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices.",
                                },
                                {
                                    number: "03",
                                    question: "Dolor sit amet consectetur adipiscing elit pellentesque?",
                                    answer: "Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim.",
                                },
                            ].map(({ number, question, answer }, index) => (
                                <div key={index} className="faq-item">
                                    <h3>
                                        <span>{number}</span> {question}
                                    </h3>
                                    <div className="faq-content">
                                        <p>{answer}</p>
                                    </div>
                                    <i className="faq-toggle bi bi-chevron-right"></i>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Image Section */}
                    <div className="col-lg-5 order-1 order-lg-2 why-us-img">
                        <Image
                            src="/assets/img/why-us.png"
                            className="img-fluid"
                            alt="Why Us"
                            width={500}
                            height={500}
                            data-aos="zoom-in"
                            data-aos-delay="100"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyUsSection;
