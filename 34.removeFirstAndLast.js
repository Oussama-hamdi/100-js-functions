function removeFirstAndLast(source, target) {
    if (source.indexOf(target) === -1) return source;

    let firstIdx = source.indexOf(target);
    let lastIdx = source.lastIndexOf(target)

    // Handle the case where the target appears only once
    if (firstIdx === lastIdx) {
        return source.slice(0, firstIdx) + source.slice(firstIdx + target.length);
    }

    return source.slice(0, firstIdx) + source.slice(firstIdx + target.length, lastIdx) + source.slice(lastIdx + target.length);
}