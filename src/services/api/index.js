export default (endpoint) => {
    return fetch(endpoint, {method: 'GET'}).then(request => Promise.all([request, request.json()]))
}