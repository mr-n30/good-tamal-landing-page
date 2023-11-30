import Header from './Header.jsx'
import IntroMessage from './IntroMessage.jsx'
import ImageGallery from './ImageGallery.jsx'
import SignUpForm from './SignUpForm.jsx'
import Pricing from './Pricing.jsx'

function App() {
  return (
    <div className="main-container bg-light bg-gradient">
      <Header/>
      <IntroMessage/>
      <Pricing/>
      <ImageGallery/>
      <SignUpForm/>
      {/* CONTACT INFO */}
      <footer className="bg-body-secondary" id="contact">
	<div className="footer-child-container">
	<p>Example Company Socials:</p>
	<p>Email us at: goodtamal@example.com</p>
	<p>Subscribe to us on YouTube: @Example</p>
	</div>
	<div className="footer-child-container">
	<p>Author and Creator:</p>
	<p>Created by <a href="https://github.com/mr-n30">mr-n30</a></p>
	<p>Source code on <a href="https://github.com/mr-n30/good-tamal-landing-page">GitHub</a></p>
	</div>
	<div className="footer-child-container">
	<p>Copyright:</p>
	<p>&copy; <a href="https://github.com/mr-n30">GoodTamal</a></p>
	<p>&copy; Follow me on <a href="https://github.com/mr-n30">GitHub - mr-n30</a></p>
	</div>
      </footer>
  </div>
  )
}

export default App
