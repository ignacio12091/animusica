const saveSession = () => {
    sessionStorage.setItem('logged', true);
}

const closeSession = () => {
    sessionStorage.removeItem('logged');
}

const isLogged = () => {
    const logged = sessionStorage.getItem('logged');
    if (logged) {
        return true;
    } else {
        return false;
    }
}

module.exports = {
    saveSession,
    closeSession,
    isLogged,
}