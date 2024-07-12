import { useState } from 'react';
import PropTypes from 'prop-types';
import { getClientsByAdvisorId, getAllClients } from '../api/api.js';

const SearchClients = ({ setList }) => {
    const [advisorId, setAdvisorId] = useState("");
    const [error, setError] = useState("");

    const validateAdvisorId = (id) => {
        const numberId = Number(id);
        return Number.isInteger(numberId) && numberId >= 1;
    };

    const handleGetAllClientsByAdvisorId = async (e) => {
        e.preventDefault();
        if (validateAdvisorId(advisorId)) {
            setList([]); // Clear the list before fetching new data
            try {
                await getClientsByAdvisorId(advisorId, setList);
                setError(""); // Clear errors if validation is successful
            } catch (error) {
                console.log(error);
                setError("Failed to fetch clients. Please try again.");
            }
        } else {
            setError("Please enter a valid Advisor ID.");
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
            <form onSubmit={handleGetAllClientsByAdvisorId}>
                <div>
                    <label>
                        Advisor ID
                        <input
                            type="text"
                            value={advisorId}
                            onChange={(e) => setAdvisorId(e.target.value)}
                            placeholder="Enter Advisor ID"
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
