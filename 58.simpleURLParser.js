function simpleURLParser(route, url) {
    const routeLength = route.match(/(\/)?\w+/g)?.length || 0;
    const urlLength = url.match(/(\/)?[a-z0-9\-]+/ig)?.length || 0;

    return routeLength == urlLength;
}