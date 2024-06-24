function extractElementsBetweenPositions(numbers, n, m) {
    let sortedNums = [n, m].sort((a, b) => a - b);

    return numbers.slice(sortedNums[0], sortedNums[1] + 1);
}