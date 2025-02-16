'use client';

import { useEffect } from "react";

const Header = () => {
    useEffect(() => {
        document.querySelectorAll(".navmenu .toggle-dropdown").forEach((navmenu) => {
            navmenu.addEventListener("click", function (e) {
                e.preventDefault();
                this.parentNode.classList.toggle("active");
                this.parentNode.nextElementSibling.classList.toggle("dropdown-active");
                e.stopImmediatePropagation();
            });
        });
    }, [])
    return <header id="header" className="header d-flex align-items-center fixed-top">
        <div className="container-fluid container-xl position-relative d-flex align-items-center">

            <a href="/" className="logo d-flex align-items-center me-auto">
                <h1 className="sitename">The Royal Orbit</h1>
            </a>

            <nav id="navmenu" className="navmenu">
                <ul>
                    <li><a href="#hero" className="active">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#portfolio">Portfolio</a></li>
                    <li><a href="#team">Team</a></li>
                    <li><a href="#pricing">Pricing</a></li>
                    <li className="dropdown"><a href="#"><span>Dropdown</span> <i className="bi bi-chevron-down toggle-dropdown"></i></a>
                        <ul>
                            <li><a href="#">Dropdown 1</a></li>
                            <li className="dropdown"><a href="#"><span>Deep Dropdown</span> <i className="bi bi-chevron-down toggle-dropdown"></i></a>
                                <ul>
                                    <li><a href="#">Deep Dropdown 1</a></li>
                                    <li><a href="#">Deep Dropdown 2</a></li>
                                    <li><a href="#">Deep Dropdown 3</a></li>
                                    <li><a href="#">Deep Dropdown 4</a></li>
                                    <li><a href="#">Deep Dropdown 5</a></li>
                                </ul>
                            </li>
                            <li><a href="#">Dropdown 2</a></li>
                            <li><a href="#">Dropdown 3</a></li>
                            <li><a href="#">Dropdown 4</a></li>
                        </ul>
                    </li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
                <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
            </nav>

            <a className="btn-getstarted" href="#about">Get Started</a>

        </div>
    </header>


}
export default Header;