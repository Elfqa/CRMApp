import { useState } from 'react';
import { editScheduledContact } from '../api/api';
import { useParams, useNavigate } from 'react-router-dom';

const EditScheduledContact = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [data, setData] = useState({
        description: '',
        scheduledDate: ''
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
            const res = await editScheduledContact(id, data);
            if (res.status === 200 || res.status === 204) {
                setSuccess(`Contact successfully updated with ID: ${id}`);
                setTimeout(() => navigate('/my-contacts'), 3000);
            }
            else if (res.status === 400){
                setError('Set valid future date and try again.');
            }
            else if (res.status === 404){
                setError(`Contact with ID ${id} does not exist or has status completed.`);
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
            <h2>Edit scheduled contact</h2>
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
                    <button type="submit">Update</button>
                </form>
                {error && <div style={{ color: 'red' }}>{error}</div>}
                {success && <div style={{ color: 'green' }}>{success}</div>}
            </div>
        </div>
    );
};

export default EditScheduledContact;
