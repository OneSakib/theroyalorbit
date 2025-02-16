'use client';
import Aos from "aos";
import { useEffect } from "react";
import Image from "next/image";
const CallToActionSection = () => {
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
    return <section
        id="call-to-action"
        className="call-to-action section dark-background"
    >
        <Image src="/assets/img/cta-bg.jpg" fill alt="sdgdfg" />

        <div className="container">
            <div className="row" data-aos="zoom-in" data-aos-delay="100">
                <div className="col-xl-9 text-center text-xl-start">
                    <h3>Call To Action</h3>
                    <p>
                        Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia deserunt
                        mollit anim id est laborum.
                    </p>
                </div>
                <div className="col-xl-3 cta-btn-container text-center">
                    <a className="cta-btn align-middle" href="#">Call To Action</a>
                </div>
            </div>
        </div>
    </section>
}
export default CallToActionSection;