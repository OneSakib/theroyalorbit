'use client';

import Link from "next/link";
import { useEffect } from "react";

const Header = () => {
    useEffect(() => {
        // document.querySelectorAll(".navmenu .toggle-dropdown").forEach((navmenu) => {
        //     navmenu.addEventListener("click", function (e) {
        //         e.preventDefault();
        //         this.parentNode.classList.toggle("active");
        //         this.parentNode.nextElementSibling.classList.toggle("dropdown-active");
        //         e.stopImmediatePropagation();
        //     });
        // });
    }, [])
    return <header id="header" className="header d-flex align-items-center fixed-top">
        <div className="container-fluid container-xl position-relative d-flex align-items-center">

            <Link href="/" className="logo d-flex align-items-center me-auto">
                <h1 className="sitename">The Royal Orbit</h1>
            </Link>

            <nav id="navmenu" className="navmenu">
                <ul>
                    <li><Link href="#hero" className="active">Home</Link></li>
                    <li><Link href="#about">About</Link></li>
                    <li><Link href="#services">Services</Link></li>
                    <li><Link href="#portfolio">Portfolio</Link></li>
                    <li><Link href="#team">Team</Link></li>
                    <li><Link href="#pricing">Pricing</Link></li>
                    <li className="dropdown"><Link href="#"><span>Dropdown</span> <i className="bi bi-chevron-down toggle-dropdown"></i></Link>
                        <ul>
                            <li><Link href="#">Dropdown 1</Link></li>
                            <li className="dropdown"><Link href="#"><span>Deep Dropdown</span> <i className="bi bi-chevron-down toggle-dropdown"></i></Link>
                                <ul>
                                    <li><Link href="#">Deep Dropdown 1</Link></li>
                                    <li><Link href="#">Deep Dropdown 2</Link></li>
                                    <li><Link href="#">Deep Dropdown 3</Link></li>
                                    <li><Link href="#">Deep Dropdown 4</Link></li>
                                    <li><Link href="#">Deep Dropdown 5</Link></li>
                                </ul>
                            </li>
                            <li><Link href="#">Dropdown 2</Link></li>
                            <li><Link href="#">Dropdown 3</Link></li>
                            <li><Link href="#">Dropdown 4</Link></li>
                        </ul>
                    </li>
                    <li><Link href="#contact">Contact</Link></li>
                </ul>
                <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
            </nav>

            <Link className="btn-getstarted" href="#about">Get Started</Link>

        </div>
    </header>


}
export default Header;