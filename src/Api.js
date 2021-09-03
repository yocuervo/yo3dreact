const BASE_URL = 'http://localhost:3001';

async function callApi(endpoint, options = {}) {
    options.headers = {
        'Content-Type': 'application/json',
        Accept: 'application/json',
    };

    const url = BASE_URL + endpoint;
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
}

const api = {
    modelos: {
        list() {
            return callApi('/modelos');
        },
        create(modelo) {
            return callApi(`/modelos`, {
                method: 'POST',
                body: JSON.stringify(modelo),
            });
        },
        read(modeloId) {
            return callApi(`/modelos/${modeloId}`);
        },
        update(modeloId, updates) {
            return callApi(`/modelos/${modeloId}`, {
                method: 'PUT',
                body: JSON.stringify(updates),
            });
        },
        remove(modeloId) {
            return callApi(`/modelos/${modeloId}`, {
                method: 'DELETE',
            });
        },
    },
};

export default api;