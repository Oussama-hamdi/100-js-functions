function createCounter(initialValue) {
    let value = initialValue;

    return {
        increment: () => {
            ++value;
        },
        decrement: () => {
            --value;
        },
        getValue: () => value 
    };
}