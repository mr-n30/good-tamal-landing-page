import { useState } from 'react'

export default function RegisterModal() {
    interface formData {
        [key: string]: string
    }
    const [openModal, setOpenModal] = useState<boolean>(false)
    const [formValue, setFormValue] = useState<formData>()
    
    const handleInput = (e: React.InputEvent<HTMLInputElement>) => {
        e.preventDefault()
        const { name, value } = e.currentTarget
        setFormValue({ ...formValue, [name]: value })
    }

    const registerForm = (
        <form className='register-form'>
            <h2>Create an account</h2>
            <div className='register-form-username-container register-form-div'>
                <label htmlFor='Email'>Email:</label>
                <input
                    onChange={(e: any) => handleInput(e)}
                    value={formValue?.email || ''}
                    type='email'
                    id='username'
                    name='email'
                    required />
            </div>
            <div className='register-form-email-container register-form-div'>
                <label htmlFor='username'>Username:</label>
                <input
                    onChange={(e: any) => handleInput(e)}
                    value={formValue?.username || ''}
                    type='text'
                    id='username'
                    name='username'
                    required />
            </div>
            <div className='register-form-password-container register-form-div'>
                <label htmlFor='password'>Password:</label>
                <input
                    onChange={(e: any) => handleInput(e)}
                    value={formValue?.password || ''}
                    type='password'
                    id='password'
                    name='password'
                    required />
            </div>
            <div className='register-form-password-container register-form-div'>
                <label htmlFor='confirm-password'>Confirm Password:</label>
                <input
                    onChange={(e: any) => handleInput(e)}
                    value={formValue?.confirmPassword || ''}
                    type='password'
                    id='confirm-password'
                    name='confirmPassword'
                    required />
            </div>
        </form>
    )

    const handleButton = () => {
        setOpenModal(!openModal)
    }

    console.log(formValue)

    return (
        <div className='login-form-register-container'>
            <p>Don't have an account?</p>
            <button
                type='button'
                className='login-form-register-button'
                onClick={handleButton}>Register Now</button>
            {openModal && registerForm}
        </div>
    )
}