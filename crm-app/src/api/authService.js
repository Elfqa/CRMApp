const auth_url = 'https://localhost:7153/api/Auth/login';

export const login = async (username, password) => {
    try {
        const response = await fetch(`${auth_url}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        });

        if (!response.ok) {
            const errorText = await response.text();
            console.error('Login failed:', errorText);
            throw new Error('Login failed');
        }

        const data = await response.json();
        console.log(data);
        if (!data.token) {
            throw new Error('Token not found in response');
        }

        localStorage.setItem('token', data.token);
        return data.token;
    } catch (error) {
        console.error('Login error:', error);
        throw new Error('Login failed');
    }
};

export const getToken = () => {
    return localStorage.getItem('token');
};

export const logout = () => {
    localStorage.removeItem('token');
};
