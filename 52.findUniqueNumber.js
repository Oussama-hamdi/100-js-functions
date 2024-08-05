function findUniqueNumber(numbers) {
    for (let i = 0; i < numbers.length; ++i) {
        if (numbers.indexOf(numbers[i]) === numbers.lastIndexOf(numbers[i])) {
            return numbers[i];
        }
    }
}