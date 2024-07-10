import { useState } from 'react';
import PropTypes from 'prop-types';


// Funkcja do obsługi logowania - trzeba zaimplementowac API
const loginUser = (username, password, callback) => {
    console.log("Username:", username);
    console.log("Password:", password);
    callback();
};

const Login = ({ onLogin }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(""); // Stan do przechowywania błędów

    const submitHandler = (e) => {
        e.preventDefault();
        if (!username.trim()) {
            setError("Username is required.");
            return;
        }
        if (!password.trim()) {
            setError("Password is required.");
            return;
        }
        loginUser(username, password, onLogin);
        setError(""); // Czyści błędy, jeśli logowanie jest udane
    };

    return (
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
            {error && <p style={{ color: 'red' }}>{error}</p>} {/* Wyświetlanie komunikatów o błędach */}
            <button type="submit">Submit</button>
        </form>
    );
};

Login.propTypes = {
    onLogin: PropTypes.func.isRequired, // Funkcja wywoływana po pomyślnym logowaniu
};

export default Login;
