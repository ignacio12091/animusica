const saveSession = (user) => {
    sessionStorage.setItem('user', JSON.stringify(user));
}

const closeSession = () => {
    sessionStorage.removeItem('user');
}

const isLogged = () => {
    const logged = sessionStorage.getItem('user');
    if (logged) {
        return true;
    } else {
        return false;
    }
}

const getUserPhoto = () => {
    const user = JSON.parse(sessionStorage.getItem('user'));    
    return (user.link_imagen);
}

const getUserMail = () => {
    const user = JSON.parse(sessionStorage.getItem('user'));
    return (user.email);
}

const getUserName = () => {
    const user = JSON.parse(sessionStorage.getItem('user'));
    return (user.nombre);
}

module.exports = {
    saveSession,
    closeSession,
    isLogged,
    getUserPhoto,
    getUserMail,
    getUserName,
}