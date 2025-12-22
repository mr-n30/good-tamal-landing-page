import { useState } from 'react'
import LoginModal from './LoginModal'
import RegisterModal from './RegisterModal'

// TODO:
// Use React Router for navigation links?
// Use redux for cart state management?
const Nav = () => {
    const [showLogin, setShowLogin] = useState<boolean>(false)
    return (
        <nav>
            <ul className="nav-links">
                <li><a href="#menu">Menu</a></li>
                <li><a href="#checkout">Checkout</a></li>
                <li><a href="#" onClick={() => setShowLogin(true)}>Login</a></li>
                <li><img
                        src="https://www.google.com/favicon.ico"
                        alt="Cart icon"
                        onClick={() => console.log('Cart clicked')} /></li>
            </ul>
            {showLogin && <LoginModal showLogin={showLogin} setShowLogin={setShowLogin} />}
            <RegisterModal />
        </nav>
    )
}

export default Nav