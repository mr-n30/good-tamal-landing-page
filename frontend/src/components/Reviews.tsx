interface Review {
    review: string
    name: string
    profilePhoto: string
    alt: string
}

const reviews: Review[] = [
    {
        review: "These are the most authentic tamales I've had outside of Mexico! The pork tamal reminds me of my childhood. Absolutely delicious!",
        name: "Maria Rodriguez",
        profilePhoto: "https://github.com/favicon.ico",
        alt: "Maria profile photo"
    },
    {
        review: "I'm obsessed with the mole tamal! The perfect blend of sweet and savory. The family who runs this place puts so much love into their food.",
        name: "James Chen",
        profilePhoto: "https://github.com/favicon.ico",
        alt: "James profile photo"
    },
    {
        review: "Fresh, handmade, and bursting with flavor. The vegetarian tamal is incredible! This is now my weekly tradition.",
        name: "Sofia Martinez",
        profilePhoto: "https://github.com/favicon.ico",
        alt: "Sofia profile photo"
    }
]

const Reviews = () => {
    return (
        <section className="review-section">
            <div className="review-section-heading">
                <h1>What Our Customers Say</h1>
                <p>Trusted by thousands of tamale lovers</p>
            </div>
            <section className="reviews">
                {
                    reviews.map((elem: Review, index: number) => {
                        return (
                            <article key={"review-" + index} className='review'>
                                <p className="user-review">"{elem.review}"</p>
                                <div className="photo-username-style">
                                    <img className="user-profile-photo" src={elem.profilePhoto} alt={elem.alt} />
                                    <p className="user-name">{elem.name}</p>
                                </div>
                            </article>
                        )
                    })
                }
            </section>
        </section>
    )
}
export default Reviews