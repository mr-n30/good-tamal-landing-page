// import { useState } from 'react'
import threadsIcon from '../assets/icons/threads.png'
import instagramIcon from '../assets/icons/ig.png'
import tiktokIcon from '../assets/icons/tiktok.png'

export default function Footer() {
    const currentYear = new Date().getFullYear()

    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        // TODO: Implement form submission logic
        // This will be submitted to a backend later
        // where the admin or employee can view the emails / orders collected
        // For now we open a modal or alert
        alert('Form submitted')
    }

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
                <form onSubmit={(e) => handleFormSubmit(e)}
                    className="footer-subscribe-email-form">
                    <input type="email" placeholder="Your email" />
                    <button type="submit">submit<i className="icon"></i></button>
                </form>
                <div className="footer-social-media-icons">
                    <img src={instagramIcon} className="footer-ig-icon" alt="Instagram" />
                    <img src={threadsIcon} className="footer-threads-icon" alt="Threads" />
                    <img src={tiktokIcon} className="footer-tiktok-icon" alt="TikTok" />
                </div>
            </div>

            <div className="copyright">
                <p>© {currentYear} Good Tamal. All rights reserved. Made with love and tradition.</p>
            </div>
        </footer>
    )
}