import { useState } from 'react'
import axios from 'axios'
import { type AuthModal } from './Nav'

export default function LoginModal({ setHandleModal }: {
    setHandleModal: React.Dispatch<React.SetStateAction<AuthModal>>,
}) {

    interface FormInputData {
        username: string
        password: string
    }

    interface LoginResponse {
        accessToken?: string
        message?: string
    }

    // Function to send the login request to the backend
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        // Send the login request
        try {
            const res = await axios.post<LoginResponse>('/api/auth/login', {
                username: formValue.username, password: formValue.password
            })

            if (res.data?.message === 'success') alert('Login success!')
            else alert('Login failed!')
        } catch (error) {
            console.error('Login error:', error)
        }
    }

    // State to set and handle form input element values 
    const [formValue, setFormValue] = useState<FormInputData>({
        username: '',
        password: ''
    })

    // This function sets and handle form input element values 
    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.currentTarget
        setFormValue({ ...formValue, [name]: value })
    }

    return (
        <form className='login-form' onSubmit={handleSubmit}>
            <h2 className='login-form-heading'>Login</h2>
            <div className='username-container login-form-div'>
                <label htmlFor='username'>Username:</label>
                <input
                    onChange={e => handleInput(e)}
                    placeholder="Username"
                    className='login-form-input'
                    type='text'
                    id='username'
                    name='username'
                    value={formValue.username}
                    required maxLength={30} />
            </div>
            <div className='password-container login-form-div'>
                <label htmlFor='password'>Password:</label>
                <input
                    onChange={e => handleInput(e)}
                    placeholder="Password"
                    className="login-form-input"
                    type='password'
                    id='password'
                    name='password'
                    value={formValue.password}
                    required maxLength={30} />
            </div>
            <div className='login-form-button-container'>
                <button className='login-form-login-button' type='submit'>Login</button>
                <button type='button'>Reset Password</button>
            </div>
            <div className='login-form-register-container'>
                <p>Don't have an account?</p>
                <button
                onClick={() => setHandleModal('register')}
                type='button'
                className='login-form-register-button'>Create account</button>
            </div>
            <div className='login-form-close-button'>
                <button type='button' onClick={() => setHandleModal(null)}>Close</button>
            </div>
        </form>

    )
}