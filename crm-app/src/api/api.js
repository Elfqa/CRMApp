import { getToken } from './authService';
const tokenJWT = getToken();
const url = 'https://localhost:7153';

export const getContactsByAdvisorId = async (advisorId, setList) => {
    try {
        const response = await fetch(`${url}/api/Contacts/AdvisorId?id=${advisorId}`,{
            method: "GET",
            headers: {
                'Authorization': `Bearer ${tokenJWT}`
            }
        });
        const data = await response.json();
        //console.log(data);
        setList(data);
    } catch (error) {
        console.log(error);
    }
}

export const addScheduledContact = async (formData) => {
    console.log(formData);
    const response = await fetch(`${url}/api/Contacts/schedule-a-contact`, {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${tokenJWT}`
        }
    });
    const result = await response.json();       //To get new contact id passed by the API
    console.log(result);
    return { status: response.status, id: result };
};

export const deleteContact = async (id) => {
    const response = await fetch(`${url}/api/Contacts/${id}`, {
        method: "DELETE",
        headers: {
            'Authorization': `Bearer ${tokenJWT}`
        }
    });
    if (!response.ok) {
        throw new Error('Failed to delete contact');
    }
};

export const updateContactToCompleted = async (id, formData) => {
    console.log(formData);
    const response = await fetch(`${url}/api/Contacts/mark-as-completed/${id}`, {
        method: "PUT",
        body: JSON.stringify(formData),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${tokenJWT}`
        }
    });
    // if (!response.ok) {
    //     throw new Error('Failed to update contact');
    // }
    return response;
};
export const editScheduledContact = async (id, formData) => {
    const response = await fetch(`${url}/api/Contacts/edit-scheduled/${id}`, {
        method: "PUT",
        body: JSON.stringify(formData),
        headers: {
            'Content-Type': 'application/json', //'Content-Type': 'application/json', only for methods with body: put, post
            'Authorization': `Bearer ${tokenJWT}`
        }
    });
    // if (!response.ok) {
    //     throw new Error('Failed to edit contact');
    // }
    return response;
};


//api/Clients
export const getClientsByAdvisorId = async (advisorId, setList) => {
    try {
        const response = await fetch(`${url}/api/Clients/AdvisorId?id=${advisorId}`, {
            method: "GET",
            headers: {
                'Authorization': `Bearer ${tokenJWT}`
            }
        });
        const data = await response.json();
        console.log(data);
        setList(data);
    } catch (error) {
        console.log(error);
    }
}


export const getAllClients = async (setList) => {
    try {
        const response = await fetch(`${url}/api/Clients`, {
            method: "GET",
            headers: {
                'Authorization': `Bearer ${tokenJWT}`
            }
        });
        const data = await response.json();
        console.log(data);
        setList(data);
    } catch (error) {
        console.log('Error fetching all clients:', error);
    }
};