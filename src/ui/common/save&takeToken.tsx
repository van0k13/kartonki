export const saveTokenToLS = (token: string) => {           //LS - Local Storage
    let stateAsString = '';
    if (token !== '') {
        stateAsString = JSON.stringify(token)
        localStorage.setItem('token for kartonki', stateAsString)
    }
}

export const takeTokenFromLS = () => {
        let localStorageToken = ''
        let stateAsString = localStorage.getItem('token for kartonki')
        if (stateAsString !== null) {
            localStorageToken = JSON.parse(stateAsString);
        }
        return localStorageToken
}

