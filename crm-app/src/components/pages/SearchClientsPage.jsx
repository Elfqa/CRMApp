import { useState } from "react";
import SearchClients from "../SearchClients.jsx";
import ClientsList from "../ClientsList.jsx";

const SearchClientsPage = () => {
    const [clients, setClients] = useState([]);

    return (
        <div>
            <h2>Search Clients</h2>
            <SearchClients setList={setClients} />
            <ClientsList clients={clients} />
        </div>
    );
};

export default SearchClientsPage;
