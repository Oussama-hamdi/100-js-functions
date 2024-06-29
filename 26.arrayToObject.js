function arrayToObject(strings) {
    return strings.reduce((acc, cur, idx) => {
        if (acc[cur] === undefined) {
            acc[cur] = idx;
        }
        return acc;
    }, {});
}