function getLongestString(arrayOfStrings) {
    return arrayOfStrings.reduce((acc, cur) => {
        return acc.length >= cur.length ? acc : cur;
    }, "")
}