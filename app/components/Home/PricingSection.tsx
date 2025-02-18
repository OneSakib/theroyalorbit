"use client";

import { useEffect } from "react";
import AOS from "aos";
const PricingSection = () => {
    useEffect(() => {
        AOS.init({
            duration: 600,
            easing: "ease-in-out",
            once: true,
            mirror: false,
        });
    }, [])
    return <section id="pricing" className="pricing section light-background">
        <div className="container section-title" data-aos="fade-up">
            <h2>Pricing</h2>
            <p>
                Here are a few lines you can use to display the room price at The Royal Orbit:
            </p>
        </div>

        <div className="container">
            <div className="row gy-4">
                <div className="col-lg-4" data-aos="zoom-in" data-aos-delay="200">
                    <div className="pricing-item featured">
                        <h3>Booking</h3>
                        <h4><sup>₹</sup>1200<span> / 24 Hour</span></h4>
                        <ul>
                            <li>
                                <i className="bi bi-check"></i>
                                <span>Experience Luxury at The Royal Orbit! 🏨✨</span>
                            </li>
                            <li>
                                <i className="bi bi-check"></i>
                                <span>Stay with us for just ₹1200 per night per room.</span>
                            </li>
                            <li>
                                <i className="bi bi-check"></i>
                                <span>Affordable Elegance at The Royal Orbit! 🌟</span>
                            </li>
                            <li>
                                <i className="bi bi-check"></i>
                                <span>Book your stay now at just ₹1200 per room per night.</span>
                            </li>
                            <li>
                                <i className="bi bi-check"></i>
                                <span>Unmatched Comfort, Unbeatable Price! 🛏️</span>
                            </li>
                            <li>
                                <i className="bi bi-check"></i>
                                <span>Enjoy a luxurious stay at The Royal Orbit for only ₹1200 per night.</span>
                            </li>
                        </ul>
                        <a href="#contact" className="buy-btn">Book Now</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
}
export default PricingSection;