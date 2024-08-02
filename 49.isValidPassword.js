function isValidPassword(password) {
    const checkUppercase = password.match(/[A-Z]/g) || [];
    const checkDigit =  password.match(/[0-9]/g) || [];
    const checSymbol =  password.match(/[_!?*]/g) || [];

    return checkUppercase.length >= 3 && checkDigit.length > 0 && checSymbol.length > 0;
}