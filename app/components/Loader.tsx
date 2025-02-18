'use client';
import { useEffect } from "react";
import Link from "next/link";
const Loader = () => {
    useEffect(() => {
        const preloader = document.querySelector("#preloader");
        preloader?.remove();
    }, [])
    return <div>
        <Link
            href="#"
            id="scroll-top"
            className="scroll-top d-flex align-items-center justify-content-center"
        >
            <i className="bi bi-arrow-up-short">
            </i></Link>        <div id="preloader"></div>
    </div>
}
export default Loader;