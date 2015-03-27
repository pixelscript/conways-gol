var Point = function (x,y,z) {
	this.x = x;
	this.y = y;
	this.z = z;
	return this;
}

Point.prototype.add = function(point) {
	this.x+=point.x;
	this.y+=point.y;
	this.z+=point.z;
	return this;
}

Point.prototype.scale = function(val) {
	this.x*=val;
	this.y*=val;
	this.z*=val;
	return this;
}

Point.prototype.copy = function() {
	return new Point(this.x,this.y,this.z);
}