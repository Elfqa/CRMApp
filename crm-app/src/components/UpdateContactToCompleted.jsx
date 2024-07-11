import { useState } from 'react';
import { updateScheduledContactToCompleted } from '../api/api';
import { useParams, useNavigate } from 'react-router-dom';

const UpdateContactToCompleted = () => {
    const { id } = useParams();
    const navigate = useNavigate ();
    const [data, setData] = useState({
        description: '',
        startDate: '',
        endDate: ''
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
        setError('');
        setSuccess('');
        try {
            const res = await updateScheduledContactToCompleted(id, data);
            if (res.status === 200 || res.status === 204) {
                setSuccess(`Contact successfully updated with ID: ${id}`);
                setTimeout(() => navigate('/my-contacts'), 3000); // Redirect to contacts after 3 seconds
            }
            else if (res.status === 400){
                setError('Set valid past dates and try again.');
            }
            else if (res.status === 404){
                setError(`Contact with ID ${id} does not exist.`);
            }
            else {
                setError('An unexpected error occurred. Please try again later.');
            }
        } catch (error) {
            setError('An error occurred while updating the contact.');
       }
    };

    return (
        <div>
            <h2>Complete Contact</h2>
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
                        <label>Start Date: </label>
                        <input
                            type="datetime-local"
                            name="startDate"
                            value={data.startDate}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label>End Date: </label>
                        <input
                            type="datetime-local"
                            name="endDate"
                            value={data.endDate}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button type="submit">Update</button>
                </form>
                {error && <div style={{ color: 'red' }}>{error}</div>}
                {success && <div style={{ color: 'green' }}>{success}</div>}
            </div>
        </div>
    );
};

export default UpdateContactToCompleted;
