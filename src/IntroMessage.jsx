export default function IntroMessage() {
  return(
    <div id="home" className="border-bottom border-4">
      <h1 className="intro-message">
	Welcome to, <a href="#home" className="link-body-emphasis link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover">GoodTamal!</a>
      </h1>
      <img
	id="intro-img"
	src="https://82940c743faebd0e4608.cdn6.editmysite.com/uploads/b/82940c743faebd0e4608c0db591273ea4b73003eb63321f283c2d000d7eac7ef/mina%20eb_1607232687.jpg?width=2400&optimize=medium"
	alt="Images of Tamales on a plate"
	loading="lazy"
      />
    </div>
  )
}
