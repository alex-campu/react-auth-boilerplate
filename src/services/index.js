import axios from 'axios'

function authHeader(token) {
    const user = JSON.parse(window.localStorage.getItem('user'))

    if (token) {
        return { Authorization: 'Bearer ' + token }
    } else if (user && user.access_token) {
        return { Authorization: 'Bearer ' + user.access_token }
    } else {
        return {}
    }
}

export const generalService = (route) = ({
    get: async () => axios.get(route, { headers: authHeader() })
})
