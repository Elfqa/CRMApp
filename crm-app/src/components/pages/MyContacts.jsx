import {useState} from "react";
import SearchContacts from "../SearchContacts.jsx";
import ContactsList from "../ContactsList.jsx";

const MyContacts = () => {

    const [contacts, setContacts] = useState([]);

    return (
        <div>
            <h2>Search Contacts</h2>
            <SearchContacts setList={setContacts} />
            <ContactsList contacts={contacts} />
        </div>
    );
};

export default MyContacts;