var point1 = {
    x: 2,
    y: 1
};
var point2 = {
    x: 3,
    y: 32
};
var threeDPoint = {
    x: 20,
    y: 11,
    z: 50
};
function addPoints(p1, p2) {
    return {
        x: p1.x + p2.x,
        y: p1.y + p2.y
    };
}
console.log(addPoints(point1, point2));
console.log(addPoints(point1, threeDPoint));
