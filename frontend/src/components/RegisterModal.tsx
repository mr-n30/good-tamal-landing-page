import { useState } from 'react'
import axios from 'axios'

export default function RegisterModal() {
    interface formData {
        email?: string
        username?: string
        password?: string
        confirmPassword?: string
    }

    const [openModal, setOpenModal] = useState<boolean>(false)
    const [formValue, setFormValue] = useState<formData>()

    const handleInput = (e: React.InputEvent<HTMLInputElement>) => {
        e.preventDefault()
        const { name, value } = e.currentTarget
        setFormValue({ ...formValue, [name]: value })
    }

    const handleClose = () => {
        setOpenModal(!openModal)
    }

    const handleOpen = () => {
        setOpenModal(!openModal)
    }

    const createAccountButton = async (e: React.FormEvent<InputEvent>) => {
        e.preventDefault()
        const email = formValue?.email
        const username = formValue?.username
        const password = formValue?.password
        const confirmPassword = formValue?.confirmPassword

        if (password !== confirmPassword) {
            alert('Passwords do not match!') // this needs to be checked in the backend too (client side can be bypassed easily)
            return
        }

        // Send the register request
        const loginRequest = { email, username, password, confirmPassword }

        try {
            const res = await axios.post('/api/auth/register', loginRequest)

            if (res.data.message === 'success') {
                alert('User created!')
                alert(res.data)
                return
            } else {
                alert(`Registration failed: ${res.data.message}`)
                return
            }
        }

        catch (e: any) {
            if (e.response && e.response.data && e.response.data.message) {
                alert(`Registration failed: ${e.response.data.message}`)
            }
            else {
                alert('An unexpected error occurred during registration. Error: ' + e.message)
            }
        }
    }

    const registerForm = (
        <form className={'register-form'}>
            <button type='button' onClick={handleClose}>Close</button>
            <h2>Create an account</h2>
            <div className='register-form-username-container register-form-div'>
                <div className='register-label'>
                    <label htmlFor='Email'>Email:</label>
                </div>
                <input
                    className='register-form-input'
                    onChange={(e: any) => handleInput(e)}
                    value={formValue?.email || ''}
                    type='email'
                    id='username'
                    name='email'
                    required />
            </div>
            <div className='register-form-email-container register-form-div'>
                <div className='register-label'>
                    <label htmlFor='username'>Username:</label>
                </div>
                <input
                    className='register-form-input'
                    onChange={(e: any) => handleInput(e)}
                    value={formValue?.username || ''}
                    type='text'
                    id='username'
                    name='username'
                    required />
            </div>
            <div className='register-form-password-container register-form-div'>
                <div className='register-label'>
                    <label htmlFor='password'>Password:</label>
                </div>
                <input
                    className='register-form-input'
                    onChange={(e: any) => handleInput(e)}
                    value={formValue?.password || ''}
                    type='password'
                    id='password'
                    name='password'
                    required />
            </div>
            <div className='register-form-password-container register-form-div'>
                <div className='register-label'>
                    <label htmlFor='confirm-password'>Confirm Password:</label>
                </div>
                <input
                    className='register-form-input'
                    onChange={(e: any) => handleInput(e)}
                    value={formValue?.confirmPassword || ''}
                    type='password'
                    id='confirm-password'
                    name='confirmPassword'
                    required />
            </div>
            <button type='submit' onClick={(e: any) => createAccountButton(e)}>Create account</button>
        </form>
    )

    // <div className='login-form-register-container'>
    //     <p>Don't have an account?</p>
    //     <button
    //         type='button'
    //         className='login-form-register-button'
    //         onClick={handleOpen}>Register Now</button>
    //     {openModal && registerForm}
    // </div>
    return (
        registerForm
    )
}