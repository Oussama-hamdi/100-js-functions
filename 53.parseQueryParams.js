function parseQueryParams(url) {
    let myQueries = new Map();
    let matchedQueries = url.match(/\w+=[a-z0-9]+/ig) || [];

    for (let query of matchedQueries) {
        let values = query.split('=');
        myQueries.set(values[0], values[1])
    }

    return myQueries;
}