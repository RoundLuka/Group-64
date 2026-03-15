Array.prototype.reduce = function(callback, initialValue) {
    var arr = this;
    var acc, startIndex;

    if (arguments.length > 1) {
        acc = initialValue;
        startIndex = 0;
    } else {
        acc = arr[0];
        startIndex = 1;

        for (var i = startIndex; i < arr.length; i++) {
        acc = callback(acc, arr[i], i, arr)
        }

    return acc;
    }
}