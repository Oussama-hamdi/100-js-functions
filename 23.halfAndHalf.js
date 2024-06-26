function halfAndHalf(text) {
    let half = Math.floor(text.length / 2);
    return text.slice(0, half).toLowerCase() + text.slice(half).toUpperCase();
}