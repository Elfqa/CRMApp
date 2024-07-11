const url = 'https://localhost:7153'; //nasz url ktory mamy w swaggerze w apce backendowej

export const getContactsByAdvisorId = async (advisorId, setList) => {
    try {
        const response = await fetch(`${url}/api/Contacts/AdvisorId?id=${advisorId}`);
        const data = await response.json();
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
        }
    });
    const result = await response.json();       //To get new contact id passed by the API
    console.log(result);
    return { status: response.status, id: result };
};

export const deleteContact = async (id) => {
    const response = await fetch(`${url}/api/Contacts/${id}`, {
        method: "DELETE",
    });
    if (!response.ok) {
        throw new Error('Failed to delete contact');
    }
};

export const updateScheduledContactToCompleted = async (id, formData) => {
    console.log(formData);
    const response = await fetch(`${url}/api/Contacts/mark-as-completed/${id}`, {
        method: "PUT",
        body: JSON.stringify(formData),
        headers: {
            'Content-Type': 'application/json',
        }
    });
    // if (!response.ok) {
    //     throw new Error('Failed to update contact');
    // }
    return response;
};