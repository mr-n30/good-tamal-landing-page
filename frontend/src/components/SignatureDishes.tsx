const SignatureDishes = () => {
    const dishes = []
    for (let i = 0; i < 6; i++) {
        dishes.push(
            <section className="dish">
                <h2>Pork Tamal</h2>
                <span>$3.50</span>
                <p>Tender pork slow-cooked with red chili sauce, wrapped in fresh corn masa</p>
                <button>Add to order</button>
            </section>

        )
    }
    return (
        <div className="signature-dishes">
            <h1>Our Signature Tamales</h1>
            <p>Each tamal is handcrafted with love using authentic recipes and the finest ingredients</p>
            <section className="dish-list">
                {dishes}
            </section>
        </div>
    )
}

export default SignatureDishes