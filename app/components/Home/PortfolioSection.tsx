"use client";

import { useEffect, useRef } from "react";
import AOS from "aos";
import Image from "next/image";

const PortfolioSection: React.FC = () => {
    const portfolioRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (typeof window === "undefined") return; // Ensure code runs only on the client

        import("isotope-layout").then((IsotopeModule) => {
            const Isotope = IsotopeModule.default; // Get the Isotope constructor

            AOS.init({
                duration: 600,
                easing: "ease-in-out",
                once: true,
                mirror: false,
            });

            const portfolioContainer = portfolioRef.current;
            if (portfolioContainer) {
                new Isotope(portfolioContainer, {
                    itemSelector: ".portfolio-item",
                    layoutMode: "fitRows",
                });
            }
        });

    }, []);

    return (
        <section id="portfolio" className="portfolio section" ref={portfolioRef}>
            <div className="container section-title" data-aos="fade-up">
                <h2>Portfolio</h2>
                <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
            </div>

            <div className="container">
                <div className="isotope-layout" data-default-filter="*" data-layout="masonry" data-sort="original-order">
                    <ul className="portfolio-filters isotope-filters" data-aos="fade-up" data-aos-delay="100">
                        <li data-filter="*" className="filter-active">All</li>
                        <li data-filter=".filter-app">App</li>
                        <li data-filter=".filter-product">Card</li>
                        <li data-filter=".filter-branding">Web</li>
                    </ul>

                    <div className="row gy-4 isotope-container" data-aos="fade-up" data-aos-delay="200">
                        {portfolioItems.map((item, index) => (
                            <div key={index} className={`col-lg-4 col-md-6 portfolio-item isotope-item ${item.filter}`}>
                                <Image src={item.imgSrc} className="img-fluid" alt={item.title} width={500} height={500} />
                                <div className="portfolio-info">
                                    <h4>{item.title}</h4>
                                    <p>{item.description}</p>
                                    <a href={item.imgSrc} title={item.title} data-gallery={`portfolio-gallery-${item.category}`} className="glightbox preview-link">
                                        <i className="bi bi-zoom-in"></i>
                                    </a>
                                    <a href="portfolio-details.html" title="More Details" className="details-link">
                                        <i className="bi bi-link-45deg"></i>
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

const portfolioItems = [
    { title: "App 1", description: "Lorem ipsum, dolor sit", imgSrc: "/assets/img/masonry-portfolio/masonry-portfolio-1.jpg", filter: "filter-app", category: "app" },
    { title: "Product 1", description: "Lorem ipsum, dolor sit", imgSrc: "/assets/img/masonry-portfolio/masonry-portfolio-2.jpg", filter: "filter-product", category: "product" },
    { title: "Branding 1", description: "Lorem ipsum, dolor sit", imgSrc: "/assets/img/masonry-portfolio/masonry-portfolio-3.jpg", filter: "filter-branding", category: "branding" },
    { title: "App 2", description: "Lorem ipsum, dolor sit", imgSrc: "/assets/img/masonry-portfolio/masonry-portfolio-4.jpg", filter: "filter-app", category: "app" },
    { title: "Product 2", description: "Lorem ipsum, dolor sit", imgSrc: "/assets/img/masonry-portfolio/masonry-portfolio-5.jpg", filter: "filter-product", category: "product" },
    { title: "Branding 2", description: "Lorem ipsum, dolor sit", imgSrc: "/assets/img/masonry-portfolio/masonry-portfolio-6.jpg", filter: "filter-branding", category: "branding" },
    { title: "App 3", description: "Lorem ipsum, dolor sit", imgSrc: "/assets/img/masonry-portfolio/masonry-portfolio-7.jpg", filter: "filter-app", category: "app" },
    { title: "Product 3", description: "Lorem ipsum, dolor sit", imgSrc: "/assets/img/masonry-portfolio/masonry-portfolio-8.jpg", filter: "filter-product", category: "product" },
    { title: "Branding 3", description: "Lorem ipsum, dolor sit", imgSrc: "/assets/img/masonry-portfolio/masonry-portfolio-9.jpg", filter: "filter-branding", category: "branding" },
];

export default PortfolioSection;
