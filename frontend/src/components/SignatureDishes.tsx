import type { JSX } from "react"
import { useEffect, useState } from "react"
import axios from "axios"

interface dish {
    name: string
    price: number
    description: string
    imageUrl: string
    imageAlt: string
}

const SignatureDishes = () => {
    const dishes: JSX.Element[] = []
    const [items, setItems] = useState<Array<dish>>([])

    useEffect(() => {
        const fetchDishes = async () => {
            try {
                const response = await axios.get('http://localhost:1337/api/menu')
                setItems(response.data)
            }

            catch (e) {
                console.error('Error fetching menu items:', e)
            }
        }

        fetchDishes()
    }, [])

    items.map((item, i) => {
        dishes.push(
            <article key={i} className="dish">
                <figure className="dish-image">
                    <img src={item.imageUrl} alt={item.imageAlt} />
                </figure>
                <div className="dish-info">
                    <div className="dish-pricing">
                        <h2>{item.name}</h2>
                        <p>${item.price.toFixed(2)}</p>
                    </div>
                    <p>{item.description}</p>
                    <button>Add to order</button>
                </div>
            </article>

        )
    })

    return (
        <section className="signature-dishes">
            <div className='dish-heading-group'>
                <h1 id="menu">Our Signature Tamales</h1>
                <p>Each tamal is handcrafted with love using authentic recipes and the finest ingredients</p>
            </div>
            <div className="dish-list">
                {dishes}
            </div>
        </section>
    )
}

export default SignatureDishes