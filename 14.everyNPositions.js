function everyNPositions(message, step) {
    let str = "";

    for (let i = 0; i < message.length; ++i) {
        if (i % step === 0) {
            str += message[i];
        }
    }

    return str;
}