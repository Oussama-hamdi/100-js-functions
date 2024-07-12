function areValuesUnique(numbers) {
    return [...new Set(numbers)].length === numbers.length;
}