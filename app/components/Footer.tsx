import Link from "next/link";
const Footer = () => {
    return (
        <footer id="footer" className="footer">
            <div className="footer-newsletter">
                <div className="container">
                    <div className="row justify-content-center text-center">
                        <div className="col-lg-6">
                            <h4>Join Our Newsletter</h4>
                            <p>Subscribe to our newsletter and receive the latest news about our products and services!</p>
                            <form action="forms/newsletter.php" method="post" className="php-email-form">
                                <div className="newsletter-form"><input type="email" name="email" /><input type="submit" value="Subscribe" /></div>
                                <div className="loading">Loading</div>
                                <div className="error-message"></div>
                                <div className="sent-message">Your subscription request has been sent. Thank you!</div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container footer-top">
                <div className="row gy-4">
                    <div className="col-lg-4 col-md-6 footer-about">
                        <Link href="index.html" className="d-flex align-items-center">
                            <span className="sitename">The Royal Orbit</span>
                        </Link>
                        <div className="footer-contact pt-3">
                            <p>Chabara Complex, Near Parsvnath Plaza, Court Road</p>
                            <p>Saharanpur, India  247001</p>
                            <p className="mt-3"><strong>Phone:</strong> <span>+91-8865832516</span> <span>+91-8923246999</span></p>
                            <p><strong>Email:</strong> <span>info@example.com</span></p>
                        </div>
                    </div>

                    <div className="col-lg-2 col-md-3 footer-links">
                        <h4>Useful Links</h4>
                        <ul>
                            <li><i className="bi bi-chevron-right"></i> <Link href="#">Home</Link></li>
                            <li><i className="bi bi-chevron-right"></i> <Link href="#">About us</Link></li>
                            <li><i className="bi bi-chevron-right"></i> <Link href="#">Services</Link></li>
                            <li><i className="bi bi-chevron-right"></i> <Link href="#">Terms of service</Link></li>
                        </ul>
                    </div>

                    <div className="col-lg-2 col-md-3 footer-links">
                        <h4>Our Services</h4>
                        <ul>
                            <li><i className="bi bi-chevron-right"></i> <Link href="#">Web Design</Link></li>
                            <li><i className="bi bi-chevron-right"></i> <Link href="#">Web Development</Link></li>
                            <li><i className="bi bi-chevron-right"></i> <Link href="#">Product Management</Link></li>
                            <li><i className="bi bi-chevron-right"></i> <Link href="#">Marketing</Link></li>
                        </ul>
                    </div>

                    <div className="col-lg-4 col-md-12">
                        <h4>Follow Us</h4>
                        <p>Cras fermentum odio eu feugiat lide par naso tierra videa magna derita valies</p>
                        <div className="social-links d-flex">
                            <Link href=""><i className="bi bi-twitter-x"></i></Link>
                            <Link href=""><i className="bi bi-facebook"></i></Link>
                            <Link href=""><i className="bi bi-instagram"></i></Link>
                            <Link href=""><i className="bi bi-linkedin"></i></Link>
                        </div>
                    </div>

                </div>
            </div>

            <div className="container copyright text-center mt-4">
                <p>© <span>Copyright</span> <strong className="px-1 sitename">The Royal Orbit</strong> <span>All Rights Reserved</span></p>
                <div className="credits">
                    Designed by <Link href="https://github.com/OneSakib/">Sakib Malik</Link>
                </div>
            </div>

        </footer>
    )
}
export default Footer;