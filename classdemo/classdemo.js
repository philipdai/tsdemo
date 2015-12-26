var Point = (function () {
    function Point(xValue, yValue) {
        this.xValue = xValue;
        this.yValue = yValue;
    }
    Point.add = function (p1, p2) {
        return new Point(p1.x + p2.x, p1.y + p2.y);
    };
    Object.defineProperty(Point.prototype, "x", {
        get: function () {
            return this.xValue;
        },
        set: function (value) {
            this.xValue = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Point.prototype, "y", {
        get: function () {
            return this.yValue;
        },
        set: function (value) {
            this.yValue = value;
        },
        enumerable: true,
        configurable: true
    });
    Point.prototype.add = function (point) {
        return new Point(point.x + this.x, point.y + this.y);
    };
    Point.origin = new Point(0, 0);
    return Point;
})();
var p1 = new Point(2, 1);
var p2 = new Point(null, null);
p2.x = 3;
p2.y = 4;
console.log(p1.x);
console.log(p2);
console.log(p1.add(p2));
console.log(Point.add(p1, p2));
console.log(Point.origin);
