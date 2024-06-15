function getBiggestNumberInArrays(numbers1, numbers2) {
    return Math.max(...numbers1, ...numbers2);
}

console.log(getBiggestNumberInArrays([1, 7, 8], [6, 3, 9])); // 9