const url = 'https://localhost:7153'; //nasz url ktory mamy w swaggerze w apce backendowej

/// /api/SearchContacts


// export const getContactsByAdvisorId = (advisorId, setList) => {
//     fetch(`${url}/api/Contacts/AdvisorId?id=${advisorId}`)
//         .then(res => res.json())
//         .then(res => setList(res))
//         .catch(err => console.log(err));
// }
export const getContactsByAdvisorId = async (advisorId, setList) => {
    //try {
        const response = await fetch(`${url}/api/Contacts/AdvisorId?id=${advisorId}`);
        const data = await response.json();
        setList(data);
    // } catch (error) {
    //     console.log(error);
    // }
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




// export async function getContacts(url) {
//     try {
//         const response = await fetch(url);
//         if (!response.ok) {
//             throw new Error(`HTTP error! status: ${response.status}`);
//         }
//         const data = await response.json();
//         return data;
//     } catch (error) {
//         console.error('Failed to fetch contacts:', error);
//         return [];
//     }
// }
