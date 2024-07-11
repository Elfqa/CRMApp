import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./components/pages/HomePage.jsx";
import './App.css';
import Header from "./components/common/Header.jsx";
import MyContacts from "./components/pages/MyContacts.jsx";
import MyClients from "./components/pages/MyClients.jsx";
import AddScheduledContactPage from "./components/pages/AddScheduledContactPage.jsx";
import UpdateContactToCompleted from "./components/UpdateContactToCompleted.jsx";
import EditScheduledContact from "./components/EditScheduledContact.jsx";

function App() {
    return (
        <>
            <BrowserRouter>
                <Header />
                <div className="page">
                    <Routes>
                        <Route path='/' element={<HomePage />} />
                        <Route path='my-contacts' element={<MyContacts />} />
                        <Route path='my-clients' element={<MyClients />} />
                        <Route path='schedule-a-contact' element={<AddScheduledContactPage />} />
                        <Route path="/update-contact/:id" element={<UpdateContactToCompleted />} />
                        <Route path="/edit-scheduled-contact/:id" element={<EditScheduledContact />} />
                    </Routes>
                </div>

            </BrowserRouter>
        </>
    )
}

export default App;