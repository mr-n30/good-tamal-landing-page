import { useState } from 'react'

export default function DeliverFood(
    { openModal, setOpenModal }: {
        openModal: boolean,
        setOpenModal: React.Dispatch<React.SetStateAction<boolean>>
    }) {

    const form: string[] = [
        'email',
        'phone',
        'street',
        'city',
        'state',
        'zip',
        'instructions',
        'delivery-time'
    ]

    const cssOpenModal = openModal ? 'scale-100 opacity-100 z-50 ' : 'scale-95 opacity-0 z-[-1]'

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        alert('Order submitted! We will contact you soon.')
    }

    const [currentDate, setCurrentDate] = useState<string>(new Date().toString())

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCurrentDate(e.target.value)
    }

    const inputType = (elem: string) => {
        switch (elem) {
            case 'instructions':
                return <textarea
                            className='deliver-food-input'
                            id={elem}
                            name={elem}
                            placeholder='Any special instructions?'
                            maxLength={500}></textarea>
            case 'delivery-time':
                return <input className='deliver-food-input' id={elem} name={elem} type='time' value={currentDate} onChange={handleChange} />
            case 'email':
                return <input placeholder='Your email' className='deliver-food-input' id={elem} name={elem} type='email' required />
            case 'phone':
                return <input placeholder='1231231234'  className='deliver-food-input' id={elem} name={elem} type='tel' required maxLength={10} />
            default:
                return <input className='deliver-food-input' id={elem} name={elem} type='text' required maxLength={250} />
        }
    }

    return (
        <div className={`deliver-food-container ${cssOpenModal}`}>
            <form
                className="deliver-food-form"
                onSubmit={(e: React.FormEvent<HTMLFormElement>) => handleSubmit(e)}>
                {form.map((elem, index) => {
                    return (
                        <div key={elem + '-' + index} className='deliver-food-elem-container'>
                            <label className='deliver-food-label-element' htmlFor={elem}>{elem}</label>
                            {inputType(elem)}
                        </div>
                    )
                })}
                <button type="submit">Order Now</button>
                <button className="modal-close-button" onClick={() => setOpenModal(false)}>
                    Close
                </button>
                {/* TODO: Add input box for if they want to subscribe to SMS updates or email */}
            </form>
        </div>
    )
}