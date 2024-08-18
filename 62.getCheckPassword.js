function getCheckPassword(password) {
    return function checkPassword(pass) {
        return password === pass;
    }
}