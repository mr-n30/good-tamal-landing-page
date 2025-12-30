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
            { days: "Monday-Friday", hours: "7:00 AM - 8:00 PM" },
            { days: "Saturday", hours: "8:00 AM - 9:00 PM" },
            { days: "Sunday", hours: "8:00 AM - 7:00 PM" },
        ]

    }

    const googleMapsSrc = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1622343.7341792837!2d-124.3264389038086!3d37.421980615353675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fba02425dad8f%3A0x6c296c66619367e0!2sGoogleplex!5e0!3m2!1sen!2sus!4v1765374816049!5m2!1sen!2sus`

    return (
        <section className="location">
            <div className="location-heading">
                <h1>Visit Us</h1>
                <p>Stop by and taste the tradition</p>
            </div>

            <article className="map">
                <iframe
                    src={googleMapsSrc}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="google-maps-iframe" />

            </article>

            <section className="location-address-and-hours">
                <article className="address styles-for-location-and-hours">
                    <div className="address-heading">
                        <div className="map-icon"></div>
                        <h2 className='address-location-heading'>Location</h2>
                    </div>
                    <p>{locationInfo.street}</p>
                    <p>{locationInfo.city} {locationInfo.locationState} {locationInfo.zip}</p>
                    <p>{locationInfo.phone}</p>
                </article>

                <article className="hours styles-for-location-and-hours">
                    <div className="hours-heading">
                        <div className="clock-icon"></div>
                        <h2 className='hours-heading'>Hours</h2>
                    </div>
                    {
                        locationInfo.hours.map((elem: any, index: number) => (
                            <div key={index} className="location-day-hour">
                                <div className="day-hour-aligner">
                                    <span>{elem.days}</span>
                                </div>
                                <div className="day-hour-aligner">
                                    <span>{elem.hours}</span>
                                </div>
                            </div>
                        ))
                    }
                </article>
            </section>
        </section>
    )
}
