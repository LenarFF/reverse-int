module.exports = function reverse(n) {
    let str = String(n);
    let result = "";
    for (let num of str) {
        if (num === "-") continue;
        result = num + result;
    }
    return +result;
};
