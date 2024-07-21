function compareSets(setA, setB) {
    // onlyA - elements in setA that are not in setB
    const onlyA = new Set([...setA].filter(x => !setB.has(x)));
  
    // onlyB - elements in setB that are not in setA
    const onlyB = new Set([...setB].filter(x => !setA.has(x)));
  
    // union - all unique elements from both sets
    const union = new Set([...setA, ...setB]);
  
    return { onlyA, onlyB, union };
}