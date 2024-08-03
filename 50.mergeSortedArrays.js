function mergeSortedArrays(numbers1, numbers2) {
    if (numbers1[0] > numbers2[0]) {
        return [...numbers2.reverse(), ...numbers1];
    } else {
        return [...numbers1, ...numbers2.reverse()];
    }
}