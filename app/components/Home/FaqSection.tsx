"use client";

import { useEffect, useRef } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const FaqSection: React.FC = () => {
    const faqRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        // Initialize AOS (Animate On Scroll)
        Aos.init({
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

        faqItems?.forEach((faqItem) => {
            faqItem.addEventListener("click", handleClick);
        });

        return () => {
            faqItems?.forEach((faqItem) => {
                faqItem.removeEventListener("click", handleClick);
            });
        };
    }, []);

    return (
        <section id="faq-2" className="faq-2 section light-background">
            <div className="container section-title" data-aos="fade-up">
                <h2>Frequently Asked Questions</h2>
                <p>
                    Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint
                    consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat
                    sit in iste officiis commodi quidem hic quas.
                </p>
            </div>

            <div className="container" ref={faqRef}>
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <div className="faq-container">
                            {faqData.map((faq, index) => (
                                <div
                                    key={index}
                                    className={`faq-item ${index === 0 ? "faq-active" : ""}`}
                                    data-aos="fade-up"
                                    data-aos-delay={200 + index * 100}
                                >
                                    <i className="faq-icon bi bi-question-circle"></i>
                                    <h3>{faq.question}</h3>
                                    <div className="faq-content">
                                        <p>{faq.answer}</p>
                                    </div>
                                    <i className="faq-toggle bi bi-chevron-right"></i>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

// FAQ Data for better maintainability
const faqData = [
    {
        question: "Non consectetur a erat nam at lectus urna duis?",
        answer: "Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.",
    },
    {
        question: "Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque?",
        answer: "Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.",
    },
    {
        question: "Dolor sit amet consectetur adipiscing elit pellentesque?",
        answer: "Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit.",
    },
    {
        question: "Ac odio tempor orci dapibus. Aliquam eleifend mi in nulla?",
        answer: "Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium.",
    },
    {
        question: "Tempus quam pellentesque nec nam aliquam sem et tortor consequat?",
        answer: "Molestie a iaculis at erat pellentesque adipiscing commodo. Dignissim suspendisse in est ante in. Nunc vel risus commodo viverra maecenas accumsan. Sit amet nisl suscipit adipiscing bibendum est.",
    },
];

export default FaqSection;
