"use client";

import { useEffect, useRef } from "react";
import AOS from "aos";
import { LayoutModes } from "isotope-layout";
import imagesLoaded from "imagesloaded";
import Image from "next/image";

const PortfolioSection: React.FC = () => {
    const portfolioRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        AOS.init({
            duration: 600,
            easing: "ease-in-out",
            once: true,
            mirror: false,
        });
        if (typeof window !== "undefined") {
            import("isotope-layout").then((module) => {
                const Isotope = module.default;
                const isotopeContainers = portfolioRef.current?.querySelectorAll(".isotope-layout");

                isotopeContainers?.forEach((isotopeItem) => {
                    const layout = isotopeItem.getAttribute("data-layout") as LayoutModes | undefined;
                    const filter = isotopeItem.getAttribute("data-default-filter") || "*";
                    const sort = isotopeItem.getAttribute("data-sort") || "original-order";

                    const container: HTMLElement | null = isotopeItem.querySelector(".isotope-container");

                    if (!container) return; // Prevent passing null to imagesLoaded

                    imagesLoaded(container, () => {
                        const initIsotope = new Isotope(container, {
                            itemSelector: ".isotope-item",
                            layoutMode: layout,
                            filter: filter,
                            sortBy: sort,
                        });

                        isotopeItem.querySelectorAll<HTMLLIElement>(".isotope-filters li").forEach((filterItem) => {
                            filterItem.addEventListener("click", () => {
                                isotopeItem.querySelector(".isotope-filters .filter-active")?.classList.remove("filter-active");
                                filterItem.classList.add("filter-active");
                                initIsotope.arrange({ filter: filterItem.getAttribute("data-filter")! });
                                AOS.refresh();
                            });
                        });
                    });
                });
            })
        }
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
    { title: "App 1", description: "Lorem ipsum, dolor sit", imgSrc: "/assets/img/image-2.jpg", filter: "filter-app", category: "app" },
    { title: "Product 1", description: "Lorem ipsum, dolor sit", imgSrc: "/assets/img/image-3.jpg", filter: "filter-product", category: "product" },
    { title: "Branding 1", description: "Lorem ipsum, dolor sit", imgSrc: "/assets/img/image-4.jpg", filter: "filter-branding", category: "branding" },
    { title: "App 2", description: "Lorem ipsum, dolor sit", imgSrc: "/assets/img/image-5.jpg", filter: "filter-app", category: "app" },
    { title: "Product 2", description: "Lorem ipsum, dolor sit", imgSrc: "/assets/img/image-6.jpg", filter: "filter-product", category: "product" },
    { title: "Branding 2", description: "Lorem ipsum, dolor sit", imgSrc: "/assets/img/image-7.jpg", filter: "filter-branding", category: "branding" },
    { title: "App 3", description: "Lorem ipsum, dolor sit", imgSrc: "/assets/img/image-8.jpg", filter: "filter-app", category: "app" },
    { title: "Product 3", description: "Lorem ipsum, dolor sit", imgSrc: "/assets/img/image-9.jpg", filter: "filter-product", category: "product" },
    { title: "Branding 3", description: "Lorem ipsum, dolor sit", imgSrc: "/assets/img/image-9.jpg", filter: "filter-branding", category: "branding" },
];

export default PortfolioSection;
