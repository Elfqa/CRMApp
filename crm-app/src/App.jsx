import './App.css';
import { useState, useEffect } from 'react';
import {BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Header from "./components/common/Header.jsx";
import HomePage from "./components/pages/HomePage.jsx";
import MyContacts from "./components/pages/MyContacts.jsx";
import MyClients from "./components/pages/MyClients.jsx";
import AddScheduledContactPage from "./components/pages/AddScheduledContactPage.jsx";
import UpdateContactToCompleted from "./components/UpdateContactToCompleted.jsx";
import EditScheduledContact from "./components/EditScheduledContact.jsx";
import LoginPage from "./components/pages/LoginPage.jsx";
import { getToken, logout } from './api/authService';
import LogoutButton from './components/LogoutButton';


function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const token = getToken();
        if (token) {
            setIsAuthenticated(true);
        }
    }, []);

    const handleLogout = () => {
        logout();
        setIsAuthenticated(false);
    };

    return (
        <BrowserRouter>
            <Header />
            {isAuthenticated && <LogoutButton onLogout={handleLogout} />}{/* conditional rendering LogoutBtn */}
            <div className="page">
                {isAuthenticated ? (
                    <Routes>
                        <Route path='/' element={<HomePage />} />
                        <Route path='/my-contacts' element={<MyContacts />} />
                        <Route path='/my-clients' element={<MyClients />} />
                        <Route path='/schedule-a-contact' element={<AddScheduledContactPage />} />
                        <Route path="/update-contact/:id" element={<UpdateContactToCompleted />} />
                        <Route path="/edit-scheduled-contact/:id" element={<EditScheduledContact />} />
                        <Route path='*' element={<Navigate to="/" />} /> {/* Redirect to home for any unknown routes */}
                    </Routes>
                ) : (
                    <Routes>
                        <Route path='/login' element={<LoginPage onLogin={() => setIsAuthenticated(true)} />} />
                        <Route path='*' element={<Navigate to="/login" />} /> {/* Redirect to login for any unknown routes */}
                    </Routes>
                )}
            </div>
        </BrowserRouter>
    );
}

export default App;
