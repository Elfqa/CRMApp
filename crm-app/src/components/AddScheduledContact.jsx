import { useState } from 'react';
import {addScheduledContact} from "../api/api.js";

const AddScheduledContact = () => {
    const [data, setData] = useState({
        description: '',
        scheduledDate: '',
        advisorId: '',
        clientId: ''
    });

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({
            ...data,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(''); // Clear any previous errors
        setSuccess(''); // Clear any previous success messages
        try {
            const res = await addScheduledContact(data);
            if (res.status === 400) {
                setError('Invalid input. Please enter a valid advisor ID, client ID, future date and try again.'); // Set error message
            } else if (res.status === 200) {
                setSuccess(`Contact successfully scheduled with ID: ${res.id}`); // Set success message with ID
            } else {
                setError('An unexpected error occurred. Please try again later.');
            }
        } catch (error) {
            setError('An error occurred while submitting the form.');
        }
    };

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Description: </label>
                    <textarea
                        name="description"
                        value={data.description}
                        onChange={handleChange}
                    ></textarea>
                </div>
                <div>
                    <label>Scheduled Date: </label>
                    <input
                        type="datetime-local"
                        name="scheduledDate"
                        value={data.scheduledDate}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Advisor ID: </label>
                    <input
                        type="number"
                        name="advisorId"
                        value={data.advisorId}
                        onChange={handleChange}
                        min="1"
                        required
                    />
                </div>
                <div>
                    <label>Client ID: </label>
                    <input
                        type="number"
                        name="clientId"
                        value={data.clientId}
                        onChange={handleChange}
                        min="1"
                        required
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
            {error && <div style={{ color: 'red' }}>{error}</div>} {/* Display error message */}
            {success && <div style={{ color: 'green' }}>{success}</div>} {/* Display success message */}
        </div>
    );
};

export default AddScheduledContact;
