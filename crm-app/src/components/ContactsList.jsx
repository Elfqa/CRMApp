import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import Contact from "./Contact.jsx";

const ContactsList = ({ contacts, setContacts }) => {
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    //to expire success/error message after 5 sek
    useEffect(() => {
        let errorTimeout;
        let successTimeout;

        if (error) {
            errorTimeout = setTimeout(() => setError(''), 5000);
        }

        if (success) {
            successTimeout = setTimeout(() => setSuccess(''), 5000);
        }

        return () => {
            if (errorTimeout) clearTimeout(errorTimeout);
            if (successTimeout) clearTimeout(successTimeout);
        };
    }, [error, success]);

    return (
        <div className="table-container">
            <div className="contacts-table">
                {error && <p style={{color: 'red'}}>{error}</p>}
                {success && <p style={{color: 'green'}}>{success}</p>}
                <table>
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Advisor ID</th>
                        <th>Client ID</th>
                        <th>Description</th>
                        <th>Status</th>
                        <th>Scheduled/Start-End Date</th>
                        <th>Creation Date</th>
                        <th>Last Update</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {contacts.map(contact => (
                        <Contact
                            key={contact.id}
                            {...contact}
                            setContacts={setContacts}
                            setError={setError}
                            setSuccess={setSuccess}
                        />
                    ))}
                    </tbody>
                </table>
            </div>
        </div>

    );
};

ContactsList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            description: PropTypes.string,
            creationDate: PropTypes.string.isRequired,
            lastUpdate: PropTypes.string.isRequired,
            scheduledDate: PropTypes.string,
            startDate: PropTypes.string,
            endDate: PropTypes.string,
            status: PropTypes.number.isRequired,
            advisorId: PropTypes.number.isRequired,
            clientId: PropTypes.number.isRequired,
        })
    ).isRequired,
    setContacts: PropTypes.func.isRequired,
};

export default ContactsList;
