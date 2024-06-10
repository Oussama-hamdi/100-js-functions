function lastNRevert(text, n) {
    if (n > text.length) {
        return [...text].reverse().join('');
    }
    return [...text.slice(n)].reverse().join('').trim();
}

console.log(lastNRevert(Hello, 11)); // 'olleH'