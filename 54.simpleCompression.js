function simpleCompression(text) {
    if (text === '') return '';

    const arr = [];
    let count = 1;

    for (let i = 0; i < text.length; ++i) {
        if (text[i] === text[i + 1]) {
            ++count;
        } else {
            arr.push(text[i] + (count > 1 ? count : ''))
            count = 1;
        }
    }

    return arr.join('');
}