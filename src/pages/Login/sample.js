import { useState } from 'react'
import './style.css'
import Input from '../../components/Input'
import axios from 'axios'
import { Navigate, useNavigate } from 'react-router-dom'

function Login() {
    const teken = localStorage.getItem('token')
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()

    function handleUsernameChange(event) {
        setUsername(event.target.value)
    }

    function handlePasswordChange(event) {
        setPassword(event.target.value)
    }

    function handleSubmit(event) {
        event.preventDefault()

        console.log('Form Submited')
        console.log({ username, password })

        axios.post("https://reqres.in/api/login/", {
            username,
            password
        }).then((response) => {
            const token = response.data.access_token
            localStorage.setItem('teken', token)
            console.log({ data: response.data })
            navigate('/profile')
        })
    }

    if(teken) {
        return <Navigate to={'/profile'} />
    

    return (
        <div className="Login">
            <div className='login-box'>
                <div className='img'></div>
            </div>
            <div className='login-box form-box'>
                <div className='login-form'>
                    <div className='text'>
                        <h1>Login</h1>
                    </div>
                    <form onSubmit={handleSubmit} className="form">
                        <label>
                            <p>Username:</p>
                            <Input
                                type="text"
                                value={username}
                                placeholder="Username or Email"
                                name="username"
                                onChange={handleUsernameChange}
                            />
                            {/* {errors.email && <p className="parag">Enter a valid email address</p>} */}
                        </label>
                        <label>
                            <p>Password:</p>
                            <Input
                                type="text"
                                value={password}
                                placeholder="Your Password"
                                name="password"
                                onChange={handlePasswordChange}
                            />
                            {/* {errors.password && <p className="parag">Password should contains atleast 8 charaters.</p>} */}
                        </label>
                        <button className='button'>Login</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

}