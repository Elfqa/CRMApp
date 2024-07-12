import { useState } from 'react';
import PropTypes from 'prop-types';
import {getClientById, getAllClients} from '../api/api.js';

const SearchClients = ({ setList }) => {
    const [clientId, setClientId] = useState("");
    const [error, setError] = useState("");

    const validateClientId = (id) => {
        const numberId = Number(id);
        return Number.isInteger(numberId) && numberId >= 1;
    };

    const handleGetClientById = async (e) => {
        e.preventDefault();
        if (validateClientId(clientId)) {
            setList([]); // Clear the list before fetching new data
            setError(""); // Clear errors if validation is successful
            try {
                const response = await getClientById(clientId, setList);
                if (response && response.status === 404) {
                    setError(`Client does not exist`); // Set error message
                }
            } catch (error) {
                console.log(error);
                setError('Failed to fetch clients. Please try again.');
            }
        } else {
            setError('Please enter a valid Client ID.');
        }
    };

    const handleGetAllClients = async () => {
        setList([]); // Clear the list before fetching new data
        try {
            await getAllClients(setList);
        } catch (error) {
            console.log('Error fetching all clients:', error);
            setError("Failed to fetch clients. Please try again.");
        }
    };

    return (
        <div className="form-container">
            <form onSubmit={handleGetClientById}>
                <div>
                    <label>
                        Client ID
                        <input
                            type="text"
                            value={clientId}
                            onChange={(e) => setClientId(e.target.value)}
                            placeholder="Enter Client ID"
                        />
                    </label>
                    <button type="submit">Search</button>
                </div>
                {error && <p style={{ color: 'red' }}>{error}</p>}
            </form>
            <button onClick={handleGetAllClients}>Search All Clients</button>
        </div>
    );
};

SearchClients.propTypes = {
    setList: PropTypes.func.isRequired,
};

export default SearchClients;
