function countOccurrences(str, char) {
    var counter = 0;
    for (var i = 0; i < str.length; i++) {
        if (str.charAt(i) === char) {
            counter += 1;
        }
    }
    return counter;
}
console.log(countOccurrences("ini mini miny moe", "n"));