// 泛型
function identity(arg) {
    return arg;
}
// let output = identity<string>('String'); 
var output = identity('String'); // 类型推断
function logIdentity(arg) {
    console.log(arg.length);
    return arg;
}
var myIdentity = identity;
// 泛型类
var GneriNumber = /** @class */ (function () {
    function GneriNumber() {
    }
    return GneriNumber;
}());
var myGneriNumber = new GneriNumber();
myGneriNumber.zeroValue = 0;
myGneriNumber.add = function (x, y) {
    return x + y;
};
var myGneriString = new GneriNumber();
myGneriString.zeroValue = 'string ';
myGneriString.add = function (x, y) {
    return x + y;
};
console.log(myGneriNumber.add(myGneriNumber.zeroValue, 2));
console.log(myGneriString.add(myGneriString.zeroValue, 'test'));
function loggingIdentity(arg) {
    console.log(arg.length);
    return arg;
}
loggingIdentity({ length: 2 });
