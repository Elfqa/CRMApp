import Login from '../Login'; // Upewnij się, że ścieżka do Login jest poprawna

const HomePage = () => {
    const handleLogin = () => {
        console.log("Login successful!");

    };

    return (
        <div className="main">
            <h2>Log in</h2>
            <Login onLogin={handleLogin} />
        </div>
    );
};

export default HomePage;
