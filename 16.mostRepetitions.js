function mostRepetitions(string1, string2, letter) {
    let st1Occurences = string1.match(new RegExp(letter, "g")) || 0;
    let st2Occurences = string2.match(new RegExp(letter, "g")) || 0;

    if (st1Occurences.length >= st2Occurences.length) {
        return string1;
    } else {
        return string2;
    }
}