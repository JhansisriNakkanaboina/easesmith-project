import React from 'react';
import './index.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                {/* Subscribe to Our Newsletter Section */}
                <div className="footer-section newsletter">
                    <h2>SUBSCRIBE TO OUR NEWSLETTER</h2>
                    <p>Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum quidem aut necessitatibus enim.</p>
                    <div className="subscribe-form">
                        <input type="email" placeholder="Enter Your Email Address" />
                    </div>
                    <div>
                        <button className="subscribeButton">Subscribe</button>
                    </div>
                </div>

                {/* About Us Section */}
                <div className="footer-section">
                    <h2>ABOUT US</h2>
                    <ul>
                        <li>Our Story</li>
                        <li>Blogs</li>
                        <li>Careers</li>
                        <li>Contact Us</li>
                        <li>Help & Support</li>
                    </ul>
                </div>

                {/* Our Services Section */}
                <div className="footer-section">
                    <h2>OUR SERVICES</h2>
                    <ul>
                        <li>Book Maali</li>
                        <li>Plant Day Care</li>
                        <li>Rent Plants</li>
                        <li>Plants & Pots</li>
                        <li>Gardening Tools</li>
                    </ul>
                </div>

                {/* Useful Links Section */}
                <div className="footer-section">
                    <h2>USEFUL LINKS</h2>
                    <ul>
                        <li>My Account</li>
                        <li>Orders & Returns</li>
                        <li>Track Order</li>
                        <li>Terms & Conditions</li>
                        <li>Privacy Policy</li>
                        <li>Return, Refund & Replacement Policy</li>
                    </ul>
                </div>

                {/* Get in Touch Section */}
                <div className="footer-section">
                    <h2>GET IN TOUCH</h2>
                    <p>Address: F-262, First Floor, Sushant Lok Phase-III, Sector-57, Gurgaon, Haryana, India 122003</p>
                    <p>Call: +919958287272</p>
                    <p>Email: care@chaperoneplants.com</p>
                </div>
            </div>

            <div className="footer-lower">
                <div className="footer-logo-description">
                    <h2>CHAPERONE</h2>
                    <p>Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum quidem aut necessitatibus enim ut internos accusantium a numquam autem ab rerum omnis...</p>
                </div>

                {/* Social Media Icons */}
                <div className="social-icons">
                    <h2>Follow us on</h2>
                    <div>
                        <a href="https://www.instagram.com/chaperoneplants/?utm_source=ig_web_button_share_sheet&igshid=ZDNlZDc0MzIxNw%3D%3D"><i className="fab fa-instagram"></i></a>
                        <a href="https://www.facebook.com/?_rdr"><i className="fab fa-facebook-f"></i></a>
                        <a href="https://www.youtube.com/"><i className="fab fa-youtube"></i></a>
                        <a href="https://www.linkedin.com/company/chaperone-plants/"><i className="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
            </div>

            {/* Horizontal Line and Copyright Text */}
            <hr />
            <p className="copyright">© 2023, chaperone.com All rights reserved.</p>
        </footer>
    );
};

export default Footer;
