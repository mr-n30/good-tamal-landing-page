export default function SignupForm() {
  /* USEr SIGNUP FORM */
  return(
  <div className="signup-main-container">
    <h1 id="order" className="order-permalink"><a className="link-body-emphasis link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover" href="#order">Order</a></h1>
  {/* TODO: Add more <input> elements e.g phone number, address, etc.*/}
  <form
    id="form"
    action="https://www.freecodecamp.com/email-submit"
    method="post"
    className="rounded signup-container border border-4 shadow shadow-lg"
    >
      <p>Enter your email to get started with your order</p>
      <div className="link-img-container">
      <a href="#order" className="link-body-emphasis link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover">
	Good Tamal
      </a>
      <img
      id="contact-form-logo"
      loading="lazy"
      alt="Good Tamal"
      src="https://82940c743faebd0e4608.cdn6.editmysite.com/uploads/b/82940c743faebd0e4608c0db591273ea4b73003eb63321f283c2d000d7eac7ef/mina%20eb_1607232687.jpg?width=2400&optimize=medium"
      />
      </div>
      <input
      name="email"
      type="email"
      placeholder="goodtamal@example.com"
      required
      />
      <button className="btn btn-lg btn-dark">Start Order</button>
  </form>
  </div>
  )
}
