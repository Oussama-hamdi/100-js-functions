function moveItems(numbers, moveInstructions) {
    for (let i = 0; i < moveInstructions.length; ++i) {
        let currentInstruction = moveInstructions[i];
        let [num] = numbers.splice(currentInstruction.fromIndex, 1);

        numbers.splice(currentInstruction.toIndex, 0, num);
    }

    return numbers;
}