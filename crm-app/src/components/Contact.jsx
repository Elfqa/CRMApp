// import PropTypes from "prop-types";
// import { deleteContact } from "../api/api";
//
// const statusMapping = {
//     0: 'Scheduled',
//     1: 'Completed'
// };
//
// const getBackgroundColorByContactStatus = (status) => {
//     switch (status) {
//         case 1:
//             return '#aca081';  // Completed
//         case 0:
//             return 'bisque'; // Scheduled
//         default:
//             return 'white';
//     }
// };
//
// const Contact = ({
//                      id,
//                      description,
//                      creationDate,
//                      lastUpdate,
//                      scheduledDate,
//                      startDate,
//                      endDate,
//                      status,
//                      advisorId,
//                      clientId,
//                      setContacts,
//                      setError,
//                      setSuccess
//                  }) => {
//     const rowStyle = {
//         backgroundColor: getBackgroundColorByContactStatus(status)
//     };
//
//     const handleDelete = async () => {
//         setError(''); // Clear previous error
//         setSuccess(''); // Clear previous success message
//         try {
//             await deleteContact(id);
//             setContacts(prev => prev.filter(contact => contact.id !== id));
//             setSuccess(`Successfully deleted contact with ID: ${id}`);
//         } catch (error) {
//             setError('Failed to delete contact. Please try again.');
//         }
//     };
//
//     return (
//         <tr style={rowStyle}>
//             <td>{id}</td>
//             <td>{advisorId}</td>
//             <td>{clientId}</td>
//             <td>{description}</td>
//             <td>{statusMapping[status]}</td>
//             <td>
//                 {status === 0 ? (
//                     scheduledDate ? new Date(scheduledDate).toLocaleString() : 'N/A'
//                 ) : (
//                     <>
//                         {startDate ? new Date(startDate).toLocaleString() : 'N/A'} - {endDate ? new Date(endDate).toLocaleString() : 'N/A'}
//                     </>
//                 )}
//             </td>
//             <td>{new Date(creationDate).toLocaleString()}</td>
//             <td>{new Date(lastUpdate).toLocaleString()}</td>
//             <td>
//                 <button onClick={handleDelete}>Delete</button>
//             </td>
//         </tr>
//     );
// };
//
// Contact.propTypes = {
//     id: PropTypes.number.isRequired,
//     description: PropTypes.string,
//     creationDate: PropTypes.string.isRequired,
//     lastUpdate: PropTypes.string.isRequired,
//     scheduledDate: PropTypes.string,
//     startDate: PropTypes.string,
//     endDate: PropTypes.string,
//     status: PropTypes.number.isRequired,
//     advisorId: PropTypes.number.isRequired,
//     clientId: PropTypes.number.isRequired,
//     setContacts: PropTypes.func.isRequired,
//     setError: PropTypes.func.isRequired,
//     setSuccess: PropTypes.func.isRequired,
// };
//
// export default Contact;
import PropTypes from "prop-types";
import { deleteContact } from "../api/api";
import { Link } from 'react-router-dom';

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
                     setContacts,
                     setError,
                     setSuccess
                 }) => {
    const rowStyle = {
        backgroundColor: getBackgroundColor(status)
    };

    const handleDelete = async () => {
        setError('');
        setSuccess('');
        try {
            await deleteContact(id);
            setContacts(prev => prev.filter(contact => contact.id !== id));
            setSuccess(`Successfully deleted contact with ID: ${id}`);
        } catch (error) {
            setError('Failed to delete contact. Please try again.');
        }
    };

    return (
        <tr style={rowStyle}>
            <td>{id}</td>
            <td>{advisorId}</td>
            <td>{clientId}</td>
            <td>{description}</td>
            <td>{statusMapping[status]}</td>
            <td>
                {status === 0 ? (
                    scheduledDate ? new Date(scheduledDate).toLocaleString() : 'N/A'
                ) : (
                    <>
                        {startDate ? new Date(startDate).toLocaleString() : 'N/A'} - {endDate ? new Date(endDate).toLocaleString() : 'N/A'}
                    </>
                )}
            </td>
            <td>{new Date(creationDate).toLocaleString()}</td>
            <td>{new Date(lastUpdate).toLocaleString()}</td>
            <td>
                <button onClick={handleDelete}>Delete</button>
                <Link to={`/update-contact/${id}`}><button>Update</button></Link>
            </td>
        </tr>
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
    setContacts: PropTypes.func.isRequired,
    setError: PropTypes.func.isRequired,
    setSuccess: PropTypes.func.isRequired,
};

export default Contact;
