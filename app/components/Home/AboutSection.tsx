"use client";

import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const AboutSection: React.FC = () => {
    useEffect(() => {
        Aos.init({
            duration: 600,
            easing: "ease-in-out",
            once: true,
            mirror: false,
        });
    }, []);

    return (
        <section id="about" className="about section">
            <div className="container section-title" data-aos="fade-up">
                <h2>About Us</h2>
            </div>

            <div className="container">
                <div className="row gy-4">
                    <div
                        className="col-lg-6 content"
                        data-aos="fade-up"
                        data-aos-delay="100"
                    >
                        <p>Welcome to The Royal Orbit – Where Comfort Meets Luxury! 🌟</p>
                        <p>
                            Located in the heart of Saharanpur, The Royal Orbit offers a
                            perfect blend of elegance, comfort, and affordability. Whether
                            you&apos;re traveling for business or leisure, our well-furnished
                            rooms, top-notch amenities, and warm hospitality ensure a
                            memorable stay.
                        </p>
                        <ul>
                            {[
                                "Spacious & Comfortable Rooms.",
                                "Affordable Rates – Just ₹1200 per night.",
                                "Free Wi-Fi & Parking.",
                                "24/7 Customer Support.",
                                "Convenient Location – Chabara Complex, Near Parsvnath Plaza, Court Road, Saharanpur, India 247001.",
                            ].map((item, index) => (
                                <li key={index}>
                                    <i className="bi bi-check2-circle"></i>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
                        <p>📞 Call us now to book your stay!</p>
                        <span>+91-8865832516 | +91-8923246999</span>
                        <p>Experience hospitality at its finest – The Royal Orbit awaits you! ✨🏨</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
