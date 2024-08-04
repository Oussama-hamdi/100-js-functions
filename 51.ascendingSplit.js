function ascendingSplit(numbers) {
    const newArr = [];
    let idxPointer = 0;
  
    for (let i = 0; i < numbers.length; ++i) {
      if (numbers[i + 1] < numbers[i] || i === numbers.length - 1) {
          newArr.push(numbers.slice(idxPointer, i + 1));
          idxPointer = i + 1;
      }
    }
  
    return newArr;
}