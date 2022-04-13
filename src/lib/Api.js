export const request = async(endpoint) => {
    if(process.env.REACT_APP_BACKEND_URL) {
        return fetch(
            process.env.REACT_APP_BACKEND_URL + endpoint
        );
    }
    else {
        return {
            error: "API not found"
        }
    }
}
