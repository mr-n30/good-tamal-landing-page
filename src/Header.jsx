export default function Header() {
  /* HEADER / NAV */
  return (
  <header id="header">
    <nav className="navbar bg-body-tertiary border-bottom border-4 border-body navbar-expand-lg">
    <div className="container-fluid">
    <a className="navbar-brand" href="#home">
      <img loading="lazy" id="nav-logo" alt="Good Tamal" src="https://82940c743faebd0e4608.cdn6.editmysite.com/uploads/b/82940c743faebd0e4608c0db591273ea4b73003eb63321f283c2d000d7eac7ef/mina%20eb_1607232687.jpg?width=2400&optimize=medium"/>Good Tamal</a>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
    <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link" href="#home">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#order">
            Order
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#gallery">
            Gallery
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#contact">
            Contact
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#pricing">
            Pricing
          </a>
        </li>
      </ul>
    </div>
    </div>
    </nav>
  </header>
  )
}
