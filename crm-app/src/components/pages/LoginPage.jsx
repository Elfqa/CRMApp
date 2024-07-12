import { useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import {login} from "../../api/authService.js";


const LoginPage = ({ onLogin }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const navigate = useNavigate();

    const submitHandler = async (e) => {
        e.preventDefault();
        if (!username.trim()) {
            setError("Username is required.");
            setSuccess("");
            return;
        }
        if (!password.trim()) {
            setError("Password is required.");
            setSuccess("");
            return;
        }
        try {
            const token = await login(username, password);
            onLogin(token); // Pass the token to the callback function
            setError("");
            setSuccess("Login successful!");
            setTimeout(() => { // Navigate to home page after 2 seconds
                navigate('/');
            }, 2000);
        } catch (error) {
            setError('Login failed!');
            setSuccess("");
        }
    };

    return (
        <div className="main">
            <h1>Hello!</h1>
            <h2>Log in</h2>
            <form onSubmit={submitHandler}>
                <div>
                    <label>
                        Username
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="Enter Username"
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Password
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter Password"
                        />
                    </label>
                </div>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                {success && <p style={{ color: 'green' }}>{success}</p>}
                <button type="submit">Log in</button>
            </form>
        </div>
    );
};

LoginPage.propTypes = {
    onLogin: PropTypes.func.isRequired,
};

export default LoginPage;
