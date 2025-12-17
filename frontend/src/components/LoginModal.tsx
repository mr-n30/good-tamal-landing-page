import { useState } from 'react'
import axios from 'axios'

export default function LoginModal({ setShowLogin }: { setShowLogin: React.Dispatch<React.SetStateAction<boolean>> }) {
    interface FormInputData {
        username: string
        password: string
    }

    interface User {
        id: string
        username: string
    }

    interface LoginResponse {
        accessToken?: string
        message?: string
        user: User
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        try {
            const res = await axios.post<LoginResponse>('http://localhost:1337/api/auth/login', {
                username: formValue.username,
                password: formValue.password
            })

            if (res.data.message) {
                alert(res.data.message)
                return
            }

            if (res.data.accessToken) {
                alert('login successful')
            }

            return res.data
        } catch (error) {
            console.error('Login error:', error)
        }
    }

    const [formValue, setFormValue] = useState<FormInputData>({
        username: '',
        password: ''
    })

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.currentTarget
        setFormValue({ ...formValue, [name]: value })
    }

    return (
        <form className='login-form' onSubmit={handleSubmit}>
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
                <button type='submit'>Login</button>
                <button type='button'>Reset Password</button>
            </div>
            <div className='register-container'>
                <p>Don't have an account?</p>
                <button type='button'>Register</button>
            </div>

            <div className='login-form-close-button'>
                <button type='button' onClick={() => setShowLogin(false)}>Close</button>
            </div>
        </form>
    )
}