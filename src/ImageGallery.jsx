export default function ImageGallery() {
  /* GALLERY - TAMALES PRODUCT VIDEO */
  return(
    <div id="gallery-container" className="gallery-container border-bottom border-4">
      <h1 id="gallery"><a className="link-body-emphasis link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover" href="#gallery">Gallery</a></h1>
      <iframe
        id="gallery-video"
        src="https://www.youtube.com/embed/-ls7957fga8?si=fXUJnVDwXyJ8cAlu"
        title="YouTube video player"
        frameBorder={0}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
      <img
	src="https://deliastamales.com/wp-content/uploads/2017/03/delias-best-tamales-texas.jpg"
	alt="Images of Tamales on a plate"
	loading="lazy"
      />
      <img
	src="https://media.nbcchicago.com/2021/12/web-delicious-tamales-food-guy-12-16.jpg?quality=85&strip=all&resize=3400%2C675"
	alt="Images of Tamales on a plate"
	loading="lazy"
      />
      <img
	src="https://82940c743faebd0e4608.cdn6.editmysite.com/uploads/b/82940c743faebd0e4608c0db591273ea4b73003eb63321f283c2d000d7eac7ef/mina%20eb_1607232687.jpg?width=2400&optimize=medium"
	alt="Images of Tamales on a plate"
	loading="lazy"
      />
    </div>
  )
}
