export default function Location() {
    interface Hours {
        days: string,
        hours: string
    }

    interface LocationInfo {
        fullAddress: string
        street: string
        city: string
        locationState: string
        zip: string
        phone: string
        hours: Hours[]
    }

    const locationInfo: LocationInfo = {
        fullAddress: "123 Tamal Street, Los Angeles, CA 90012",
        street: "123 Tamal Street",
        city: "Los Angeles",
        locationState: "CA",
        zip: "90012",
        phone: "(555) 123-4567",
        hours: [
            { days: "Mon-Fri", hours: "7 AM - 8 PM" },
            { days: "Saturday", hours: "8 AM - 9 PM" },
            { days: "Sunday", hours: "8 AM - 7 PM" },
        ]

    }

    return (
        <section className="location">
            <div className="location-heading">
                <h1>Visit Us</h1>
                <p>Stop by and taste the tradition</p>
            </div>

            <article className="map">
                <figure>
                    <img src="x" alt="map icon svg" />
                </figure>
                <span>{locationInfo.fullAddress}</span>

            </article>

            <section className="location-address-and-hours">
                <article className="address">

                </article>

                <article className="hours">
                    {
                        locationInfo.hours.map((elem) => (
                            <div className="location-day-hour">
                                <span>{elem.days}</span>
                                <span>{elem.hours}</span>
                            </div>
                        ))
                    }
                </article>
            </section>
        </section>
    )
}
