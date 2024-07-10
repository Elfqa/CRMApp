import { useState } from 'react';
import PropTypes from 'prop-types';
import { getContactsByAdvisorId } from '../api/api.js';

const SearchContacts = ({ setList }) => {
    const [advisorId, setAdvisorId] = useState("");
    const [error, setError] = useState("");

    const validateAdvisorId = (id) => {
        const numberId = Number(id);
        return Number.isInteger(numberId) && numberId >= 1;
    };

    const submitHandler = async (e) => {
        e.preventDefault();
        if (validateAdvisorId(advisorId)) {
            try {
                await getContactsByAdvisorId(advisorId, setList);
                setError(""); // Clear errors if validation is successful
            } catch (error) {
                console.log(error);
                setError("Failed to fetch contacts. Please try again.");
            }
        } else {
            setError("Please enter a valid Advisor ID.");
        }
    };

    return (
        <div className="form-container">
            <form onSubmit={submitHandler}>
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
        </div>
    );
};

SearchContacts.propTypes = {
    setList: PropTypes.func.isRequired,
};

export default SearchContacts;
