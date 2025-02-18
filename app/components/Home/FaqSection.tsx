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
                    Here are some Frequently Asked Questions (FAQs) for The Royal Orbit:
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
        question: "What is the price for a room per night?",
        answer: "The price for a room at The Royal Orbit is ₹1200 per night.",
    },
    {
        question: "How can I book a room?",
        answer: "You can book a room by:📞 Calling us at + 91 - 8865832516 or + 91 - 8923246999📍 Visiting us at Chabara Complex, Near Parsvnath Plaza, Court Road, Saharanpur, India 247001",
    },
    {
        question: "What are the check-in and check-out timings?",
        answer: "Check-in: 12AM Check-out: 12PM",
    },
    {
        question: "Do you offer free Wi-Fi?",
        answer: "Yes! We provide free high-speed Wi-Fi for all our guests.",
    },
    {
        question: "Is breakfast included in the room price?",
        answer: "No, breakfast is not included in the room price. Guests can also enjoy delicious meals at our in-house restaurant.",
    },
    {
        question: "Do you provide parking facilities?",
        answer: "Yes, we offer free parking for our guests.",
    },
    {
        question: "Can I cancel or modify my booking?",
        answer: "Yes, you can cancel or modify your booking. Please contact us at least [X hours/days] in advance for changes or cancellations.",
    },
    {
        question: "Are pets allowed in the hotel?",
        answer: "No, Pets are not allowed here.",
    },
    {
        question: "Do you have banquet or event spaces?",
        answer: "Yes, we offer event spaces for meetings, parties, and conferences. Contact us at +91-8865832516 for more details.",
    },
    {
        question: "What safety measures do you have in place?",
        answer: "We follow strict hygiene and safety protocols, including regular sanitization, contactless check-in, and 24/7 security.",
    },
];

export default FaqSection;
