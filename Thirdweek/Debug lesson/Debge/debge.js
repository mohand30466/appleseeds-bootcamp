function getSum(arr1, arr2) {
    var sum = 0;
    for (var i = 0; i < arr1.length; i++) {
        sum += arr1[i];
    }
    for (var i = 0; i < arr2.length; i++) {
        sum += arr2[i];
    }
    return sum;
}
console.log(getSum([1, 2, 3], [5, 66, 23]));