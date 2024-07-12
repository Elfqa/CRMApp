import  { useState, useEffect } from 'react';
import {getUserId} from "../../api/authService.js";
import ClientsList from "../ClientsList.jsx";
import {getClientsByAdvisorId} from "../../api/api.js";


const MyClients = () => {
    const [clients, setClients] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchClients = async () => {
            try {
                const advisorId = getUserId();
                if (advisorId) {
                    await getClientsByAdvisorId(advisorId, setClients);
                } else {
                    setError('User ID not found in localStorage');
                }
            } catch (err) {
                setError('Failed to fetch clients');
                console.error(err);
            }
        };
        fetchClients();
    }, []);

    return (
        <div>
            <h2>My Clients List</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <ClientsList clients={clients} />
        </div>
    );
};

export default MyClients;
