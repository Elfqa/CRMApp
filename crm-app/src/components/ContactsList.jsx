import PropTypes from "prop-types";
import Contact from "./Contact.jsx";

const ContactsList = ({contacts}) => {
    console.log(contacts);
    return (
        <div className="contact-list">
            {contacts.map(contact => (<Contact key={contact.id} {...contact} />))}
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
};

export default ContactsList;

// ContactsList.propTypes = {
//     list: PropTypes.array
// };