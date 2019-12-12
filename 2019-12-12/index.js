var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
function getProperty(obj, key) {
    return obj[key];
}
var x = { a: 1, b: 2, c: 3, d: 4 };
getProperty(x, 'a');
// getProperty(x, 'm')
function create(c) {
    return new c();
}
var BeeKeeper = /** @class */ (function () {
    function BeeKeeper() {
    }
    return BeeKeeper;
}());
var LionKeeper = /** @class */ (function () {
    function LionKeeper() {
    }
    return LionKeeper;
}());
var Animal = /** @class */ (function () {
    function Animal() {
    }
    return Animal;
}());
var Bee = /** @class */ (function (_super) {
    __extends(Bee, _super);
    function Bee() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Bee;
}(Animal));
var Lion = /** @class */ (function (_super) {
    __extends(Lion, _super);
    function Lion() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Lion;
}(Animal));
function createInstance(c) {
    return new c();
}
/* createInstance(Lion).keeper.nameTag = 'nameTag';
createInstance(Bee).keeper.hasMask = 'hasMask';
createInstance(Bee).numLenas = 12; */
// 交叉类型
function extend(first, second) {
    var result = {};
    for (var id in first) {
        first[id] = result[id];
    }
    for (var id in second) {
        if (!result.hasOwnProperty(id)) {
            second[id] = result[id];
        }
    }
    return result;
}
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    return Person;
}());
var ConsoleLogger = /** @class */ (function () {
    function ConsoleLogger() {
    }
    ConsoleLogger.prototype.log = function () {
        // 
    };
    return ConsoleLogger;
}());
var jam = extend(new Person('jam'), new ConsoleLogger());
var n = jam.name;
jam.log();
