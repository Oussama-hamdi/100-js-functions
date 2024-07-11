function biggestPowerOf2(number) {
    if (number <= 0 || number !== Math.floor(number)) return -1;

    let power = 0;

    for (let i = 1; i < number; ++i) {
        if ((2 ** i) > number) break;
        power = i;
    }

    return power;
}