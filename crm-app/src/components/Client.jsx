import PropTypes from "prop-types";

const Client = ({ id, firstName, lastName, advisorId, advisorName }) => {
    return (
        <tr>
            <td>{id}</td>
            <td>{firstName}</td>
            <td>{lastName}</td>
            <td>{advisorId}</td>
            <td>{advisorName}</td>
        </tr>
    );
};

Client.propTypes = {
    id: PropTypes.number.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    advisorId: PropTypes.number.isRequired,
    advisorName: PropTypes.string.isRequired,
};

export default Client;
