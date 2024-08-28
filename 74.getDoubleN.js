function getDoubleN(n) {
    let newNum = n;
    return () => {
        newNum *= 2;
        return newNum;
    };
}