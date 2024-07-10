import PropTypes from "prop-types";

const statusMapping = {
    0: 'Scheduled',
    1: 'Completed'
};

const getBackgroundColor = (status) => {
    switch (status) {
        case 1:
            return '#a4d59c';  // Completed
        case 0:
            return 'bisque'; // Scheduled
        default:
            return 'white';
    }
};

const Contact = ({
                     id,
                     description,
                     creationDate,
                     lastUpdate,
                     scheduledDate,
                     startDate,
                     endDate,
                     status,
                     advisorId,
                     clientId,
                 }) => {
    const contactCardStyle = {
        border: '1px solid black',
        padding: '10px',
        borderRadius: '5px',
        textAlign: 'left',
        backgroundColor: getBackgroundColor(status)
    };

    return (
        <div className="contact-card" style={contactCardStyle}>
            <h2>Contact ID: {id}</h2>
            <p><strong>Advisor ID:</strong> {advisorId} <strong>Client ID:</strong> {clientId}</p>
            <p><strong>Description:</strong> {description}</p>
            <p><strong>Status:</strong> {statusMapping[status]}</p>
            {status === 0 && (
                <p><strong>Scheduled Date:</strong> {scheduledDate ? new Date(scheduledDate).toLocaleString() : 'N/A'}</p>
            )}
            {status === 1 && (
                <>
                    <p><strong>Start Date:</strong> {startDate ? new Date(startDate).toLocaleString() : 'N/A'} <strong>End Date:</strong> {endDate ? new Date(endDate).toLocaleString() : 'N/A'}</p>
                </>
            )}
            <p><strong>Creation Date:</strong> {new Date(creationDate).toLocaleString()}</p>
            <p><strong>Last Update:</strong> {new Date(lastUpdate).toLocaleString()}</p>
        </div>
    );
};

Contact.propTypes = {
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
};

export default Contact;
