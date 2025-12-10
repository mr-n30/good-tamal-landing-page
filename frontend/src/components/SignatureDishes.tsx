import type { JSX } from "react"

const SignatureDishes = () => {
    const dishImage: string = "https://images.unsplash.com/photo-1579630941962-435bc3e43df6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMG1leGljYW4lMjBmb29kfGVufDF8fHx8MTc2NDQ3NTYxMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    const dishes: JSX.Element[] = []
    for (let i = 0; i < 6; i++) {
        dishes.push(
            <article key={i} className="dish">
                <figure className="dish-image">
                    <img src={dishImage} alt="Signature dish demo photo for now. - mr-n30" />
                </figure>
                <div className="dish-info">
                    <div className="dish-pricing">
                        <h2>Pork Tamal</h2>
                        <p>$3.50</p>
                    </div>
                    <p>Tender pork slow-cooked with red chili sauce, wrapped in fresh corn masa</p>
                    <button>Add to order</button>
                </div>
            </article>

        )
    }
    return (
        <section className="signature-dishes">
            <h1>Our Signature Tamales</h1>
            <p>Each tamal is handcrafted with love using authentic recipes and the finest ingredients</p>
            <div className="dish-list">
                {dishes}
            </div>
        </section>
    )
}

export default SignatureDishes