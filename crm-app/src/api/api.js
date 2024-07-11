const url = 'https://localhost:7153';
const tokenJWT= 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IkpvaG4gU21pdGgiLCJleHAiOjE3MjExMjY2NzUsImlzcyI6Imh0dHBzOi8vbG9jYWxob3N0OjcxNTMvIiwiYXVkIjoiaHR0cHM6Ly9sb2NhbGhvc3Q6NzE1My8ifQ.NKMupz85QBsJB-YHfDXT7167-iuMFy1jKNhV9b4w9Sg';

export const getContactsByAdvisorId = async (advisorId, setList) => {
    try {
        const response = await fetch(`${url}/api/Contacts/AdvisorId?id=${advisorId}`,{
            method: "GET",
            headers: {
                'Authorization': `Bearer ${tokenJWT}`
            }
        });
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
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${tokenJWT}`
        }
    });
    // if (!response.ok) {
    //     throw new Error('Failed to edit contact');
    // }
    return response;
};
//'Content-Type': 'application/json', only for methods with body: put, post