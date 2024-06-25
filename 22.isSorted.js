function isSorted(numbers) {

    if (numbers.length <= 1) return true;

    if (numbers[0] > numbers[1]) {
        for (let i = 0; i < numbers.length - 1; ++i) {
            if (numbers[i] < numbers[i + 1]) {
                return false
            }
        }
    } else {
        for (let i = 0; i < numbers.length - 1; ++i) {
            if (numbers[i] > numbers[i + 1]) {
                return false
            }
        }
    }

    return true;
}