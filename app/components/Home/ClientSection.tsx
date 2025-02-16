'use client';
import { useEffect } from "react";
import AOS from "aos";
import Swiper from "swiper";
const ClientSection = () => {
    useEffect(() => {
        function aosInit() {
            AOS.init({
                duration: 600,
                easing: "ease-in-out",
                once: true,
                mirror: false,
            });
        }
        aosInit();
        function initSwiper() {
            new Swiper('.init-swiper', {
                "loop": true,
                "speed": 600,
                "autoplay": {
                    "delay": 5000
                },
                "slidesPerView": "auto",
                "pagination": {
                    "el": ".swiper-pagination",
                    "type": "bullets",
                    "clickable": true
                },
                "breakpoints": {
                    "320": {
                        "slidesPerView": 2,
                        "spaceBetween": 40
                    },
                    "480": {
                        "slidesPerView": 3,
                        "spaceBetween": 60
                    },
                    "640": {
                        "slidesPerView": 4,
                        "spaceBetween": 80
                    },
                    "992": {
                        "slidesPerView": 5,
                        "spaceBetween": 120
                    },
                    "1200": {
                        "slidesPerView": 6,
                        "spaceBetween": 120
                    }
                }
            });
        }

        initSwiper
    }, [])
    return <section id="clients" className="clients section light-background">
        <div className="container" data-aos="zoom-in">
            <div className="swiper init-swiper">
                <div className="swiper-wrapper align-items-center">
                    <div className="swiper-slide">
                        <img
                            src="assets/img/clients/client-1.png"
                            className="img-fluid"
                            alt=""
                        />
                    </div>
                    <div className="swiper-slide">
                        <img
                            src="assets/img/clients/client-2.png"
                            className="img-fluid"
                            alt=""
                        />
                    </div>
                    <div className="swiper-slide">
                        <img
                            src="assets/img/clients/client-3.png"
                            className="img-fluid"
                            alt=""
                        />
                    </div>
                    <div className="swiper-slide">
                        <img
                            src="assets/img/clients/client-4.png"
                            className="img-fluid"
                            alt=""
                        />
                    </div>
                    <div className="swiper-slide">
                        <img
                            src="assets/img/clients/client-5.png"
                            className="img-fluid"
                            alt=""
                        />
                    </div>
                    <div className="swiper-slide">
                        <img
                            src="assets/img/clients/client-6.png"
                            className="img-fluid"
                            alt=""
                        />
                    </div>
                    <div className="swiper-slide">
                        <img
                            src="assets/img/clients/client-7.png"
                            className="img-fluid"
                            alt=""
                        />
                    </div>
                    <div className="swiper-slide">
                        <img
                            src="assets/img/clients/client-8.png"
                            className="img-fluid"
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </div>
    </section>

}
export default ClientSection;