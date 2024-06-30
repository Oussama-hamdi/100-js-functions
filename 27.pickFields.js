function pickFields(data, fields) {
    const newField = {};

    for (let ele of fields) {
       if (ele in data) {
           newField[ele] = data[ele];
       }
    }

    return newField;
}