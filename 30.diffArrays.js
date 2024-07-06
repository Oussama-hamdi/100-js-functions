function diffArrays(numbers1, numbers2) {
    const diffNums = [];

    for (let i = 0; i < numbers1.length; ++i) {
        if (!(numbers2.includes(numbers1[i]))) {
            diffNums.push(numbers1[i])
        }
    }

    for (let i = 0; i < numbers2.length; ++i) {
        if (!(numbers1.includes(numbers2[i]))) {
            diffNums.push(numbers2[i])
            }
    }

    return diffNums;
}