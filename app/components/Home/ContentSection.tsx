'use client';
import Aos from "aos";
import { useEffect } from "react";
const ContentSection = () => {
    useEffect(() => {
        function aosInit() {
            Aos.init({
                duration: 600,
                easing: "ease-in-out",
                once: true,
                mirror: false,
            });
        }
        aosInit();
    }, [])
    return <section id="contact" className="contact section">
        <div className="container section-title" data-aos="fade-up">
            <h2>Contact</h2>
            <p>
                Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
                consectetur velit
            </p>
        </div>

        <div className="container" data-aos="fade-up" data-aos-delay="100">
            <div className="row gy-4">
                <div className="col-lg-5">
                    <div className="info-wrap">
                        <div
                            className="info-item d-flex"
                            data-aos="fade-up"
                            data-aos-delay="200"
                        >
                            <i className="bi bi-geo-alt flex-shrink-0"></i>
                            <div>
                                <h3>Address</h3>
                                <p>Chabara Complex, Near Parsvnath Plaza, Court Road</p>
                                <p>Saharanpur, India  247001</p>
                            </div>
                        </div>

                        <div
                            className="info-item d-flex"
                            data-aos="fade-up"
                            data-aos-delay="300"
                        >
                            <i className="bi bi-telephone flex-shrink-0"></i>
                            <div>
                                <h3>Call Us</h3>
                                <p><span>+91-8865832516</span> <span>+91-8923246999</span></p>
                            </div>
                        </div>

                        <div
                            className="info-item d-flex"
                            data-aos="fade-up"
                            data-aos-delay="400"
                        >
                            <i className="bi bi-envelope flex-shrink-0"></i>
                            <div>
                                <h3>Email Us</h3>
                                <p>info@example.com</p>
                            </div>
                        </div>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.8617837222064!2d77.54439867500693!3d29.95465402282028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390eeb8e24c40287%3A0x55e62d65f5cbe873!2sThe%20Royal%20Orbit!5e0!3m2!1sen!2sin!4v1739694290417!5m2!1sen!2sin" style={{ border: 0, width: '100%', height: '270px' }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>

                <div className="col-lg-7">
                    <form
                        action="forms/contact.php"
                        method="post"
                        className="php-email-form"
                        data-aos="fade-up"
                        data-aos-delay="200"
                    >
                        <div className="row gy-4">
                            <div className="col-md-6">
                                <label htmlFor="name-field" className="pb-2">Your Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name-field"
                                    className="form-control"
                                    required
                                />
                            </div>

                            <div className="col-md-6">
                                <label htmlFor="email-field" className="pb-2">Your Email</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    name="email"
                                    id="email-field"
                                    required
                                />
                            </div>

                            <div className="col-md-12">
                                <label htmlFor="subject-field" className="pb-2">Subject</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="subject"
                                    id="subject-field"
                                    required
                                />
                            </div>

                            <div className="col-md-12">
                                <label htmlFor="message-field" className="pb-2">Message</label>
                                <textarea
                                    className="form-control"
                                    name="message"
                                    rows={10}
                                    id="message-field"
                                    required
                                ></textarea>
                            </div>

                            <div className="col-md-12 text-center">
                                <div className="loading">Loading</div>
                                <div className="error-message"></div>
                                <div className="sent-message">
                                    Your message has been sent. Thank you!
                                </div>

                                <button type="submit">Send Message</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
}
export default ContentSection;