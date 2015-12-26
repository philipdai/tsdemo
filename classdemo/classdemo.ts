class Point {
	static origin = new Point(0, 0);

	static add(p1: Point, p2: Point) {
		return new Point(p1.x + p2.x, p1.y + p2.y);
	}

	constructor(private xValue: number, private yValue: number) {
	}

	get x() {
		return this.xValue;
	}

	get y() {
		return this.yValue;
	}

	set x(value: number) {
		this.xValue = value;
	}

	set y(value: number) {
		this.yValue = value;
	}

	add(point: Point) {
		return new Point(point.x + this.x, point.y + this.y);
	}
}

var p1 = new Point(2, 1);
var p2 = new Point(null, null);

p2.x = 3;
p2.y = 4;

console.log(p1.x);
console.log(p2);
console.log(p1.add(p2));
console.log(Point.add(p1, p2));
console.log(Point.origin);