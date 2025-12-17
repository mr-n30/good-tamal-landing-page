import { useState } from 'react'
import DeliverFood from './DeliverFood'

const IntroductionLinkGroup = () => {
    const [openModal, setOpenModal] = useState(false)

    return (
        <div className="introduction-link-group">
            {/* <a className="introduction-link" onClick={() => setOpenModal(!openModal)}>Order Now</a> */}
            <a className="introduction-link" href="#menu">Order Now</a>
            <a className="introduction-link" href="#menu">View Menu</a>
            <DeliverFood openModal={openModal} setOpenModal={setOpenModal} />
        </div>
    )
}

export default IntroductionLinkGroup