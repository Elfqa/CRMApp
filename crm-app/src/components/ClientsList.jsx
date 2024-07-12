import PropTypes from "prop-types";
import Client from "./Client.jsx";

const ClientsList = ({ clients }) => {
    return (
        <div className="table-container">
            <table>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Advisor ID</th>
                    <th>Advisor Name</th>
                </tr>
                </thead>
                <tbody>
                {clients.map(client => (
                    <Client key={client.id} {...client} />
                ))}
                </tbody>
            </table>
        </div>
    );
};

ClientsList.propTypes = {
    clients: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            firstName: PropTypes.string.isRequired,
            lastName: PropTypes.string.isRequired,
            advisorId: PropTypes.number.isRequired,
            advisorName: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default ClientsList;
