
function flipObject(people) {
    const newObj = {};

    for (const [key, value] of Object.entries(people)) {
        if (!newObj[value]) {
          newObj[value] = [key]
        } else {
          newObj[value].push(key)
        }
    }

    return newObj;
}