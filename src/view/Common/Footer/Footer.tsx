// Footer.tsx
import './Footer.css';

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section">
                    <h3>About Us</h3>
                    <p>We are a company dedicated to providing excellent services to our customers.</p>
                </div>
                <div className="footer-section">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/services">Services</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h3>Contact Info</h3>
                    <p>Email: info@example.com</p>
                    <p>Phone: (123) 456-7890</p>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} MyApp. All rights reserved.</p>
            </div>
        </footer>
    );
};