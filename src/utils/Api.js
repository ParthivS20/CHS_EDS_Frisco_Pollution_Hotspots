export const request = async(endpoint) => {
    return fetch(
        process.env.REACT_APP_BACKEND_URL + endpoint
    );
}
