export const loginService = async (user) => {
    window.localStorage.setItem('user', JSON.stringify(user))
}
