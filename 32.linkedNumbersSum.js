function linkedNumbersSum(node) {

    let sum = node.value || 0;

    let currentNode = node.next

    while (currentNode) {
        sum += currentNode.value;

        currentNode = currentNode.next;
    }

    return sum;
}