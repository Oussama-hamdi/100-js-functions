function createQueue() {
    const queue = [];
    return {
    add: (n) => {
        queue.push(n);
    },
    remove: () => {
        return queue.shift();
    },
    list: () => {
        return queue;
    }
  }
}