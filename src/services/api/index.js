export default (endpoint) => {
    return fetch(endpoint, {method: 'GET'}).then(response => Promise.all([response, response.json()]))
}