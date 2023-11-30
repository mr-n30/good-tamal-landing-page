export default function Pricing() {
  /* PRICING/ORDER/QUANTITY */
  return(
    <div className="pricing-container border-bottom border-4">
      <h1 id="pricing" className="pricing-h1"><a className="link-body-emphasis link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover" href="#pricing">Pricing</a></h1>
        <article className="shadow shadow-lg">
	<h1><a className="link-body-emphasis link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover" href="#pricing">Half-Dozen</a></h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p>
            <span className="price">$7</span>
          </p>
        </article>
        <article className="shadow shadow-lg">
	<h1><a className="link-body-emphasis link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover" href="#pricing">One Dozen</a></h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p>
            <span className="price">$14</span>
          </p>
        </article>
        <article className="shadow shadow-lg">
	<h1><a className="link-body-emphasis link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover" href="#pricing">Custom Order</a></h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p>
            <span className="price">
              <a href="#contact" className="link-body-emphasis link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover">Send us an email</a>
            </span>
          </p>
        </article>
    </div>
  )
}
