const OurStory = () => {
    const ourStoryImage = "https://images.unsplash.com/photo-1667591861997-968ed6bf4335?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZXhpY2FuJTIwZm9vZCUyMHByZXBhcmF0aW9ufGVufDF8fHx8MTc2NDQ3NTYxMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    return (
        <section className="our-story">
            <div className="our-story-text">
                <div className="our-story-decoration-container">
                    <span className="our-story-decoration">Our Story</span>
                </div>
                <h1>Three Generations of Authentic Flavor</h1>
                <p>Good Tamal was born from our grandmother's kitchen in Oaxaca, where she spent decades perfecting the art of tamal-making. Her recipes, passed down through three generations, combine traditional techniques with the freshest ingredients.</p>
                <p>Every morning at 4 AM, we prepare fresh masa from scratch, carefully selecting our corn and grinding it using time-honored methods. Our fillings are slow-cooked for hours, infusing each tamal with deep, authentic flavors that transport you straight to Mexico.</p>
                <p>We believe in preserving cultural traditions while bringing the warmth of family cooking to our community. When you taste our tamales, you're experiencing a piece of our heritage.</p>
            </div>
            <img src={ourStoryImage} alt="Our Story - Three Generations of Authentic Flavor" />
        </section>
    )
}

export default OurStory