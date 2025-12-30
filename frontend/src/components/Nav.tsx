import { useState } from 'react'
import LoginModal from './LoginModal'
import RegisterModal from './RegisterModal'
import logo from '../assets/icons/tamal.png'
export type AuthModal = 'login' | 'register' | null

// TODO:
// Use React Router for navigation links?
// Use redux for cart state management?
const Nav = () => {
    const [handleModal, setHandleModal] = useState<AuthModal>(null)

    return (
        <nav>
            <div className='nav-logo-container'>
                <img src={logo} alt="Good Tamal Logo" className='nav-logo' />
                <h1 className='nav-title'>Good Tamal</h1>
            </div>
            <ul className="nav-links">
                <li><a href="#menu">Menu</a></li>
                <li><a href="#checkout">Checkout</a></li>
                <li><a href="#" onClick={() => setHandleModal('login')}>Login</a></li>
                <li><img
                    src={logo}
                    alt="Cart icon"
                    className='company-logo'
                    onClick={() => console.log('Cart clicked')} /></li>
            </ul>
            {(handleModal === 'login') && <LoginModal setHandleModal={setHandleModal} />}
            {(handleModal === 'register') && <RegisterModal setHandleModal={setHandleModal} />}
        </nav>
    )
}

export default Nav
