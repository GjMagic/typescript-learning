function student(name) {
    console.log(name);
}
student({ name: '小明' });
function createSquare(config) {
    var newSquare = { color: 'blue', area: 123 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.area) {
        newSquare.area = config.area;
    }
    return newSquare;
}
var mySquare = createSquare({ color: 'yellow' });
console.log(mySquare);
var p1 = { x: 10, y: 20 };
var a = [1, 2, 3];
var ro = a;
