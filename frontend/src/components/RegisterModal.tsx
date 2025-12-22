import { useState } from 'react'
import axios from 'axios'
import { type AuthModal } from './Nav'

export default function RegisterModal({ setHandleModal }: { setHandleModal: React.Dispatch<AuthModal> }) {
    interface formData {
        email?: string
        username?: string
        password?: string
        confirmPassword?: string
    }

    const [formValue, setFormValue] = useState<formData>()

    // Function to handle the input changes
    const handleInput = (e: React.InputEvent<HTMLInputElement>) => {
        e.preventDefault()
        const { name, value } = e.currentTarget
        setFormValue({ ...formValue, [name]: value })
    }

    // Function that send the register request to the backend
    const createAccount = async (e: React.FormEvent<InputEvent>) => {
        e.preventDefault()
        const email = formValue?.email
        const username = formValue?.username
        const password = formValue?.password
        const confirmPassword = formValue?.confirmPassword

        // Check if password match
        if (password !== confirmPassword) {
            alert('Passwords do not match!') // this needs to be checked in the backend too (client side can be bypassed easily)
            return
        }

        const loginRequest = { email, username, password, confirmPassword }

        try {
            // Send the register request
            const res = await axios.post('/api/auth/register', loginRequest)

            if (res.data.message === 'success') {
                alert('User created!')
                alert(res.data)
                return
            } else {
                alert(`Registration failed: ${res.data.message}`)
                return
            }
        } catch (e: any) {
            if (e.response && e.response.data && e.response.data.message) {
                alert(`Registration failed: ${e.response.data.message}`)
            }
            else {
                alert('An unexpected error occurred during registration. Error: ' + e.message)
            }
        }
    }

    return (
        <form className={'register-form'}>
            <button className='register-form-close-button' type='button' onClick={() => setHandleModal(null)}>Close</button>
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
            <button
                className='register-form-button'
                type='submit'
                onClick={(e: any) => createAccount(e)}>Create account</button>
        </form>
    )
}