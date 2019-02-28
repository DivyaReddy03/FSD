var execute = function (action, x, y) {
    var result;
    switch (action) {
        case 'ADD':
            result = _add(x, y);
            break;
        case 'DIFF':
            result = _sub(x, y);
            break;
        case 'MUL':
            result = _mul(x, y);
            break;
        case 'DIV':
            result = _div(x, y);
            break;
    }
    return result;
};
var _add = function (x, y) {
    return x + y;
};
var _sub = function (x, y) {
    return x - y;
};
var _mul = function (x, y) {
    return x * y;
};
var _div = function (x, y) {
    return x / y;
};
console.log(execute("DIV", 5, 6));
