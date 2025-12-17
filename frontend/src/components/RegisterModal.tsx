export default function RegisterModal() {
    return (
        <form className='register-form'>
            <h2>Create an account</h2>
            <div className='username-container'>
                <label htmlFor='username'>Username:</label>
                <input
                type='text'
                id='username'
                name='username' />
            </div>
        </form>
    )
}