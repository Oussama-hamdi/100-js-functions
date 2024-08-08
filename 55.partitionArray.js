function partitionArray(numbers, predicateCallback) {
    const myObj = {
        fail: [],
        pass: []
    }

    for (let i of numbers) {
        if (predicateCallback(i)) {
            myObj.pass.push(i);
        } else {
            myObj.fail.push(i);
        }
    }

    return myObj;
}