function createStack() {
    const stack = [];

    return {
        add: (n) => {
            return stack.unshift(n);
        },
        remove: () => {
            return stack.shift();
        },
        list: () => stack
    }
}