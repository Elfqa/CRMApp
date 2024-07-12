import PropTypes from "prop-types";

const LogoutButton = ({ onLogout }) => {
    return (
        <button onClick={onLogout}>
            Log out
        </button>
    );
};

export default LogoutButton;
LogoutButton.propTypes = {
    onLogout: PropTypes.func.isRequired
};
