function promiseOrder(promises) {
    let order = [];
   let indexedPromises = promises.map((promise, index) =>
       promise.then(() => order.push(index))
   );
   return Promise.all(indexedPromises).then(() => order);
}