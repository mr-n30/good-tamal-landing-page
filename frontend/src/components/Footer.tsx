export default function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer>
            <div className="footer-slogan">
                <h1>Good Tamal</h1>
                <p>Authentic tamales made fresh daily with love and tradition.</p>
            </div>

            <div className="quick-links">
                <h1>Quick Links</h1>
                <ul>
                    <li>Menu</li>
                    <li>About Us</li>
                    <li>Location</li>
                    <li>Catering</li>
                </ul>
            </div>

            <div className="footer-contact-info">
                <h1>Contact</h1>
                <p>(123) 456-7890</p>
                <p>hello@goodtamal.com</p>
                <p>123 Tamal St, Flavor Town, FT 45678</p>
            </div>

            <div className="subscribe-newsletter">
                <h1>Stay Connected</h1>
                <p>Subscribe for special offers and updates</p>
                <form>
                    <input type="email" placeholder="Your email" />
                    <button type="submit"><i className="icon"></i></button>
                </form>
                <div className="social-media-icons">
                    <i>Instagram</i>
                    <i>Threads</i>
                    <i>TikTok</i>
                </div>
            </div>

            <div className="copyright">
                <p>© {currentYear} Good Tamal. All rights reserved. Made with love and tradition.</p>
            </div>
        </footer>
    )
}