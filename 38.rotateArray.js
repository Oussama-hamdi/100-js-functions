function rotateArray(items, n) {
    const length = items.length;
    if (n === 0 || length < 2) return items;

    n = n % length;
    if (n < 0) n += length;

    return items.slice(-n).concat(items.slice(0, -n));
}